import React from "react";
import styles from './header.module.css'
import appLogo from '../../assets/images/appLogo.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <NavLink to='/' className={styles.header}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={appLogo} alt="appLogo"/>
            </div>
            <h2 className={styles.title}>Google Books API app</h2>
        </NavLink>
    )
}

export default Header
