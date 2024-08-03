import BookOne from "../BookOne/bookOne";

import "./booksList.scss"

export default function BooksList({ books }) {



    return (
        <div className="books-list-container">
            <h1>Results:</h1>
            {
                books.map((book_data, index) => (
                    <BookOne key={index} info={book_data} />
                ))
            }
        </div>
    )
}