import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { checkCookie } from './CheckCookie';

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
}

export const PetActionForm = ({ myPets, selectedPet }: PetActionFormProps) => {
    let postData = { ...myPets[selectedPet].tama_character }

    function postPetStats() {
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
                    document.location.reload()

                });
            }
            //  else {
            //     response.json().then((errorData) => setErrors(errorData.errors));
            // }
        });
    }
    function handlePetActionClick(option: number) {
        switch (option) {
            case 1:
                //u fed the pet
                postData.hunger -= 1
                postPetStats()
                break;
            case 2:
                // pay attention to the pet!!
                postData.attention += 1
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
        let last_accessed_cookie = checkCookie('last_accessed')
        let last_accessed_date = last_accessed_cookie ? Date.parse(last_accessed_cookie) : null;
        let now = Date.now()
        let time_passed = last_accessed_date ? Math.round(now - last_accessed_date / 3600000) : 1 //; console.log("time passed had an issue");
        // console.log({ time_passed })
        postData.attention -= time_passed;
        postData.hunger += time_passed;
        fetch(`/tama_characters/${myPets[selectedPet].tama_character.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
    }, [])





    return (
        <div className="display: flex; align-items: center; justify-content: center; p-10">
            <p>take care of your pet</p>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(1)}>Feed</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >Pay ATTENTION!!</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >Cuddles!</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >Play with me!</button></NavLink>


        </div>
    )
}
