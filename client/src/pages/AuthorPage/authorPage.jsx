import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthorService } from "../../services/author.service"
import { toast } from "react-toastify"
import BooksList from "../../components/particals/Book/BooksList/booksList"

export default function AuthorPage() {
    const [authorData, setAuthorData] = useState('')
    let { authorID } = useParams()


    const getAuthor = async () => {
        try {
            const data = await AuthorService.getAuthor(authorID)
            console.log(data)
            if (data) {
                toast.success('Author got successfully')
                setAuthorData(data)
            }
        } catch (err) {
            toast.error('Error getting author data');
        }

    }


    useEffect(() => {
        getAuthor()
    }, [authorID])


    return (
        <main className="page">
            <h1 style={{margin: '0 auto'}}>{authorData?.author?.name}</h1>


            <BooksList books={authorData.books} />

        </main>
    )
}