import React from "react";
import styles from './bookSearch.module.css'

const BooksSearch = ({search, setSearch, order, setOrder}) => {

    const getNewSearch = (e) => {
        setSearch(e.target.value)
    }
    const setNewOrder = (e) => {
        setOrder(e.target.value)
    }

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.search}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={search}
                    onChange={getNewSearch}
                />
            </div>
            <div className={styles.filters}>
                <label className={styles.label}>Category:
                    <select className={styles.select}>
                        <option value="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>
                </label>
                <label className={styles.label}>Sort by:
                    <select className={styles.select} value={order} onChange={setNewOrder}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </label>
            </div>
        </div>

    )
}

export default BooksSearch
