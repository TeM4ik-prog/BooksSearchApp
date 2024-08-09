import { instance } from "../api/axios.api"

export const AuthorService = {
    async getAuthor(id) {
        let data = await instance.get(`/authors/${id}`)

        return data.data
    }



}