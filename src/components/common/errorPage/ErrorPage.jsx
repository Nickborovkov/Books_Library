import React from "react";
import {Button, Typography} from "antd";
import LeftCircleOutlined from "@ant-design/icons/lib/icons/LeftCircleOutlined";

const ErrorPage = (props) => {

    const { Title } = Typography;

    return (
        <div>
            <Button
                style={{display: `block`, margin: "50px auto"}}
                type='primary'
                onClick={ () => {props.history.push(`/`)} }
            >
                <LeftCircleOutlined /> Back home
            </Button>

            <Title
                align='center'
                level={2}
            >
                Page not found
            </Title>

        </div>
    )
}

export default ErrorPage
