// create a model connect with db (under the MVC design pattern)
const mongoose = require('mongoose')

// intake a js object which has keys to all the properties of users
const guestSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// name of the model in the db, schema correspond to that model
// this model allows direct interaction with database using the schema
module.exports = mongoose.model('Guest', guestSchema)