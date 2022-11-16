import React, { useState } from "react";
import { checkCookie } from "./CheckCookie";
import { Link } from "react-router-dom";
import HatchPetForm from "./HatchPetForm";


export default function ShowPets() {

    const [petName, setPetName] = useState("");

    // let petName = "";
    // let setPetName = () => { return null }

    function gatherPetInfo() {

        return fetch("/mypets")
            .then((response) => response.json())
            .then((response) => console.log({ response }))
    }




    if (checkCookie('user_id') === undefined) {
        return (
            <div>
                <Link to="/Auth"> Please Log In </Link>
            </div>
        )
    }
    else if (checkCookie('tama_character_id') === undefined) {
        gatherPetInfo();
        return (<div>
            <p>u need to hatch a pet</p>
            <HatchPetForm
                petName={petName}
                setPetName={setPetName}
            />
        </div>
        )
    }
    else {
        return (<p>here is where your pets would be. also u could hatch a pet</p>)
    }

}