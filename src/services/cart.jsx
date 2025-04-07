import { getBookById } from "./book"
import { users } from "../data"

function getCart() {
  return new Promise((resolve) => {
    const user = users[0]
    const cartPromises = user.cart.map((bookId) => {
      return getBookById(bookId) // 返回每个书籍的 Promise
    })

    // 等待所有书籍的 Promise 完成
    Promise.all(cartPromises).then((cart) => {
      resolve(cart) // 返回解析后的书籍数组
    })
  })
}

export { getCart }
