import { books } from "../data"

function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = books.find((book) => book.id === id)
    if (book) {
      resolve(book)
    } else {
      reject(new Error("Book not found"))
    }
  })
}

function getAllBooks() {
  return new Promise((resolve) => {
    resolve(books)
  })
}

function searchBooks(query) {
  return new Promise((resolve) => {
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    resolve(filteredBooks)
  })
}

function getBookCategories() {
  return new Promise((resolve) => {
    const categories = [...new Set(books.map((book) => book.category))]
    resolve(categories)
  })
}

function getBooksByCategory(category) {
  return new Promise((resolve) => {
    const filteredBooks = books.filter((book) => book.category === category)
    resolve(filteredBooks)
  })
}

export { getBookById, getAllBooks, searchBooks, getBookCategories, getBooksByCategory }
