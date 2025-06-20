import { post, BASE_URL, checkResponse } from "./common"

async function statsBooks(dateRange) {
  const url = `${BASE_URL}/stats/books`
  const data = {
    startDate: dateRange ? dateRange[0].format("YYYY-MM-DD") : null,
    endDate: dateRange ? dateRange[1].format("YYYY-MM-DD") : null,
  }
  const response = await post(url, data)

  if (checkResponse(response)) {
    return response.data.salesItems.map((item) => ({
      book: item.object,
      quantity: item.quantity,
    }))
  }
}

async function searchTop10Books(dateRange) {
  const url = `${BASE_URL}/stats/top-10-books`
  const data = {
    startDate: dateRange ? dateRange[0].format("YYYY-MM-DD") : null,
    endDate: dateRange ? dateRange[1].format("YYYY-MM-DD") : null,
  }
  const response = await post(url, data)

  if (checkResponse(response)) {
    return response.data.salesItems.map((item) => ({
      title: item.object,
      sales: item.quantity,
    }))
  } else {
    return []
  }
}

async function searchTop10Users(dateRange) {
  const url = `${BASE_URL}/stats/top-10-users`
  const data = {
    startDate: dateRange ? dateRange[0].format("YYYY-MM-DD") : null,
    endDate: dateRange ? dateRange[1].format("YYYY-MM-DD") : null,
  }
  const response = await post(url, data)

  if (checkResponse(response)) {
    return response.data.salesItems.map((item) => ({
      username: item.object,
      spent: item.quantity,
    }))
  } else {
    return []
  }
}

export { statsBooks, searchTop10Books, searchTop10Users }
