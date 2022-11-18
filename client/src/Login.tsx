import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type LoginProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}

export default function Login({ name, setUsername, password, setPassword }: LoginProps) {

    const history = useHistory();

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
            .then((response) => response.json())
            .then(() => {
                setUsername(name)
                history.push("/play");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <div className='p-4'>
                    <label htmlFor="name" className='p-4'>Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className='p-4'>
                    <label htmlFor="password" className='p-4'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className='p-4 hover:bg-slate-400'>Login</button>
            </div>
        </form>
    );
}