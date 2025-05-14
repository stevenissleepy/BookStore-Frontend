import { get, checkResponse, BASE_URL } from "./common"

async function getAllBooks() {
  const url = `${BASE_URL}/book/all`
  const response = await get(url)
  return checkResponse(response) ? response.data.books : []
}

async function getBookById(id) {
  const allBooks = await getAllBooks()
  return allBooks.find((book) => book.id === id)
}

async function searchBooks(query) {
  const allBooks = await getAllBooks()
  return allBooks.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  )
}

async function getBookCategories() {
  const allBooks = await getAllBooks()
  const categories = new Set()
  allBooks.forEach((book) => categories.add(book.category))
  return Array.from(categories)
}

export { getBookById, searchBooks, getBookCategories }
