import { get, post, BASE_URL, checkResponse } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  const response = await get(url)
  return checkResponse(response) ? response.data : null
}

async function login(username, password) {
  const url = `${BASE_URL}/user/login`
  const response = await post(url, { username, password })
  return checkResponse(response)
}

async function logout() {
  const url = `${BASE_URL}/user/logout`
  const response = await post(url, null)
  return checkResponse(response)
}

async function register(username, password) {
  const url = `${BASE_URL}/user/register`
  const response = await post(url, { username, password })
  checkResponse(response)
  return response.message
}

export { getUser, login, logout, register }
