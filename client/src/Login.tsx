import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export default function Login(name: string, setUsername: Dispatcher<string>, password: string, setPassword: Dispatcher<string>) {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: name }),
        })
            .then((r) => r.json())
        // .then((user) => onLogin(user));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}