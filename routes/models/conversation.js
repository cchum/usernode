const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    }]
})




module.exports = mongoose.model('Conversation', conversationSchema)