import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                <li>
                    <Link to="/delete">Delete</Link>
                </li>
                <li>
                    <Link to="/view">View</Link>
                </li>
                <li>
                    <Link to="/edit">Edit</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
