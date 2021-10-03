import React, {useEffect} from "react";
import styles from './bookInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getSpecificBook} from "../../store/booksLibraryReducer";
import Preloader from "../../common/preloader/Preloader";
import noImageAvailable from '../../assets/images/noImageAvailable.png'
import {setNewError} from "../../store/commonReducer";

const BookInfo = (props) => {

    const dispatch = useDispatch()
    const specificBook = useSelector(state => state.gBooks.specificBook)
    const error = useSelector(state => state.common.error)
    const isLoading = useSelector(state => state.common.isLoading)

    const specificBookId = props.match.params.id

    console.log(props.match.params.id)

    useEffect(()=>{
        dispatch(setNewError(null))
        dispatch(getSpecificBook(specificBookId))
    },[dispatch, specificBookId])

    return (
        <div>
            <button onClick={ () => {props.history.goBack()} }>Back to list</button>

            {error && <div>{error}</div>}

            {isLoading && <Preloader/>}

            {!isLoading && specificBook && !error && <div className={styles.specificBook}>
                <div className={styles.column}>
                    <img className={styles.image} src={specificBook.volumeInfo.imageLinks ? specificBook.volumeInfo.imageLinks.thumbnail : noImageAvailable} alt=""/>
                </div>
                <div className={styles.column}>
                    <h2>{specificBook.volumeInfo.title}</h2>
                    <h2>{specificBook.volumeInfo.authors}</h2>
                    <h2>{specificBook.volumeInfo.publisher}</h2>
                    <h2>{specificBook.volumeInfo.publishedDate}</h2>
                    <h2>{specificBook.volumeInfo.description}</h2>
                    <h2>{specificBook.volumeInfo.pageCount}</h2>
                    <h2>{specificBook.volumeInfo.categories}</h2>
                    <h2>{specificBook.volumeInfo.language}</h2>
                </div>


            </div>}

        </div>
    )
}

export default BookInfo
