import BookOne from "../BookOne/bookOne";

import "./booksList.scss"

export default function BooksList({ books }) {



    return (
        <div className="result">
            <h1 className="result__heading">Results:</h1>

            {Array.isArray(books) ? (
                <>
                    {books.map((bookData, index) => (
                        <BookOne key={index} info={bookData} />
                    ))}
                </>
            ) : null}

        </div>
    )
}