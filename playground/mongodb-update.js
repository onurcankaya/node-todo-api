const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5c4053eca2a3faf24efdbb8d')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result)
    // })

    // db.collection('Users').findOneAndUpdate({
    //   _id: new ObjectID('5c4041f4b964b502a3310be7')
    // }, {
    //   $set: {
    //     name: "Ricardio"
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(JSON.stringify(result, undefined, 2))
    // })

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5c4041f4b964b502a3310be7')
    }, {
      $inc: {
        age: 3
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2))
    })

    // client.close()
})