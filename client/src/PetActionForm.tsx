import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { NavLink } from "react-router-dom";
import { checkCookie } from './CheckCookie';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;


//TODO: remove this after serializing out the digest
type PetInfo = {
    id: number
    bio: string
    relationship?: number
    player: {
        id: number
        name: string
        password_digest: string
    }
    tama_character: {
        id: number
        name: string
        hunger: number
        attention: number
        sick: boolean
        weight: number
        height: number
    }

}

type PetActionFormProps = {
    myPets: PetInfo[]
    selectedPet: number
    hunger: number
    attention: number
    setHunger: Dispatcher<number>
    setAttention: Dispatcher<number>
}

export const PetActionForm = ({ myPets, selectedPet, hunger, setHunger, attention, setAttention }: PetActionFormProps) => {


    function clampValue(boundedNumber: number) {
        return Math.min(Math.max(boundedNumber, 0), 10)
    }

    let postData = {
        name: myPets[selectedPet].tama_character.name,
        hunger: hunger,
        attention: attention
    }

    function postPetStats() {
        console.log(postData.attention)
        postData.hunger = clampValue(postData.hunger);
        postData.attention = clampValue(postData.attention);
        fetch(`/tama_characters/${myPets[selectedPet].tama_character.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((response) => {
            if (response.ok) {
                response.json().then((newPetInfo) => {
                    console.log(newPetInfo)
                });
            }
            else {
                //     response.json().then((errorData) => setErrors(errorData.errors));
                response.json().then((errorData) => console.log(errorData.errors));
            }
        });
    }
    function handlePetActionClick(option: number) {
        switch (option) {
            case 1:
                //u fed the pet
                // postData.hunger -= 1
                setHunger((cur: number) => {
                    return clampValue(cur -= 1)
                })
                postPetStats()
                break;
            case 2:
                // pay attention to the pet!!
                // postData.attention += 1
                setAttention((cur: number) => {
                    return clampValue(cur += 1)
                })
                postPetStats()
                break;
            case 3:
                // statement N
                console.log("How? Why?")
                break;
            default:
                // 
                console.log("haha u borked it")
                break;
        }

    }
    //check to see how much time has passed
    useEffect(() => {

        if (hunger === null || attention === null) { return }

        let last_accessed_cookie = checkCookie('last_accessed')
        let last_accessed_date = last_accessed_cookie ? Date.parse(last_accessed_cookie) : 0;
        let now = Date.now()

        let time_passed = now - last_accessed_date
        if (time_passed > (4 * 3600000)) { // four hours

            if (postData.attention >= 0) postData.attention -= 1;
            if (postData.hunger < 10) postData.hunger += 1;

        }
        postPetStats()
    }, [hunger, attention])





    return (
        <div className="display: flex; align-items: center; justify-content: center; p-10">
            <p>take care of your pet</p>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(1)}>[Feed]</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >[Pay ATTENTION!!]</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >[Cuddles!]</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >[Play with me!]</button></NavLink>


        </div>
    )
}
