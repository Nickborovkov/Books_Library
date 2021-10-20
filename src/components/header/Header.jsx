import React from "react";
import appLogo from '../../assets/images/appLogo.png'
import {Row, Typography} from "antd";
import {Header} from "antd/lib/layout/layout";

const AppHeader = () => {

    const { Title } = Typography;

    return (
        <Header>
            <Row
                type='flex'
                align="middle"
            >
                <div style={{width: `40px`, marginRight: `20px`}}>
                    <img
                        src={appLogo}
                        alt="appLogo"
                        style={{width: `100%`}}
                    />
                </div>
                <Title
                    align='center'
                    level={4}
                    style={{color: `#ffffff`}}
                >
                    Books Library
                </Title>
            </Row>
        </Header>

    )
}

export default AppHeader
