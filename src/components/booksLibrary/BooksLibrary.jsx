import React, {memo, useEffect, useState} from "react";
import styles from './booksLibrary.module.css'
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import {getBooksList, getMoreBooks} from "../../store/booksLibraryReducer";
import BookItem from "./bookItem/BookItem";
import BooksSearch from "./booksSearch/BooksSearch";
import {setNewError} from "../../store/commonReducer";

const BooksLibrary = memo(() => {
    //State
    const [search, setSearch] = useState(``)
    const [order, setOrder] = useState(`relevance`)
    const [startIndex, setStartIndex] = useState(0)
    const [category, setCategory] = useState(` `)

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
            window.scrollTo(0, 1200)
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
            {error && <div className={styles.error}>No results, change query or category</div>}

            {/*Preloader*/}
            {isLoading && <Preloader/>}

            {/*Results*/}
            {!isLoading && !error && <div>
                <h3 className={styles.totalBooks}>Total results: {totalBooks}</h3>

                <div className={styles.books}>
                    {booksList.map(item =>
                        <BookItem
                            key={booksList.indexOf(item)}
                            item={item}/>)
                    }
                </div>

                {/*Load more button disabled while loading and when there's no more items to load*/}
                <button
                    disabled={totalBooks - booksList.length <= 0 || isLoadingMore}
                    className={styles.loadMore}
                    onClick={loadMoreBooks}
                >{isLoadingMore ? `Loading...` : `Load more`}</button>
            </div>}
        </div>
    )
})

export default BooksLibrary
