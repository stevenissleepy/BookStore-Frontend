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

export { getBookById }
