import { users } from "../data"

function getAddresses() {
  return new Promise((resolve) => {
    resolve(users[0].addresses)
  })
}

export { getAddresses }