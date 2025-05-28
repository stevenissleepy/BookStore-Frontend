import { get, post, BASE_URL, checkResponse } from "./common"

async function getOrders() {
  const url = `${BASE_URL}/order`
  const response = await get(url)
  return checkResponse(response) ? response.data.orders : []
}

async function checkout(receiver, tel, address, bookIds) {
  const url = `${BASE_URL}/order`
  const response = await post(url, { receiver, tel, address, bookIds })
  return checkResponse(response)
}

export { getOrders, checkout }
