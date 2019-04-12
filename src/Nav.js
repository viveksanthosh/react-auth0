import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
           
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
    </ul>
</nav>;

export { Nav };
