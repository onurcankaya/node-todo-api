const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
    //   console.log('Todos')
    //   console.log(JSON.stringify(docs, undefined, 2))
    // }).catch((err) => {
    //   console.log(err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`there are ${count} todos`)
    // }).catch((err) => {
    //   console.log(err)
    // })

    db.collection('Users').find({name: 'Onur'}).toArray().then((doc) => {
      console.log(JSON.stringify(doc, undefined, 2))
    }).catch((err) => {
      console.log(err)
    })

    db.collection('Users').find({ name: 'Onur' }).count().then((count, doc) => {
      console.log(`there are ${count} users with the name Onur`)
    }).catch((err) => {
      console.log(err)
    })

    // client.close()
})