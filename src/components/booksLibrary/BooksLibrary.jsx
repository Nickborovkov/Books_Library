import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBooksList, getMoreBooks} from "../../store/booksLibraryReducer";
import BookItem from "./BookItem";
import BooksSearch from "../common/booksSearch/BooksSearch";
import {setNewError} from "../../store/commonReducer";
import {Content} from "antd/lib/layout/layout";
import {Button, Card, Col, Row, Skeleton, Typography} from "antd";

const BooksLibrary = memo(() => {
    //State
    const [search, setSearch] = useState(`javascript`)
    const [order, setOrder] = useState(`relevance`)
    const [startIndex, setStartIndex] = useState(0)
    const [category, setCategory] = useState(`computers`)

    const dispatch = useDispatch()
    const error = useSelector(state => state.common.error)
    const isLoading = useSelector(state => state.common.isLoading)
    const booksList = useSelector(state => state.gBooks.booksList)
    const totalBooks = useSelector(state => state.gBooks.totalBooks)
    const isLoadingMore = useSelector(state => state.gBooks.isLoadingMore)

    //Loading books with new search query
    useEffect(()=>{
        dispatch(setNewError(null))
        dispatch(getBooksList(search, order, 0, 30, category))
        if(search !== ``){
            window.scrollTo(0, 300)
        }
    },[dispatch, setSearch, search, order, category])

    //Loading more books to ones that already exist in store
    useEffect(()=>{
        dispatch(setNewError(null))
        if(startIndex > 0){
            dispatch(getMoreBooks(search, order, startIndex, 30, category))
        }
    },[dispatch, search, order, startIndex, category])

    //Function that calculates how many items to add with getMoreBooks
    const loadMoreBooks = () => {
        if(totalBooks - booksList.length >= 30){
            setStartIndex(startIndex + 30)
        }else if(totalBooks - booksList.length < 30){
            setStartIndex(totalBooks - booksList.length)
        }
    }

    const { Title } = Typography;

    return (
        <div>
            {/*Search field*/}
            <BooksSearch search={search}
                         setSearch={setSearch}
                         order={order}
                         setOrder={setOrder}
                         category={category}
                         setCategory={setCategory}/>

            {/*Error case*/}
            {error &&
                <Card style={{width: `60%`, margin: `100px auto`}}>
                    <Title
                        type='danger'
                        align='center'
                        level={2}
                    >
                        No results, change query or category</Title>
                </Card>
            }

            {/*Preloader skeleton*/}
            {isLoading &&
                <div style={{width: `90%`, margin: `50px auto`}}>
                    <Row
                        justify='center'
                        gutter={[20,20]}
                    >
                        {
                            [1,2,3,4,5,6].map(item => <Col key={item} xs={24} sm={12} md={8} lg={6} xl={4}>
                                <Skeleton active />
                            </Col>)
                        }

                    </Row>
                </div>}

            {/*Results*/}
            {!isLoading && !error &&
            <div>
                <Title
                    align='center'
                    level={3}
                >
                    Total results: {totalBooks}
                </Title>

                <Content style={{width: `90%`, margin: `50px auto`}}>
                    <Row
                        justify="center"
                        gutter={[20,20]}
                    >
                        {booksList.map(item =>
                            <BookItem
                                key={booksList.indexOf(item)}
                                item={item}
                            />)
                        }
                    </Row>
                </Content>


                {/*Load more button disabled while loading and when there's no more items to load*/}
                <Button
                    type='primary'
                    loading={isLoadingMore}
                    style={{display: `block`, margin: `50px auto`}}
                    disabled={totalBooks - booksList.length <= 0 || isLoadingMore}
                    onClick={loadMoreBooks}
                >
                    Load more
                </Button>
            </div>}
        </div>
    )
})

export default BooksLibrary
