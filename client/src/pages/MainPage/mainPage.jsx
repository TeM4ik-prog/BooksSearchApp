import { useState } from "react";
import BooksList from "../../components/particals/Book/BooksList/booksList";

import "./mainPage.scss"
export default function MainPage() {
    const [booksList, setBooksList] = useState([{
        title: 'Lorem ipsum dolor sit amet consectetur adipi',
        author: 'John Doe',
      
        categories: ['fiction', 'Fantasy'],
        pageCount: 1021,

        ISBN: '098796856789',
        rating: 4.5
    }])

    return (
        <main className="page">
            <h1>Find any book!</h1>

            <form className="search-form">
             <input placeholder="Start typing" className="search-form__input-field"/>

                <div className="filter">
                    <p className="filter__results">3 results</p>

                    <button className="filter__button">
                        Filters
                        <img src="icons/filter.svg" className="filter__icon"/>
                    </button>
                </div>
            </form>

            <BooksList books={booksList} />

        </main>
    )
}