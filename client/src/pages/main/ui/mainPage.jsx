import { useState } from "react";

import "./mainPage.scss"
import Result from "#widgets/result";
function MainPage() {
    const [booksList] = useState([{
        title: "Lorem ipsum dolor sit amet consectetur adipi",
        author: "John Doe",
      
        categories: ["fiction", "Fantasy"],
        pageCount: 1021,

        ISBN: "098796856789",
        rating: 4.5
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipi",
        author: "John Doe",
      
        categories: ["fiction", "Fantasy"],
        pageCount: 1021,

        ISBN: "098796856789",
        rating: 4.5
    }])

    return (
        <main className="page">
            <form className="search-form">
                <div className="search-form__input-container">
                    <input placeholder="Start typing" className="search-form__input-field"/>
                </div>

                <div className="filter">
                    <p className="filter__results-found">3 results</p>

                    <button type="button" className="filter__button">
                        Filters
                        <img src="icons/filter.svg" className="filter__icon"/>
                    </button>
                </div>
            </form>

            <Result />

        </main>
    )
}

export default MainPage