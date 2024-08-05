import { instance } from "../api/axios.api"

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyChA_GntfiksRFSq9Xw8Q0ek-_P7NtKQHU'
const MAX_RESULTS = 15;

export const BooksService = {

    async getBooks() {
        const { data } = await instance.get(`/books`)
        return data
    },


    async getFindBooksFromApi(queryInput){
        const URL = `${BASE_URL}?q='${queryInput}'&orderBy=relevance&startIndex=0&maxResults=${MAX_RESULTS}&fields=items(volumeInfo(title,authors,publisher,publishedDate,pageCount,categories,imageLinks,infoLink))&key=${API_KEY}`;


        return await instance.get(URL)
    }
}