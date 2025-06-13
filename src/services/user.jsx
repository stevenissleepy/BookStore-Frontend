import { encryptPassword } from "../utils/password"
import { get, post, put, BASE_URL, checkResponse } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  const response = await get(url)
  return checkResponse(response) ? response.data : null
}

async function getUsers() {
  const url = `${BASE_URL}/user/all`
  const response = await post(url)
  return checkResponse(response) ? response.data.users : []
}

async function updateUser(data) {
  const url = `${BASE_URL}/user`
  const response = await put(url, data)
  return checkResponse(response) ? response.data : null
}

async function login(username, password) {
  const url = `${BASE_URL}/user/login`
  const encryptedPassword = encryptPassword(username, password)
  const response = await post(url, { username, password: encryptedPassword })
  return response
}

async function logout() {
  const url = `${BASE_URL}/user/logout`
  const response = await post(url, null)
  return checkResponse(response)
}

async function register(username, password, email) {
  const url = `${BASE_URL}/user/register`
  const encryptedPassword = encryptPassword(username, password)
  const response = await post(url, { username, password: encryptedPassword, email })
  checkResponse(response)
  return response.message
}

async function banUser(username) {
  const url = `${BASE_URL}/user/ban/${username}`
  const response = await put(url)
  return checkResponse(response)
}

async function unbanUser(username) {
  const url = `${BASE_URL}/user/unban/${username}`
  const response = await put(url)
  return checkResponse(response)
}

export { getUser, getUsers, updateUser, login, logout, register, banUser, unbanUser }
