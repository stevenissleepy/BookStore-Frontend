import { books } from "../data"
import { get, checkResponse,BASE_URL } from "./common"

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

function getBookCategories() {
  return new Promise((resolve) => {
    const categories = [...new Set(books.map((book) => book.category))]
    resolve(categories)
  })
}

export { getBookById, searchBooks, getBookCategories }
