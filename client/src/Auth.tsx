import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import SignUp from './SignUp';
import Login from './Login';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type NavbarProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}

export default function Navbar({ name, setUsername, password, setPassword }: NavbarProps) {

    const [loginOrSignUp, setLoginOrSignUp] = useState(true);

    const authToggle = () => {
        let buttonText = !loginOrSignUp ? "Login" : "Sign Up";
        return <h1
            onClick={() => { setLoginOrSignUp((cur) => (!cur)) }}
        >[{buttonText}]</h1>
    }


    const authForm = () => {
        return loginOrSignUp ? <Login
            name={name}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
        /> :
            <SignUp
                name={name}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}

            />
    }

    return (
        <div id="auth-wrapper">
            {authToggle()}
            {authForm()}
        </div>
    );
}