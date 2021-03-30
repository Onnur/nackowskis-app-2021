import React from 'react';
import {NavLink} from 'react-router-dom';
//import '../../styles/AppStyles.css';

const NavBar = () => {

    return (<nav>
                <ul>
                    <li><NavLink to="/">Start</NavLink></li>
                    <li><NavLink to="/add-auction">Lägg till auktion</NavLink></li>
                </ul>
            </nav>)
}

export default NavBar ;