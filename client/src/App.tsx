import React from 'react';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Auth from './Auth'

function App() {
  //testing stuff
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  //auth block
  //TODO: move to /auth route; with Auth.tsx
  const onLogin = "";
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");





  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
            </Route>
            <Route path="/auth">
              <Auth
                name={name}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            </Route>
            <Route path="/selectcharacter">
              <h1>selectcharacter</h1>
            </Route>
            <Route path="/play">
              <h1>play</h1>
            </Route>
            <Route path="/">
              <h1>Page Count: {count}</h1>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
