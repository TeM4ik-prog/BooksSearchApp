import axios from 'axios'

import "./parserPage.scss"
import { useState } from 'react'
import { getLastIndexOfParsedBook, setLastIndexOfParsedBook } from '../../helper/localstorage.helper'

const API_KEY = 'AIzaSyChA_GntfiksRFSq9Xw8Q0ek-_P7NtKQHU'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const MAX_RESULTS = 20


import { toast } from 'react-toastify'

export default function ParserPage() {
    const [lastBookIndex, setLastBookIndex] = useState()

    const [queryInput, setQueryInput] = useState('')
    const [valueBooks, setValueBooks] = useState()

    let postParsedBooks = (booksAr) => {
        toast.loading('Saving books...')
        axios.post(
            `http://localhost:3000/api/books/saveBooksInDb`,
            booksAr)
            .then((response) => {
                toast.dismiss()
                toast.success('Books saved in database successfully')

            })
            .catch((error) => {
                console.log(error)
            });
    }



    let startParseHandle = () => {
        async function fetchBooks(startIndex) {
            const URL = `${BASE_URL}?q='${queryInput}'&orderBy=relevance&startIndex=0&maxResults=${MAX_RESULTS}&fields=items(volumeInfo(title,authors,publisher,publishedDate,pageCount,categories,imageLinks,infoLink))&key=${API_KEY}`;

            try {
                const response = await axios.get(URL);
                console.log(response)

                return response.data.items.map(({ volumeInfo }) => volumeInfo) || [];
            } catch (error) {
                console.error('Error fetching books:', error.message);
                return [];
            }
        }

        async function main() {
            let startIndex = lastBookIndex;
            let allBooks = [];
            toast.loading(`Fetching books...`);


            while (allBooks.length <= valueBooks) {
                const books = await fetchBooks(startIndex);
                if (books.length === 0) break
                allBooks = allBooks.concat(books);
                startIndex += MAX_RESULTS;

            }
            // setLastIndexOfParsedBook(getLastIndexOfParsedBook() + allBooks.length)
            // setLastBookIndex(getLastIndexOfParsedBook())

            toast.dismiss();
            toast.success(`Fetched ${allBooks.length} books`)



            postParsedBooks(allBooks)
        }

        main()
    }


    return (
        <>
            <h1>Parser Page</h1>
            <p>This is the Parser page.</p>


            <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Search for a book"
            ></input>

            <input
                type="number"
                value={valueBooks}
                onChange={(e) => setValueBooks(e.target.value)}
                placeholder="value of books"
            ></input>

            <button onClick={startParseHandle}>Parse</button>
        </>
    )
}