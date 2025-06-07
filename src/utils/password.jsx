import CryptoJS from "crypto-js"

function encryptPassword(username, password) {
  const salt = "salt_" + username
  const hash = CryptoJS.PBKDF2(password, salt, {
    keySize: 256 / 32,
    iterations: 10000,
  }).toString()

  return hash
}

export { encryptPassword }
