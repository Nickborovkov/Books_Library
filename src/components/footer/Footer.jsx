import React from "react";
import {Row, Typography} from "antd";
import {Footer} from "antd/lib/layout/layout";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import LinkOutlined from "@ant-design/icons/lib/icons/LinkOutlined";

const AppFooter = () => {

    const { Link } = Typography;

    return (
        <Footer>
            <Row type='flex' justify='space-between'>
                <Link
                    href="https://developers.google.com/books/docs/v1/using"
                    target='_blank'
                    rel="noreferrer"><LinkOutlined /> API</Link>
                <Link
                    href='https://github.com/Nickborovkov'
                    target='_blank'
                    rel="noreferrer"><GithubOutlined /> Made by Nick Borovkov</Link>
            </Row>
        </Footer>
    )
}

export default AppFooter
