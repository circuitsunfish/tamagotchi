import React, { useEffect, useState } from "react";
import { checkCookie } from "./CheckCookie";
import { Link } from "react-router-dom";
import HatchPetForm from "./HatchPetForm";
import { Bar } from "@nivo/bar";


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

export default function ShowPets() {

    const [petName, setPetName] = useState("");
    const [myPets, setMyPets] = useState([] as PetInfo[]);
    const [selectedPet, setSelectedPet] = useState(0);


    useEffect(() => {


        fetch("/mypets")
            .then((response) => response.json())
            .then((petInfo) => setMyPets([petInfo]))
    }, [])

    // this is for later
    // useEffect(() => {
    //     if (myPets.length > 0) {
    //         console.log({ myPets })
    //         setSelectedPet((cur) => {
    //             let newSelectedPetData = Object.entries(myPets[0])[4]
    //             console.log({ newSelectedPetData })
    //             return { ...cur, newSelectedPetData }
    //         }
    //         )
    //     }
    // }, [myPets])

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
            <Bar
                width={100}
                height={100}
                data={[{ label: 'selectedPet', hunger: 4 }, { label: 'myotherpet', hunger: 6 }]}
                indexBy='label'
                keys={['hunger']}
            />

        </div>)
    }

}