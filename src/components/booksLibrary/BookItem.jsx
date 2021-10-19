import React, {memo} from "react";
import noImageAvailable from '../../assets/images/noImageAvailable.png'
import {NavLink} from "react-router-dom";

const BookItem = memo(({item}) => {
    return (
            <div>
                {/*Each item does note show if it's empty*/}
                <NavLink to={`/bookInfo/${item.id}`}>
                    <p>{item.volumeInfo.categories}</p>
                    <img
                        src={item.volumeInfo.imageLinks
                            ? item.volumeInfo.imageLinks.thumbnail
                            : noImageAvailable}
                        alt="volumeImg"/>

                    {item.volumeInfo.title &&
                    <h3>{item.volumeInfo.title}</h3>}

                    {item.volumeInfo.authors &&
                    <p>{item.volumeInfo.authors[0]}</p>}
                </NavLink>
            </div>


    )
})

export default BookItem
