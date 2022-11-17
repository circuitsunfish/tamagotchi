//https://learning.flatironschool.com/courses/5230/pages/authenticating-users?module_item_id=486270
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useHistory } from 'react-router-dom';
type Dispatcher<S> = Dispatch<SetStateAction<S>>;


type SignUpProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}




export default function SignUp({ name, setUsername, password, setPassword }: SignUpProps) {
    const history = useHistory();
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    //https://www.kindacode.com/article/react-typescript-handling-form-onsubmit-event/
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((response) => response.json())
            .then(() => {
                setUsername(name)
                history.push("/play")
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <label htmlFor="username"className='p-2'>Username:</label>
            <input
                type="text"
                id="username"
                value={name}
                onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password" className='p-4'>Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="password_confirmation" className='p-4'>Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
            <button type="submit" className='p-2 hover:bg-slate-400'>Submit</button>
        </form>
    );
}
