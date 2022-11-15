//https://learning.flatironschool.com/courses/5230/pages/authenticating-users?module_item_id=486270


import React, { useState } from 'react';


// export default function SignUp({ onLogin }: { onLogin: () => {} }) {
export default function SignUp() {
    const onLogin = "";
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
            .then((r) => r.json())
        // .then(onLogin);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
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
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
