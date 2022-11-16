import React from "react";
import { Link } from "react-router-dom";
import { checkCookie } from "./CheckCookie";


export default function Navbar() {


    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
        // .then(() => onLogout());
    }



    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/account">Account</Link>
                </li>
                <li>
                    <Link to="/save">Save</Link>
                </li>
                <li>
                    <Link to="/tamas">Visit Pets</Link>
                </li>
                {checkCookie('user_id') !== undefined ?
                    <li>
                        <Link to="#" onClick={() => handleLogout()}>Logout</Link>
                    </li>
                    :
                    <li>
                        <Link to="/Auth"> Log In </Link>
                    </li>
                }

            </ul>
        </nav>
    );
}