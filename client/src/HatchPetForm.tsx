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
        history.push("/");
    }
    function getNumber() {
        // Returns a random integer from 1 to 10:
        return Math.floor(Math.random() * 10) + 1;
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
                hunger: getNumber(),
                attention: 5,
                sick: false,
                weight: getNumber(),
                height: getNumber()
            }),
        })
            .then((response) => response.json())
            .then(() => onCreatePet());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hatch A New Pet</h1>
            <label htmlFor="petName" className='p-2'>Speak a Name to Summon an Egg:</label>
            <input
                type="text"
                id="petName"
                value={petName}
                onChange={(event) => setPetName(event.target.value)}
            />
            <button type="submit"className='p-4 hover:bg-slate-400'>[Summon An Egg]</button>
        </form>
    );
}