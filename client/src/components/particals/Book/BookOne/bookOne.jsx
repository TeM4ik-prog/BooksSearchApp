import "./bookOne.scss"

export default function BookOne({ info }) {
    console.log(info)

    return (
        <div className="book-container">
            <h2>{info.title}</h2>


            <div className="info-container">
                <img src={info.imageLinks?.smallThumbnail} alt={info.title}></img>


                <div className="info-block-container">
                    <p>Author: </p>
                    <p>{info.authors}</p>
                </div>

                <div className="info-block-container">
                    <p>Categories: </p>
                    <p>{info.categories}</p>
                </div>

                <div className="info-block-container">
                    <p>Page Count: </p>
                    <p>{info.pageCount}</p>
                </div>

                <div className="info-block-container">
                    <p>Published Date: </p>
                    <p>{info.publishedDate}</p>
                </div>


                <a href={info.infoLink}>
                    <button>Подробная информация</button>
                </a>


                {/* <div className="info-block-container">
                    <p>ISBN: </p>
                    <p>{info.ISBN}</p>
                </div>

                <div className="info-block-container">
                    <p>Rating: </p>
                    <p>{info.rating}</p>
                </div> */}










            </div>



        </div>
    )
}