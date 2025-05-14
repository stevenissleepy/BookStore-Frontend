import { users } from "../data"
import { get, post, BASE_URL, checkResponse } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  const response = await get(url)
  return checkResponse(response) ? response.data : null
}

async function getAddresses() {
  const url = `${BASE_URL}/address`
  const response = await get(url)
  return checkResponse(response) ? response.data.addresses : null
}

async function login(username, password) {
  const url = `${BASE_URL}/user/login`
  const response = await post(url, { username, password })
  return response
}

export { getUser, getAddresses, login }
