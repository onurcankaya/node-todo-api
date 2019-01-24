const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

const data = {
  id: 10
}

const token = jwt.sign(data, 'secret')
console.log(token)

const decoded = jwt.verify(token, '123abc')
console.log('decoded', decoded)

// const message = 'I am user number 3'
// const hash = SHA256(message).toString()

// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)

// const data = {
//   id: 4
// }

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'salt').toString()
// }

// token.data.id = 5

// const resultHash = SHA256(JSON.stringify(token.data) + 'salt').toString()
// console.log(resultHash)

// if (resultHash === token.hash) {
//   return console.log('data was not manipulated. you are safe!')
// }

// console.log('data got manipulated. you have been pwned!')