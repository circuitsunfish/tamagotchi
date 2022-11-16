import React, { Dispatch, SetStateAction, useState } from 'react';
import { useHistory } from 'react-router-dom'

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type HatchPetProps = {
    petName: string
    setPetName: Dispatcher<string>
}



export default function HatchPetForm({ petName, setPetName }: HatchPetProps) {

    const history = useHistory();

    function onCreatePet() {
        history.push("/play");
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/tama_characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: petName,
                hunger: 5,
                attention: 5,
                sick: false,
                weight: 2.0,
                height: 4.0
            }),
        })
            .then((response) => response.json())
            .then(() => onCreatePet());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hatch A New Pet</h1>
            <label htmlFor="petName">Speak a Name to Summon an Egg:</label>
            <input
                type="text"
                id="petName"
                value={petName}
                onChange={(event) => setPetName(event.target.value)}
            />
            <button type="submit">[Summon An Egg]</button>
        </form>
    );
}