import React, { useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets, { PetInfo } from './ShowPets'


type ShowPetsFetcherProps = {
    name: string
}

export const ShowPetsFetcher = ({ name }: ShowPetsFetcherProps) => {

    const [petName, setPetName] = useState("");
    const [myPets, setMyPets] = useState([] as PetInfo[]);
    useEffect(() => {


        fetch("/mypets")
            .then((response) => response.json())
            .then((petInfo) => {
                if ("error" in petInfo) {
                    return
                }
                setMyPets([petInfo])
            })
            .catch(() => setMyPets([]))
    }, [])

    console.log({ myPets })
    if (!myPets || myPets.length === 0) {
        return (<div>
            <p>u need to hatch a pet</p>
            <HatchPetForm
                petName={petName}
                setPetName={setPetName}
            />
        </div>
        )
    }

    return myPets.length > 0 ? (<ShowPets
        name={name}
        myPets={myPets}
        setMyPets={setMyPets}
    />) : <p>loading</p>
}

