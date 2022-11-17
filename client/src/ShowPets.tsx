import React, { useEffect, useState } from "react";
import { checkCookie } from "./CheckCookie";
import { Link } from "react-router-dom";
import HatchPetForm from "./HatchPetForm";


export default function ShowPets() {

    const [petName, setPetName] = useState("");
    const [myPets, setMyPets] = useState([]);

    // let petName = "";
    // let setPetName = () => { return null }

    function gatherAllMyPetsInfo() {

        return fetch("/mypets")
            .then((response) => response.json())
            .then((response) => console.log(response.tama_character))
    }

    useEffect(() => {
        let petID = checkCookie('tama_character_id');
        fetch(`tama_characters/${petID}`)
            .then((response) => response.json())
            .then((responseJson) => {
                setMyPets([]);
                setMyPets(responseJson)
            })
    }, [])




    // const RenderPet = async () => {
    //     let petID = checkCookie('tama_character_id');
    //     const response = await fetch(`http://localhost:3000/tama_character/${petID}`);
    //     const response_json = await response.json();
    //     // return <p>{response_json}</p>;
    //     return response_json.resolved ? response_json : null;
    // }


    if (checkCookie('user_id') === undefined) {
        return (
            <div>
                <Link to="/Auth"> Please Log In </Link>
            </div>
        )
    }
    else if (checkCookie('tama_character_id') === undefined) {
        gatherAllMyPetsInfo();
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
        return (<div>
            <p>
                {Object.entries(myPets).toString()}
            </p>

        </div>)
    }

}