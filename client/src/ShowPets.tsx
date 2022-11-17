import React, { useEffect, useState } from "react";
import { checkCookie } from "./CheckCookie";
import { Link } from "react-router-dom";
import HatchPetForm from "./HatchPetForm";
import { Bar } from "@nivo/bar";


export default function ShowPets() {

    const [petName, setPetName] = useState("");
    const [myPets, setMyPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState({});


    useEffect(() => {


        fetch("/mypets")
            .then((response) => response.json())
            .then((petInfo) => setMyPets(petInfo))
    }, [])

    useEffect(() => {
        setSelectedPet((cur) => {
            let newSelectedPetData = Object.entries(myPets)[4]
            return { ...cur, newSelectedPetData }
        })
    }, [myPets])

    // stop using cookies for this
    //wrap gatherAllMyPetsInfo in useEffect and remove the cookies def in rails
    // useEffect(() => {
    //     let petID = checkCookie('tama_character_id');
    //     fetch(`tama_characters/${petID}`)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             setMyPets([]);
    //             setMyPets(responseJson)
    //         })
    // }, [])




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
                this is where the pet stats will be in a minute
            </p>
            <Bar
                width={400}
                height={400}
                data={[{ label: 'mypet', hunger: 4 }, { label: 'myotherpet', hunger: 6 }]}
                indexBy='label'
                keys={['hunger']}
            />

        </div>)
    }

}