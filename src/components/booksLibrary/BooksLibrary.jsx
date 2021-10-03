import React, {useEffect, useState} from "react";
import styles from './booksLibrary.module.css'
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import {getBooksList, getMoreBooks, setBooksList} from "../../store/booksLibraryReducer";
import BookItem from "./bookItem/BookItem";
import BooksSearch from "./booksSearch/BooksSearch";
import {setNewError} from "../../store/commonReducer";

const BooksLibrary = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState(`js`)
    const [order, setOrder] = useState(`relevance`)
    const [startIndex, setStartIndex] = useState(0)

    const error = useSelector(state => state.common.error)
    const isLoading = useSelector(state => state.common.isLoading)
    const booksList = useSelector(state => state.gBooks.booksList)
    const totalBooks = useSelector(state => state.gBooks.totalBooks)



    useEffect(()=>{
        dispatch(setNewError(null))
        if(search === ``){
            dispatch(getBooksList(`js`, order))
        }
        if(search !== ``){
            dispatch(getBooksList(search, order))
        }
    },[dispatch, setSearch, search, order])

    useEffect(()=>{
        dispatch(setNewError(null))
        if(startIndex > 0){
            dispatch(getMoreBooks(search, order, startIndex))
        }
    },[startIndex])


    return (
        <div>
            <BooksSearch search={search}
                         setSearch={setSearch}
                         order={order}
                         setOrder={setOrder}/>

            {error && <div className={styles.error}>{error}</div>}

            {isLoading && <Preloader/>}

            {!isLoading && !error && <div>
                <h3 className={styles.totalBooks}>Total results: {totalBooks}</h3>

                <div className={styles.books}>
                    {booksList.map(item =>
                        <BookItem
                            key={booksList.indexOf(item)}
                            item={item}/>)
                    }
                </div>

                <button disabled={booksList.length === totalBooks} className={styles.loadMore} onClick={ () => {setStartIndex(startIndex + 30)} }>Load more</button>
            </div>}
        </div>
    )
}

export default BooksLibrary
