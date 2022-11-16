import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
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
                <li>
                    <Link to="/logout">Logout</Link>
                </li>

            </ul>
        </nav>
    );
}