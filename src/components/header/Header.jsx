import React from "react";
import appLogo from '../../assets/images/appLogo.png'
import {Row} from "antd";
import {Header} from "antd/lib/layout/layout";

const AppHeader = () => {
    return (
        <Header>
            <Row
                type='flex'
            >
                <div style={{width: `40px`, marginRight: `20px`}}>
                    <img
                        src={appLogo}
                        alt="appLogo"
                        style={{width: `100%`}}
                    />
                </div>
                <h2 style={{color: `#ffffff`}}>Google Books API app</h2>
            </Row>
        </Header>

    )
}

export default AppHeader
