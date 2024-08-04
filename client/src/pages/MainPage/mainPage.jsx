import { useState } from "react";
import BooksList from "../../components/particals/Book/BooksList/booksList";
import { Link } from 'react-router-dom'
import "./mainPage.scss"
import axios from "axios";
import { BooksService } from "../../services/books.service";
import { toast } from "react-toastify";


const API_KEY = 'AIzaSyChA_GntfiksRFSq9Xw8Q0ek-_P7NtKQHU'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const MAX_RESULTS = 5;




export default function MainPage() {
    const [booksList, setBooksList] = useState([])
    const [queryInput, setQueryInput] = useState('')

    let SearchHandle = async () => {
        console.log(queryInput)
        const URL = `${BASE_URL}?q='${queryInput}'&orderBy=relevance&startIndex=0&maxResults=${MAX_RESULTS}&fields=items(volumeInfo(title,authors,publisher,publishedDate,pageCount,categories,imageLinks,infoLink))&key=${API_KEY}`;

        try {
            const response = await axios.get(URL);
            console.log(response)

            setBooksList(response.data.items.map(({ volumeInfo }) => volumeInfo) || [])
        } catch (error) {
            console.error('Error fetching books:', error.message);
            return [];
        }
    }

    let getAllBooksHandle = async () => {
        try {
            const data = await BooksService.getBooks();
            if (data) {
                toast.success('Books got successfully');
                setBooksList(data);
            }
        } catch (err) {
            toast.error('Error getting products');
        }
    }




    return (
        <>
            <h1>Find any book!</h1>

            <Link to={'/parser'}>
                <h1>parser page</h1>
            </Link>

            <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Search for a book"
            ></input>

            <button onClick={SearchHandle}>Search</button>
            <button onClick={getAllBooksHandle}>Get Books from bd</button>

            <div className="filters-container">
                <p>3 results</p>

                <button>
                    <p>Filters</p>
                    <img src="icons/filter.svg" />
                </button>
            </div>




            <BooksList books={booksList} />




        </>
    )
}