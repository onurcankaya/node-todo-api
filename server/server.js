const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

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

// get todo by id
app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({ todo })
  }).catch((error) => {
    res.status(400).send()
  })
})

// delete todo by id
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.status(200).send(todo)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

// update a todo
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, { $set : body }, { new: true }).then((todo) => {
    if (!todo) {
      res.status(404).send()
    }
    res.status(200).send({ todo })
  }).catch((e) => {
    res.status(404).send(e)
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`)
})
