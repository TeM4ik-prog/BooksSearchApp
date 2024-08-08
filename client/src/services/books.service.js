import { instance } from "../api/axios.api"

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyChA_GntfiksRFSq9Xw8Q0ek-_P7NtKQHU'
const MAX_RESULTS = 10;

export const BooksService = {

    async getBooks({ query, page, limit }) {

        const params = new URLSearchParams();
        if (query) params.append('queryParams', JSON.stringify(query));
        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);



        const { data } = await instance.get(`/books?${new URLSearchParams(params).toString()}`)
        return data
    },


    async getFindBooksFromApi(queryInput, startIndex = 0) {

        // &fields=items(volumeInfo(title,authors,publisher,publishedDate,pageCount,categories,imageLinks,infoLink,description))

        // &orderBy=relevance
        const URL = `${BASE_URL}?q='${queryInput}'&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&key=${API_KEY}`;


        return await instance.get(URL)
    }
}