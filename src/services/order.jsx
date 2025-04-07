import { users } from "../data"

import { getBookById } from "./book"

async function getOrders() {
  const orders = users[0].orders

  const expand_orders = await Promise.all(
    orders.map(async (order) => {
      const books = await Promise.all(
        order.books.map(async (book) => {
          const bookDetails = await getBookById(book.id)
          return {
            ...bookDetails,
            quantity: book.quantity,
          }
        })
      )
      return {
        ...order,
        books, // 确保 books 是解析后的数组
      }
    })
  )
  return expand_orders
}

export { getOrders }
