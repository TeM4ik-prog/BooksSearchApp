import { useState } from "react";
import BooksList from "../../components/particals/Book/BooksList/booksList";

import "./mainPage.scss"
export default function MainPage() {
    const [booksList, setBooksList] = useState([{
        title: 'Lorem ipsum dolor sit amet consectetur adipi',
        author: 'John Doe',
      
        categories: ['fiction', 'Fantasy'],
        page_count: 1021,

        ISBN: '098796856789',
        rating: 4.5

    }])

    return (
        <>
            <h1>Find any book!</h1>

            <input placeholder="Start typing" />

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