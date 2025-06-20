import { get, post, put, del, checkResponse, BASE_URL } from "./common"

async function getBookById(id) {
  const url = `${BASE_URL}/book/${id}`
  const response = await get(url)
  return checkResponse(response) ? response.data : null
}

async function searchBooks(query, categories, page = 0, limit = 100) {
  const url = `${BASE_URL}/book/search`
  const response = await post(url, { query, categories, page, limit })
  return checkResponse(response) ? response.data : { quantity: 0, books: [] }
}

async function getCategories() {
  const url = `${BASE_URL}/book/categories`
  const response = await get(url)
  return checkResponse(response) ? response.data.categories : []
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

export { getBookById, searchBooks, getCategories, uploadBook, updateBook, deleteBook }
