import { instance } from "../api/axios.api"

export const BooksService = {

    async getBooks() {
        const { data } = await instance.get(`/books`)
        return data
    }
}