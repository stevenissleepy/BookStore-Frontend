import { get, post, BASE_URL, checkResponse } from "./common"

async function getCart() {
  const url = `${BASE_URL}/cart`
  const response = await get(url)
  return checkResponse(response) ? response.data.cart : []
}

async function addToCart(bookId, quantity) {
  const url = `${BASE_URL}/cart/add`
  const response = await post(url, { bookId, quantity })
  return { ok: checkResponse(response), message: response.message }
}

async function updateCartItem(bookId, quantity) {
  const url = `${BASE_URL}/cart/update`
  const response = await post(url, { bookId, quantity })
  return checkResponse(response)
}

export { getCart, addToCart, updateCartItem }
