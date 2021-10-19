import React, {memo} from "react";
import noImageAvailable from '../../assets/images/noImageAvailable.png'
import {NavLink} from "react-router-dom";
import {Card, Col} from "antd";

const BookItem = memo(({item}) => {

    const { Meta } = Card

    return (
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                <NavLink to={`/bookInfo/${item.id}`}>
                    <Card
                        hoverable
                        title={item.volumeInfo.title}
                        type="inner"
                        cover={<img
                            alt="volumeImg"
                            src={item.volumeInfo.imageLinks
                                ? item.volumeInfo.imageLinks.thumbnail
                                : noImageAvailable}
                        />}
                    >
                        {item.volumeInfo.authors &&
                        <Meta title="Author:" description={item.volumeInfo.authors}/>}
                    </Card>
                </NavLink>
            </Col>


    )
})

export default BookItem
