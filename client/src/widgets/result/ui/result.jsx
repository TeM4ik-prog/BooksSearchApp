import React from "react"
import { useSelector } from "react-redux";

import "./result.scss"
import Book from "#entities/book";
function Result() {

    const bookList = useSelector(state => state.book.books)

    return (
        <section aria-labelledby="result-title" className="result">
            <h2 className="result__title" id="result-title">Results:</h2>
            {
                bookList.length ? 
                bookList.map(e => (
                    <Book book={e}/>
                )) : 
                ""
            }
        </section>
    )
}

export default Result