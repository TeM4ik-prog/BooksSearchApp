import "./bookOne.scss"

export default function BookOne({ info }) {
    console.log(info)

    return (
        <div className="book">
            <h2 className="book__title">{info.title}</h2>

            <div className="book__info-column">

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Author: </p>
                    <p className="book__text">{info.author}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Categories: </p>
                    <p className="book__text">{info.categories}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Page Count: </p>
                    <p className="book__text">{info.pageCount}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">ISBN: </p>
                    <p className="book__text">{info.ISBN}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__text book__text--bold">Rating: </p>
                    <p className="book__text">{info.rating}</p>
                </div>

            </div>

            <button className="book__show-button">
                Show more information
            </button>

        </div>
    )
}