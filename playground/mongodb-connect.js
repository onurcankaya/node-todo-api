const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // insert new doc into Users (name, age, location)

    db.collection('User').insertOne({
      name: 'Onur',
      age: 29,
      location: 'Copenhagen'
    }, (err, result) => {
      if (err) {
        return console.log('unable to insert user', err)
      }

      console.log(JSON.stringify(result.ops, undefined, 2))
    })

    // db.collection('Todos').insertOne({
    //   text: 'brush teeth',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('unable to insert todo', err)
    //   }

    //   console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    client.close()
})