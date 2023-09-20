/*
 * Check this one for the comments of the folder "models"
*/

// create a model connect with db (under the MVC design pattern)
const mongoose = require('mongoose')

// intake a js object which has keys to all the properties of users
// Define any structure or constraints of the documents.
const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    GPA: {
        type: String,
        required: true
    }
})

// name of the model in the db, schema correspond to that model
// this model allows direct interaction with database using the schema
// Usually the model name is also the collection name in MongoDB, 
// e.g., if the name is 'Course', then the collection name is likely to be 'courses'.
// It is a by-default mechanism through a library called "pluralize".
module.exports = mongoose.model('Course', courseSchema)