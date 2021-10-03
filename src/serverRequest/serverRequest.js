import axios from "axios";

const apiKey = `AIzaSyDpxknaj1FDAooigT6sIkJ-0Jl9ldjkOO0`

const instanсe = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/`
})

export const gBooksRequests = {
    getBooksFromAPI (booksSearch, orderBy, startIndex, maxResults, category) {
        return instanсe.get(`volumes?q=${booksSearch}+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`)
    },
    getSpecificBook (booksId) {
        return instanсe.get(`volumes/${booksId}?key=${apiKey}`)
    }
}
