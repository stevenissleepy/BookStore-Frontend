import { get, post, del, BASE_URL, checkResponse } from "./common"

async function getAddresses() {
  const url = `${BASE_URL}/address`
  const response = await get(url)
  return checkResponse(response) ? response.data.addresses : null
}

async function addAddress(receiver, phone, address) {
  const url = `${BASE_URL}/address`
  const response = await post(url, { receiver, phone, address })
  return checkResponse(response)
}

async function deleteAddress(id) {
  const url = `${BASE_URL}/address/${id}`
  const response = await del(url)
  return checkResponse(response)
}

export { getAddresses, addAddress, deleteAddress }
