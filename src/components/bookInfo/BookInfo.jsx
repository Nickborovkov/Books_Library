import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSpecificBook} from "../../store/booksLibraryReducer";
import noImageAvailable from '../../assets/images/noImageAvailable.png'
import {setNewError} from "../../store/commonReducer";
import {Button, Card, Col, Row, Skeleton, Typography} from "antd";
import LeftCircleOutlined from "@ant-design/icons/lib/icons/LeftCircleOutlined";

const BookInfo = memo((props) => {

    //State
    const dispatch = useDispatch()
    const specificBook = useSelector(state => state.gBooks.specificBook)
    const error = useSelector(state => state.common.error)
    const isLoading = useSelector(state => state.common.isLoading)

    //Book id from URL
    const specificBookId = props.match.params.id

    useEffect(()=>{
        dispatch(setNewError(null))
        dispatch(getSpecificBook(specificBookId))
    },[dispatch, specificBookId])

    const { Title } = Typography;

    return (
        <div>
            <Button
                style={{display: `block`, margin: "50px auto"}}
                type='primary'
                onClick={ () => {props.history.goBack()} }
            >
                <LeftCircleOutlined /> Back to list
            </Button>

            {/*Error case*/}
            {error &&
            <Card style={{width: `60%`, margin: `100px auto`}}>
                <Title
                    type='danger'
                    align='center'
                    level={2}
                >
                    No data</Title>
            </Card>}

            {/*Preloader*/}
            {isLoading &&
                <div style={{width: `90%`, margin: `auto`}}>
                    <Row
                        justify='center'
                        gutter={[10,10]}
                    >
                        <Col xs={24}>
                            <Skeleton active />
                        </Col>
                        <Col xs={24} md={12}>
                            <Skeleton active />
                        </Col>
                        <Col xs={24} md={12}>
                            <Skeleton active />
                        </Col>
                    </Row>
                </div>}

            {/*Results*/}
            {!isLoading && specificBook && !error &&
                <div style={{width: `90%`, margin: `auto`}}>
                    <Row  gutter={[10,10]}>

                        <Col xs={24}>
                            <Title
                                align='center'
                                level={2}
                            >
                                {specificBook.title}
                            </Title>
                        </Col>

                        <Col xs={24} md={12}>
                            <Card
                                cover={<img
                                    alt="bookItem"
                                    src={specificBook.imageLinks
                                        ? specificBook.imageLinks.thumbnail
                                        : noImageAvailable}
                                />
                                }>

                            </Card>
                        </Col>

                        <Col xs={24} md={12}>
                            <Card>
                                <Card
                                    type="inner"
                                    title='Authors'
                                >
                                    <ul>
                                        {
                                            specificBook.authors.map(item => {
                                                return (
                                                    <li key={item}>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Card>
                                {
                                    [`publisher`, `publishedDate`, `description`,
                                        `pageCount`, `language`, `categories`].map(item => {
                                        return (
                                            <Card
                                                key={item}
                                                type="inner"
                                                title={
                                                    <span style={{textTransform: `capitalize`}}
                                                    >
                                                    {item}
                                                </span>}
                                            >
                                                {specificBook[item]}
                                            </Card>
                                        )
                                    })
                                }
                            </Card>
                        </Col>
                    </Row>
                </div>}

        </div>
    )
})

export default BookInfo
