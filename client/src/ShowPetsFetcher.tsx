import React, { useEffect, useState } from 'react'
import ShowPets, { PetInfo } from './ShowPets'



type ShowPetsFetcherProps = {
    name: string
}

export const ShowPetsFetcher = ({ name }: ShowPetsFetcherProps) => {
    const [myPets, setMyPets] = useState([] as PetInfo[]);

    useEffect(() => {


        fetch("/mypets")
            .then((response) => response.json())
            .then((petInfo) => setMyPets([petInfo]))

    }, [])

    return myPets.length > 0 ? (<ShowPets
        name={name}
        myPets={myPets}
        setMyPets={setMyPets}
    />) : <p>loading</p>
}

