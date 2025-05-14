import { get, BASE_URL, checkResponse } from "./common"

async function getCart() {
  const url = `${BASE_URL}/cart`
  const response = await get(url)
  return checkResponse(response) ? response.data.cart : []
}

export { getCart }
