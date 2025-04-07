import { getBookById } from "./book"
import { users } from "../data"

async function getCart() {
  const user = users[0]
  const cartPromises = user.cart.map(async (item) => {
    const book = await getBookById(item.id) // 等待书籍数据解析
    return {
      ...book,
      quantity: item.quantity,
    }
  })

  // 等待所有异步操作完成
  const cart = await Promise.all(cartPromises)
  return cart
}

export { getCart }
