import { books } from "../data"
import { get, BASE_URL } from "./common"

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

async function searchBooks(query) {
  try {
    const url = `${BASE_URL}/book/all`;
    const { books } = await get(url);
    return books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

function getBookCategories() {
  return new Promise((resolve) => {
    const categories = [...new Set(books.map((book) => book.category))]
    resolve(categories)
  })
}

export { getBookById, searchBooks, getBookCategories }
