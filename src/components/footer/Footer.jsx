import React from "react";
import { AiOutlineLink } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <div>
                <a href="https://developers.google.com/books/docs/v1/using" target='_blank' rel="noreferrer" ><AiOutlineLink/>  API</a>
            </div>
            <div>
                <a  href='https://github.com/Nickborovkov' target='_blank' rel="noreferrer"> <AiFillGithub/>  Made by Nick Borovkov</a>
            </div>


        </div>
    )
}

export default Footer
