import React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Auth from './Auth'
import { checkCookie } from './CheckCookie';
import Footer from './Footer';
import Navbar from './Navbar';
import { ShowPetsFetcher } from './ShowPetsFetcher';



/**
 * If there is a valid cookie, then route the player to the game
 * otherwise, the user must log in or create an account
*/
const PlayOrAuth = () => {
  //useHistory needs to be a child of <browserRouter>
  //https://stackoverflow.com/questions/62614433/react-router-why-is-the-usehistory-undefined-in-react

  const cookieValue = checkCookie('user_id');
  //TODO: it's probably possible to use useEffect for this instead of cookies
  const history = useHistory();
  if (cookieValue === undefined) {
    history.push("/auth");
  }
  else {
    history.push("/play");
  }
  return null;
}

function App() {

  //username
  const [name, setUsername] = useState("");
  //TODO use a different piece of state for this that isn't the controlled form thing
  useEffect(() => {
    let cookieUser = checkCookie('user_name')
    if (cookieUser != undefined) { setUsername(cookieUser) }
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar
            name={name}
            setUsername={setUsername}
          />
          <Switch>
            <Route path="/auth">
              <Auth
                name={name}
                setUsername={setUsername}
              />
            </Route>
            <Route path="/selectcharacter">
              <h1>selectcharacter</h1>
            </Route>
            <Route path="/play">
              <ShowPetsFetcher
                name={name}
              />
            </Route>
            <Route path="/">
              <PlayOrAuth />
            </Route>
          </Switch>
          <Footer />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
