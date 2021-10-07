import React from "react";
import styles from './errorPage.module.css'
import {NavLink} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <NavLink className={styles.link} to='/'>Back home</NavLink>
            <h1 className={styles.text}>Page not found</h1>
        </div>
    )
}

export default ErrorPage
