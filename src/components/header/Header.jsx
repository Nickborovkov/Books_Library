import React from "react";
import appLogo from '../../assets/images/appLogo.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <NavLink to='/'>
            <div>
                <img src={appLogo} alt="appLogo"/>
            </div>
            <h2>Google Books API app</h2>
        </NavLink>
    )
}

export default Header
