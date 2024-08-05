import { useState } from "react";
import BooksList from "../../components/particals/Book/BooksList/booksList";

import "./mainPage.scss"
import { BooksService } from "../../services/books.service";
export default function MainPage() {
    const [booksList, setBooksList] = useState([])
    const [queryInput, setQueryInput] = useState('')
    const [isFilterOpen, setIsFilterOpen] = useState(true)


    let SearchHandle = async (e) => {
        e.preventDefault()
        try {
            const response = await BooksService.getFindBooksFromApi(queryInput)
            setBooksList(response.data.items.map(({ volumeInfo }) => volumeInfo) || [])
        } catch (error) {
            console.error('Error fetching books:', error.message);
            return [];
        }
    }

    let getAllBooksHandle = async () => {
        try {
            const data = await BooksService.getBooks();
            if (data) {
                toast.success('Books got successfully')
                setBooksList(data);
            }
        } catch (err) {
            toast.error('Error getting products');
        }
    }

    return (
        <main className="page">
            <h1>Find any book!</h1>

            <div className="search-form">

                <form onSubmit={(e) => SearchHandle(e)} className="search-form__query">
                    <input
                        type="text"
                        value={queryInput}
                        onChange={(e) => setQueryInput(e.target.value)}
                        placeholder="Start typing"
                        className="search-form__input-field"
                    />
                    <button>Search</button>
                </form>


                <div className="filter">
                    <p className="filter__results">{booksList.length} results</p>

                    <button className="filter__button" onClick={() => setIsFilterOpen(true)}>
                        Filters
                        <img src="icons/filter.svg" className="filter__icon" />
                    </button>
                </div>


                <BooksList books={booksList} />
            </div>



            {isFilterOpen ? (
                <>
                    <div className="filter-block" onClick={() => setIsFilterOpen(false)}></div>

                    <dialog className="filter-field">

                        <div className="filter-field__header" >
                            <p></p>
                            <p className="filter-field__header__title">Выберете фильтры</p>
                            <img onClick={() => setIsFilterOpen(false)}
                                className="close-image" src="../icons/exit.svg">
                            </img>
                        </div>

                        <from className='filter-field__form-params'>
                            <input placeholder="Author"></input>

                            <input placeholder="Categories"></input>

                            <div className="filter-field__form-params__row">
                                <input placeholder="Min page count"></input>
                                <input placeholder="Max page count"></input>
                            </div>





                        </from>



                    </dialog>


                </>
            ) : null}
        </main>
    )
}