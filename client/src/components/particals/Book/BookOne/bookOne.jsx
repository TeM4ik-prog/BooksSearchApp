import { Link } from "react-router-dom"
import emptyBookField from "../../../../helper/emptyBookField"
import "./bookOne.scss"

export default function BookOne({ info }) {

    const createAuthorsLinks = (authors) => {
        if (!authors || authors.length === 0) return emptyBookField
        return authors.map((author) => (
            <Link className="" to={`/author/${author.authorId}`}>
                {author.author.name},
            </Link>
        ))
    }


    return (
        <div className="book">
            <h2>{info.title}</h2>

            <div className="book__info-column">
                <img src={info.imageLink} alt={info.title || emptyBookField}></img>


                <div className="book__info-row">
                    <p className="book__info-value">Author: </p>
                    <p className="book__info-value">
                        {createAuthorsLinks(info.authors)}
                    </p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Categories: </p>
                    <p className="book__info-value">
                        {info.categories && info.categories.length > 0
                            ? info.categories.map(category => category.category.name).join(', ')
                            : emptyBookField}
                    </p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Page Count: </p>
                    <p className="book__info-value">{info.pageCount || emptyBookField}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Published Date: </p>
                    <p className="book__info-value">{info.publishedDate || emptyBookField}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Publisher: </p>
                    <p className="book__info-value">{info.publisher || emptyBookField}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Rating: </p>
                    <p className="book__info-value">{info.rating || emptyBookField}</p>
                </div>


                <button onClick={() => window.location = info.infoLink}>Detailed Info</button>




            </div>

        </div >
    )
}