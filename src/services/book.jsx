import { get, post, put, del, checkResponse, BASE_URL } from "./common"

async function getAllBooks() {
  const url = `${BASE_URL}/book/all`
  const response = await get(url)
  return checkResponse(response) ? response.data.books : []
}

async function getBookById(id) {
  const allBooks = await getAllBooks()
  return allBooks.find((book) => book.id === id)
}

async function searchBooks(query, categories) {
  const allBooks = await getAllBooks()
  const queryBooks = allBooks.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
  if (!categories || categories.length === 0) {
    return queryBooks
  }
  return queryBooks.filter((book) => categories.includes(book.category))
}

async function getBookCategories() {
  const allBooks = await getAllBooks()
  const categories = new Set()
  allBooks.forEach((book) => categories.add(book.category))
  return Array.from(categories)
}

async function uploadBook(bookData) {
  const url = `${BASE_URL}/book`
  const response = await post(url, bookData)
  return checkResponse(response)
}

async function updateBook(bookData) {
  const url = `${BASE_URL}/book`
  const response = await put(url, bookData)
  return checkResponse(response)
}

async function deleteBook(id) {
  const url = `${BASE_URL}/book/${id}`
  const response = await del(url)
  return checkResponse(response)
}

export { getBookById, searchBooks, getBookCategories, uploadBook, updateBook, deleteBook }
