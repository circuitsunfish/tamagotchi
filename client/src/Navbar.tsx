import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { checkCookie } from "./CheckCookie";
import { useHistory } from "react-router-dom";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type NavbarProps = {
    setUsername: Dispatcher<string>
}

export default function Navbar({ setUsername }: NavbarProps) {

    const history = useHistory();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
            .then(() => {
                setUsername("");
                history.push('/')
            });
    }



    return (
        <nav>
            <div className="display: flex; align-items: center; justify-content: center; p-10">
                <NavLink to="/"><button className="p-2 hover:bg-slate-400 ">Home</button></NavLink>
                <NavLink to="/account"><button className="p-2 hover:bg-slate-400">Account</button></NavLink>
                <NavLink to="/save"><button className="p-2 hover:bg-slate-400">Save</button></NavLink>
                <NavLink to="/tamas_character"><button className="p-2 hover:bg-slate-400">Visit Pets</button></NavLink>
                {checkCookie('user_id') !== undefined ?
                    <NavLink to="#" onClick={() => handleLogout()}><button className="p-2 hover:bg-slate-400">Logout</button></NavLink> :
                    <NavLink to="/Auth"><button className="p-2 hover:bg-slate-400">Log In</button></NavLink>
                }

            </div>
        </nav>
    );
}