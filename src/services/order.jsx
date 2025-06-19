import { addDays } from "../utils/date"
import { get, post, BASE_URL, checkResponse } from "./common"

async function getOrders() {
  const url = `${BASE_URL}/order`
  const response = await get(url)
  return checkResponse(response) ? response.data.orders : []
}

async function searchUserOrders(dateRange, bookTitle) {
  const orders = await getOrders()

  const filteredOrders = orders.filter((order) => {
    const matchesDateRange = dateRange
      ? new Date(dateRange[0]) <= new Date(order.date) && new Date(order.date) <= addDays(dateRange[1], 1)
      : true
    const matchesBookTitle = bookTitle
      ? order.orderItems.some((item) => item.book.title.toLowerCase().includes(bookTitle.toLowerCase()))
      : true

    return matchesDateRange && matchesBookTitle
  })

  return filteredOrders
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

export { getOrders, checkout, searchUserOrders, searchAllOrders }
