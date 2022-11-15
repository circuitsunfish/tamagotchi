import React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth'



function App() {
  const history = useHistory();
  console.log({ history })
  //cookies
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);
  console.log({ cookies })

  // const PlayOrAuth = (history) => {
  //   if (name === "") {
  //     history.push("/auth");
  //   }
  //   else {
  //     history.push("/play");
  //   }
  //   return null;
  // }


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
              {/* {PlayOrAuth()} */}
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
