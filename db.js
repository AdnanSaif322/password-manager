const {MongoClient} = require('mongodb')

let connectionURL = 'mongodb+srv://Adnan:saif1234@cluster0.eebdewt.mongodb.net/password_manager?retryWrites=true&w=majority'

let db = null;

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect(connectionURL).then((client) => {
            db = client.db()
            return callback()
        }).catch((error) => {
            console.log(error)
            return callback(error)
        })
    },
    getDb: () => db
}