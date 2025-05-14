import { get, BASE_URL, checkResponse } from "./common"

async function getOrders() {
  const url = `${BASE_URL}/order`
  const response = await get(url)
  return checkResponse(response) ? response.data.orders : []
}

export { getOrders }
