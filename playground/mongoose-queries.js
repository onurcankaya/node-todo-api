const { ObjectID } = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

const userId = '5c40862985802425ab78d15f'

if (!ObjectID.isValid(userId)) {
  return console.log('id not valid')
}

// const id = '5c41ee84b0f8d473f1ff86a7'

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos)
// }).catch((error) => {
//   console.log(error)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo)
// }).catch((error) => {
//   console.log(error)
// })

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('user not found')
  }
  console.log('user', user)
}).catch((error) => {
  console.log(error)
})