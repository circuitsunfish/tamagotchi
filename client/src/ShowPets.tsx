import { checkCookie } from "./CheckCookie";
import { Link } from "react-router-dom";
import HatchPetForm from "./HatchPetForm";


export default function ShowPets() {
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
            <HatchPetForm />
        </div>
        )
    }
    else {
        return (<p>here is where your pets would be. also u could hatch a pet</p>)
    }

}