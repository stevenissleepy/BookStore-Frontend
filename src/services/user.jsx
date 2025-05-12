import { users } from "../data"
import { get, BASE_URL } from "./common"

async function getUser() {
  const url = `${BASE_URL}/user`
  let user = null
  try{
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

export { getUser, getAddresses }