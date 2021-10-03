import React from "react";
import styles from '../booksLibrary.module.css'
import noImageAvailable from '../../../assets/images/noImageAvailable.png'
import {NavLink} from "react-router-dom";

const BookItem = ({item}) => {
    return (
            <div className={styles.book}>
                <NavLink className={styles.link} to={`/bookInfo/${item.id}`}>
                    <p>{item.volumeInfo.categories}</p>
                    <img
                        src={item.volumeInfo.imageLinks
                            ? item.volumeInfo.imageLinks.thumbnail
                            : noImageAvailable}
                        alt="volumeImg"
                        style={{width: `200px`, display: `block`, margin: `0 auto`}}/>
                    <p>{item.volumeInfo.title}</p>
                    <p>{item.volumeInfo.authors}</p>
                </NavLink>
            </div>


    )
}

export default BookItem
