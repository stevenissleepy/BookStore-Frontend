import { users } from "../data"
import { get, post, BASE_URL, checkResponse } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  const user = await get(url)
  return user 
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
