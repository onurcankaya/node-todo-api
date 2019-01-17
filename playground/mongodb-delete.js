const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result)
    // })

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c4053e6a2a3faf24efdbb8a')}).then((result) => {
      console.log(result)
      console.log(JSON.stringify(result, undefined, 2))
    })

    // client.close()
})