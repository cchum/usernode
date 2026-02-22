const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    // "userA" : "id", not implemnted yet
    // "userB": "id", not implemented yet
    // "covnersation": "string" nnot implemented yet
})




module.exports = mongoose.model('Conversation', conversationSchema)