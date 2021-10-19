import React from "react";
import {NavLink} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <NavLink to='/'>Back home</NavLink>
            <h1>Page not found</h1>
        </div>
    )
}

export default ErrorPage
