import React from "react";
import { Link } from "react-router-dom";
import { checkCookie } from "./CheckCookie";
import { useHistory } from "react-router-dom";


export default function Navbar() {

    const history = useHistory();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        })
            .then(() => history.push('/'));
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