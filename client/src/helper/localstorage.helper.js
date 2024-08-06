export function getTokenFromLocalStorage() {
    const data = localStorage.getItem('token');

    const token = data ? JSON.parse(data) : '';


    return token
}


export function setTokenToLocalStorage(key, token) {
    localStorage.setItem('token', JSON.stringify(token))
}


export function removeTokenFromLocalStorage(key) {
    localStorage.removeItem(key)

}


export function getLastIndexOfParsedBook() {
    return parseInt(localStorage.getItem('lastBookIndex')) || 0
}

export function setLastIndexOfParsedBook(index_book) {
    localStorage.setItem('lastBookIndex', index_book);
}

export function clearLastIndexOfParsedBook() {
    localStorage.removeItem('lastBookIndex')
}