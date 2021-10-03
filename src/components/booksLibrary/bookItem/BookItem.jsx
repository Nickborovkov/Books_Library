import React, {memo} from "react";
import styles from '../booksLibrary.module.css'
import noImageAvailable from '../../../assets/images/noImageAvailable.png'
import {NavLink} from "react-router-dom";

const BookItem = memo(({item}) => {
    return (
            <div className={styles.book}>
                {/*Each item does note show if it's empty*/}
                <NavLink className={styles.link} to={`/bookInfo/${item.id}`}>
                    <p className={styles.subtitle}>{item.volumeInfo.categories}</p>
                    <img
                        src={item.volumeInfo.imageLinks
                            ? item.volumeInfo.imageLinks.thumbnail
                            : noImageAvailable}
                        alt="volumeImg"
                        style={{width: `200px`, display: `block`, margin: `0 auto`}}/>

                    {item.volumeInfo.title &&
                    <h3 className={styles.title}>{item.volumeInfo.title}</h3>}

                    {item.volumeInfo.authors &&
                    <p className={styles.subtitle}>{item.volumeInfo.authors[0]}</p>}
                </NavLink>
            </div>


    )
})

export default BookItem
