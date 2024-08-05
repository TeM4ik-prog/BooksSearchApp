import "./bookOne.scss"

export default function BookOne({ info }) {
    console.log(info)

    return (
        <div className="book">
            <h2>{info.title}</h2>

            <div className="book__info-column">

                <div className="book__info-row">
                    <p className="book__info-value">Author: </p>
                    <p className="book__info-value">{info.author}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Categories: </p>
                    <p className="book__info-value">{info.categories}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Page Count: </p>
                    <p className="book__info-value">{info.pageCount}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">ISBN: </p>
                    <p className="book__info-value">{info.ISBN}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Rating: </p>
                    <p className="book__info-value">{info.rating}</p>
                </div>

            </div>

        </div>
    )
}