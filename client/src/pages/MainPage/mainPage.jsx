import { useEffect, useState } from "react";
import BooksList from "../../components/particals/Book/BooksList/booksList";

import "./mainPage.scss"
import { BooksService } from "../../services/books.service";
import { toast } from "react-toastify";
export default function MainPage() {
    const [booksList, setBooksList] = useState([])
    // const [queryInput, setQueryInput] = useState('')
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [searchParams, setSearchParams] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(15)


    useEffect(() => {
        getBooksHandle();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    const getBooksHandle = async (e) => {
        if (e) e.preventDefault()

        console.log(searchParams)
        try {
            const data = await BooksService.getBooks({
                query: searchParams,
                page: currentPage,
                limit: itemsPerPage,

            });
            console.log(data)
            if (data) {
                toast.success('Books got successfully')
                setBooksList(data)
                setIsFilterOpen(false)
            }
        } catch (err) {
            toast.error('Error getting products');
        }
    }

    const handleChangeParams = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <main className="page">
            <h1>Find any book!</h1>

            <div className="search-form">

                <form onSubmit={(e) => getBooksHandle(e)} className="search-form__query">
                    <input
                        type="text"
                        value={searchParams.title}
                        name='title'
                        onChange={handleChangeParams}
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

            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Prev
                </button>
                <p className="pagination__pageIndex">{currentPage}</p>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
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

                        <form onSubmit={(e) => getBooksHandle(e)} className='filter-field__form-params' >
                            <input placeholder="Author" value={searchParams.author} name='author' onChange={handleChangeParams}></input>
                            <input placeholder="Categories" value={searchParams.category} name='category' onChange={handleChangeParams}></input>
                            <div className="filter-field__form-params__row">
                                <input type="number" placeholder="Min page count" value={searchParams.minPages} name='minPages' onChange={handleChangeParams}></input>
                                <input type="number" placeholder="Max page count" value={searchParams.maxPages} name='maxPages' onChange={handleChangeParams}></input>
                            </div>
                            <input placeholder="Publisher" value={searchParams.publisher} name='publisher' onChange={handleChangeParams}></input>



                            <button>Search</button>
                        </form>



                    </dialog>


                </>
            ) : null}
        </main>
    )
}