import { users } from "../data"
import { get, post, BASE_URL, checkResponse } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  const response = await get(url)
  return checkResponse(response) ? response.data : null
}

function getAddresses() {
  return new Promise((resolve) => {
    resolve(users[0].addresses)
  })
}

async function login(username, password) {
  const url = `${BASE_URL}/user/login`
  const response = await post(url, { username, password })
  return response
}

export { getUser, getAddresses, login }
