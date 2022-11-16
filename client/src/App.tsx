import React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Auth from './Auth'


/**
 * If there is a valid cookie, then route the player to the game
 * otherwise, the user must log in or create an account
*/
const PlayOrAuth = () => {
  //useHistory needs to be a child of <browserRouter>
  const history = useHistory();

  //https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('user_id'))
    ?.split('=')[1];

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

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
              <h1>play</h1>
            </Route>
            <Route path="/">
              <PlayOrAuth />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
