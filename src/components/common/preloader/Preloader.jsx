import React from "react";
import styles from './preloader.module.css'
import { BiLoaderCircle } from 'react-icons/bi'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <BiLoaderCircle className={styles.icon}/>
        </div>
    )
}

export default Preloader
