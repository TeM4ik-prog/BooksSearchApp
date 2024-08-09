import axios from 'axios'

import "./parserPage.scss"
import { useEffect, useState } from 'react'
import { clearLastIndexOfParsedBook, getLastIndexOfParsedBook, setLastIndexOfParsedBook } from '../../helper/localstorage.helper'

const API_KEY = 'AIzaSyChA_GntfiksRFSq9Xw8Q0ek-_P7NtKQHU'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const MAX_RESULTS = 20


import { toast } from 'react-toastify'
import { BooksService } from '../../services/books.service'

export default function ParserPage() {
    const [lastBookIndex, setLastBookIndex] = useState(getLastIndexOfParsedBook())

    const [queryInput, setQueryInput] = useState('')
    const [valueBooks, setValueBooks] = useState(1)

    const postParsedBooks = (booksAr) => {
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
    const startParseHandle = () => {

        async function fetchBooks(startIndex) {
            try {
                const response = await BooksService.getFindBooksFromApi(queryInput, startIndex)
                console.log(response)

                let booksInfoAr = response.data.items

                let newBooksAr = []

                for (let i = 0; i < booksInfoAr.length; i++) {
                    let { accessInfo, volumeInfo } = booksInfoAr[i]

                    // console.log(accessInfo, volumeInfo)

                    let book = {
                        title: volumeInfo?.title || null,

                        authors: volumeInfo?.authors || [],

                        publisher: volumeInfo?.publisher || null,

                        description: volumeInfo?.description || null,

                        industryIdentifiers: JSON.stringify(volumeInfo?.industryIdentifiers) || [],

                        pageCount: volumeInfo?.pageCount || null,

                        category: volumeInfo?.categories?.[0] || null,

                        averageRating: volumeInfo?.volumeInfo || null,

                        imageLink: volumeInfo?.imageLinks?.smallThumbnail || null,

                        language: volumeInfo?.language || null,

                        publishedDate: volumeInfo?.publishedDate || null,

                        infoLink: volumeInfo?.infoLink || null,

                        previewLink: accessInfo.viewability === "NO_PAGES" ? null : volumeInfo?.previewLink || null,

                        // previewability: accessInfo.viewability === "NO_PAGES" ? null : volumeInfo?.previewLink || null,
                    }


                    console.log(book)

                    newBooksAr.push(book)
                }

                console.log(newBooksAr)
                return newBooksAr || []
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
            setLastIndexOfParsedBook(getLastIndexOfParsedBook() + allBooks.length)
            setLastBookIndex(getLastIndexOfParsedBook())

            toast.dismiss();
            toast.success(`Fetched ${allBooks.length} books`)

            // postParsedBooks(allBooks)
        }

        main()
    }


    return (
        <main className="page">
            <h1>Parser Page</h1>
            <p>This is the Parser page.</p>

            <button onClick={() => {
                clearLastIndexOfParsedBook()
                setLastBookIndex(0)
            }}>Clear localstorage</button>


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

            <button onClick={startParseHandle}>Parse {lastBookIndex}</button>
        </main>
    )
}