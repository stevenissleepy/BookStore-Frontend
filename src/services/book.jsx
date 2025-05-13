import { books } from "../data"
import { get, BASE_URL } from "./common"

async function getAllBooks() {
  try {
    const url = `${BASE_URL}/book/all`
    const { books } = await get(url)
    return books
  } catch (error) {
    console.error("Error fetching books:", error)
    return []
  }
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
