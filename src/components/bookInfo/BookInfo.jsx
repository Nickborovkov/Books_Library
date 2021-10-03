import React, {memo, useEffect} from "react";
import styles from './bookInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getSpecificBook} from "../../store/booksLibraryReducer";
import Preloader from "../../common/preloader/Preloader";
import noImageAvailable from '../../assets/images/noImageAvailable.png'
import {setNewError} from "../../store/commonReducer";
import { FaArrowAltCircleLeft } from 'react-icons/fa'

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

    return (
        <div>
            <button
                className={styles.backButton}
                onClick={ () => {props.history.goBack()} }>
                <FaArrowAltCircleLeft/> Back to list
            </button>

            {/*Error case*/}
            {error && <div>{error}</div>}

            {/*Preloader*/}
            {isLoading && <Preloader/>}

            {/*Results*/}
            {!isLoading && specificBook && !error && <div className={styles.specificBook}>
                {/*Each item does note show if it's empty*/}
                <div className={styles.column}>
                    <img
                        className={styles.image}
                        src={specificBook.volumeInfo.imageLinks ? specificBook.volumeInfo.imageLinks.thumbnail : noImageAvailable}
                        alt=""/>
                </div>
                <div className={styles.column}>
                    {specificBook.volumeInfo.title && <div>
                        <h2 className={styles.name}>{specificBook.volumeInfo.title}</h2>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.authors && <div>
                        <h3 className={styles.span}>Authors:</h3>
                        <ul>
                            {specificBook.volumeInfo.authors.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.publisher && <div>
                        <h4><span className={styles.span}>Publisher:</span> {specificBook.volumeInfo.publisher}</h4>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.publishedDate && <div>
                        <h4><span className={styles.span}>Date:</span> {specificBook.volumeInfo.publishedDate}</h4>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.description && <div>
                        <p><span className={styles.span}>Description</span>: {specificBook.volumeInfo.description}</p>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.pageCount && <div>
                        <p><span className={styles.span}>Pages:</span> {specificBook.volumeInfo.pageCount}</p>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.language && <div>
                        <p><span className={styles.span}>Language:</span> {specificBook.volumeInfo.language}</p>
                        <hr/>
                    </div>}

                    {specificBook.volumeInfo.categories &&
                    <div>
                        <p className={styles.span}>Categorises:</p>
                        <ul>
                            {specificBook.volumeInfo.categories.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>}

                </div>


            </div>}

        </div>
    )
})

export default BookInfo
