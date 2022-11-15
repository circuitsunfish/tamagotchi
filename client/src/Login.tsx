import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type LoginProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}

export default function Login({ name, setUsername, password, setPassword }: LoginProps) {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password
            }),
        })
            .then((r) => r.json())
            .then((user) => setUsername(name));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="name">Player Username:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}