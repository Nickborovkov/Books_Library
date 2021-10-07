import {gBooksRequests} from "../API/serverRequest";
import {setNewError, toggleIsLoading} from "./commonReducer";

const SET_BOOKS = `gBooks/booksLibrary/SET_BOOKS`
const SET_MORE_BOOKS = `gBooks/booksLibrary/SET_MORE_BOOKS`
const SET_SPECIFIC_BOOK = `gBooks/booksLibrary/SET_SPECIFIC_BOOK`
const SET_IS_LOADING_MORE = `gBooks/booksLibrary/SET_IS_LOADING_MORE`
const SET_TOTAL_BOOKS = `gBooks/booksLibrary/SET_TOTAL_BOOKS`


const initialState = {
    booksList: [],
    totalBooks: null,
    specificBook: null,
    isLoadingMore: false,
}

const booksLibraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                booksList: action.receivedBooks
            }
        case SET_MORE_BOOKS:
            return {
                ...state,
                booksList: [...state.booksList, ...action.receivedBooks]
            }
        case SET_SPECIFIC_BOOK:
            return {
                ...state,
                specificBook: action.specificBook
            }
        case SET_TOTAL_BOOKS:
            return {
                ...state,
                totalBooks: action.totalBooks
            }
        case SET_IS_LOADING_MORE:
            return {
                ...state,
                isLoadingMore: action.isLoadingMore
            }
        default:
            return state
    }
}

export default booksLibraryReducer


//AC
const setBooksList = (receivedBooks) =>
    ({type: SET_BOOKS, receivedBooks})

const setMoreBooks = (receivedBooks) =>
    ({type: SET_MORE_BOOKS, receivedBooks})

const setSpecificBook = (specificBook) =>
    ({type: SET_SPECIFIC_BOOK, specificBook})

const setTotalBooks = (totalBooks) =>
    ({type: SET_TOTAL_BOOKS, totalBooks})

//isLoading indicator for Load more button
const setIsLoadingMore = (isLoadingMore) =>
    ({type: SET_IS_LOADING_MORE, isLoadingMore})


//THUNK
export const getBooksList = (booksSearch, orderBy, startIndex, maxResults, category = ` `) => async dispatch => {
    try {
        dispatch(toggleIsLoading(true))
        const response = await gBooksRequests.getBooksFromAPI(booksSearch, orderBy, startIndex, maxResults, category)
        if (response.data.totalItems > 0) {
            dispatch(setBooksList(response.data.items))
            dispatch(setTotalBooks(response.data.totalItems))
        } else {
            dispatch(setNewError(`No results`))
        }
        dispatch(toggleIsLoading(false))
    } catch (error) {
        dispatch(setNewError(error.name))
    }
}

export const getMoreBooks = (booksSearch, orderBy, startIndex, maxResults, category) => async dispatch => {
    dispatch(setIsLoadingMore(true))
    const response = await gBooksRequests.getBooksFromAPI(booksSearch, orderBy, startIndex, maxResults, category)
    dispatch(setMoreBooks(response.data.items))
    dispatch(setIsLoadingMore(false))
}

export const getSpecificBook = (bookId) => async dispatch => {
    try {
        dispatch(toggleIsLoading(true))
        const response = await gBooksRequests.getSpecificBook(bookId)
        dispatch(setSpecificBook(response.data))
        dispatch(toggleIsLoading(false))
    } catch (error) {
        dispatch(setNewError(error.name))
    }

}
