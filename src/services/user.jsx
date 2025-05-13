import { users } from "../data"
import { get, post, BASE_URL } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  let user = null
  try {
    user = await get(url)
  } catch (e) {
    console.error(e)
  }
  return user
}

function getAddresses() {
  return new Promise((resolve) => {
    resolve(users[0].addresses)
  })
}

async function login(username, password) {
  const url = `${BASE_URL}/user/login`
  let result

  try {
    result = await post(url, { username, password })
  } catch (e) {
    console.error(e)
    result = {
      code: 500,
      message: "登录失败",
      data: null,
    }
  }
  return result
}

export { getUser, getAddresses, login }
