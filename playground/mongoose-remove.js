const { ObjectID } = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

// const id = '5c431a9e597a7f0c4c88aefe'

// Todo.findByIdAndDelete(id).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

Todo.remove({}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})