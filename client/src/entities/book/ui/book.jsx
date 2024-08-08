import "./book.scss"

function Book({ book }) {

    return (
        <div className="book">
            <h2 className="book__title">{book.title}</h2>

            <div className="book__info-column">

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Author: </p>
                    <p className="book__text">{book.author}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Categories: </p>
                    <p className="book__text">{book.categories}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Page Count: </p>
                    <p className="book__text">{book.pageCount}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">ISBN: </p>
                    <p className="book__text">{book.ISBN}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Rating: </p>
                    <p className="book__text">{book.rating}</p>
                </div>

            </div>

            <button className="book__show-button">
                Show more information
            </button>

        </div>
    )
}

export default Book