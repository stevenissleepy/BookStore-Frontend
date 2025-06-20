import { post, BASE_URL, checkResponse } from "./common"

async function searchUserOrders(dateRange, bookTitle) {
  const url = `${BASE_URL}/order/search`
  const data = {
    startDate: dateRange ? dateRange[0].format("YYYY-MM-DD") : null,
    endDate: dateRange ? dateRange[1].format("YYYY-MM-DD") : null,
    bookTitle: bookTitle || null,
  }

  const response = await post(url, data)
  return checkResponse(response) ? response.data.orders : []
}

async function searchAllOrders(dateRange, bookTitle) {
  const url = `${BASE_URL}/order/search/all`
  const data = {
    startDate: dateRange ? dateRange[0].format("YYYY-MM-DD") : null,
    endDate: dateRange ? dateRange[1].format("YYYY-MM-DD") : null,
    bookTitle: bookTitle || null,
  }

  const response = await post(url, data)
  return checkResponse(response) ? response.data.orders : []
}

async function checkout(receiver, tel, address, bookIds) {
  const url = `${BASE_URL}/order`
  const response = await post(url, { receiver, tel, address, bookIds })
  return checkResponse(response)
}

export { checkout, searchUserOrders, searchAllOrders }
