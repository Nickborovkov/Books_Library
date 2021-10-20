import React from "react";
import {Spin} from "antd";

const Preloader = () => {
    return (
        <Spin
            style={{display: `block`, margin: `100px auto`}}
            tip="Loading..."
            size='large'>
        </Spin>
    )
}

export default Preloader
