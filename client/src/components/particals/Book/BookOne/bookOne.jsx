import "./bookOne.scss"

export default function BookOne({ info }) {
    console.log(info)

    return (
        <div className="book-container">
            <h2>{info.title}</h2>


            <div className="info-container">


                <div className="info-block-container">
                    <p>Author: </p>
                    <p>{info.categories}</p>
                </div>

                <div className="info-block-container">
                    <p>Categories: </p>
                    <p>{info.author}</p>
                </div>

                <div className="info-block-container">
                    <p>Page Count: </p>
                    <p>{info.page_count}</p>
                </div>

                <div className="info-block-container">
                    <p>ISBN: </p>
                    <p>{info.ISBN}</p>
                </div>

                <div className="info-block-container">
                    <p>Rating: </p>
                    <p>{info.rating}</p>
                </div>










            </div>



        </div>
    )
}