const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    "conversationId":{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        req: true
    },
    "senderId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        req: true,
    },
    "receiverId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        req:true
    },
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Message', messageSchema)