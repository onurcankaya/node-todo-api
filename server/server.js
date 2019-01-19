const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()

app.use(bodyParser.json())

// create a todo
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: 'false'
  })

  todo.save().then((doc) => {
    res.send(doc)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

// get all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }).catch((e) => {
    res.status(400).send(e)
  })
})

app.listen(3000, () => {
  console.log('server is up and running on port 3000')
})