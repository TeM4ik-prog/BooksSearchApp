const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const API_KEY = 'AIzaSyChA_GntfiksRFSq9Xw8Q0ek-_P7NtKQHU'; // Замените на ваш ключ API
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const SEARCH_TERM = ''; // Пустой запрос для получения книг по всем темам
const MAX_RESULTS = 40; // Максимальное количество результатов за один запрос
const TOTAL_BOOKS = 1000;

async function fetchBooks(startIndex) {
    const URL = `${BASE_URL}?q=''&orderBy=relevance&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&fields=items(volumeInfo(title,authors,publisher,publishedDate,pageCount,categories,imageLinks,infoLink))&key=${API_KEY}`;
    
    try {
        const response = await axios.get(URL);
        console.log('Response data:', response); // Логируем ответ
        return response.data.items || [];
    } catch (error) {
        console.error('Error fetching books:', error.message);
        console.error('Error details:', error.response ? error.response.data : error.message);
        return [];
    }
}

async function saveBooksToDatabase(books) {
    for (const book of books) {
        const volumeInfo = book.volumeInfo;

        await prisma.book.upsert({
            where: { title: volumeInfo.title }, // Используем название книги в качестве уникального ключа
            update: {
                authors: JSON.stringify(volumeInfo.authors || []),
                publisher: volumeInfo.publisher || null,
                publishedDate: volumeInfo.publishedDate ? new Date(volumeInfo.publishedDate) : null,
                pageCount: volumeInfo.pageCount || null,
                categories: JSON.stringify(volumeInfo.categories || []),
                imageLinks: volumeInfo.imageLinks || null,
                infoLink: volumeInfo.infoLink
            },
            create: {
                title: volumeInfo.title,
                authors: JSON.stringify(volumeInfo.authors || []),
                publisher: volumeInfo.publisher || null,
                publishedDate: volumeInfo.publishedDate ? new Date(volumeInfo.publishedDate) : null,
                pageCount: volumeInfo.pageCount || null,
                categories: JSON.stringify(volumeInfo.categories || []),
                imageLinks: volumeInfo.imageLinks || null,
                infoLink: volumeInfo.infoLink
            }
        });
    }
    console.log('Books have been saved to the database.');
}

async function main() {
    let startIndex = 0;
    let allBooks = [];

    while (allBooks.length < TOTAL_BOOKS) {
        const books = await fetchBooks(startIndex);
        if (books.length === 0) break; // Прекращаем, если больше нет данных
        allBooks = allBooks.concat(books);
        startIndex += MAX_RESULTS;
        
        console.log(`Fetched ${allBooks.length} books so far...`);
    }

    await saveBooksToDatabase(allBooks);
    await prisma.$disconnect();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
