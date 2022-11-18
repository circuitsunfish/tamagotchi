import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { checkCookie } from "./CheckCookie";
import { useHistory } from "react-router-dom";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type NavbarProps = {
    name: string,
    setUsername: Dispatcher<string>
}

export default function Navbar({ name, setUsername }: NavbarProps) {
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
                <NavLink to="/"><button className="p-2 hover:bg-red-200 hover:scale-110 ">[Home]</button></NavLink>
                {/* <NavLink to="/account"><button className="p-2 hover:bg-slate-400">Account</button></NavLink> */}
                {/* <NavLink to="/tamas_character"><button className="p-2 hover:bg-slate-400">Visit Pets</button></NavLink> */}
                {name !== "" ?
                    <NavLink to="#" onClick={() => handleLogout()}><button className="p-2 hover:bg-red-200 hover:scale-110">[Logout]</button></NavLink> :
                    <NavLink to="/Auth"><button className="p-2 hover:bg-red-200 hover:scale-110">[Log In]</button></NavLink>}
            </div>
        </nav>
    );
}