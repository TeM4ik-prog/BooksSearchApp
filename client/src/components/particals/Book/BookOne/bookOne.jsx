import emptyBookField from "../../../../helper/emptyBookField"
import "./bookOne.scss"

export default function BookOne({ info }) {

    return (
        <div className="book">
            <h2>{info.title}</h2>

            <div className="book__info-column">
                <img src={info.imageLink} alt={info.title || emptyBookField}></img>


                <div className="book__info-row">
                    <p className="book__info-value">Author: </p>
                    <p className="book__info-value">{info.author || emptyBookField}</p>
                </div>

                <div className="book__info-row">
                    <p className="book__info-value">Categories: </p>
                    <p className="book__info-value">{info.categories || emptyBookField}</p>
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