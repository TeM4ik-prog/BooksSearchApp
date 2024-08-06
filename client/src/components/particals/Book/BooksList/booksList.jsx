import BookOne from "../BookOne/bookOne";

import "./booksList.scss"

export default function BooksList({ books }) {

    return (
        <div className="result">
            {
                books.map((bookData, index) => (
                    <BookOne key={index} info={bookData} />
                ))
            }
        </div>
    )
}