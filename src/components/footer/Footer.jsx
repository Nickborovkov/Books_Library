import React from "react";
import styles from './footer.module.css'
import { AiOutlineLink } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <a className={styles.link} href="https://developers.google.com/books/docs/v1/using" target='_blank' rel="noreferrer" ><AiOutlineLink/>  API</a>
            </div>
            <div>
                <a className={styles.link} href='https://github.com/Nickborovkov' target='_blank' rel="noreferrer"> <AiFillGithub/>  Made by Nick Borovkov</a>
            </div>


        </div>
    )
}

export default Footer
