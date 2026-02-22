const mongoose = require('mongoose')

const messageSchema = new mongooseSchema({
    "conversationID":{
        type: mongoose.Shema.Types.OnjectId,
        ref: 'Conversation',
        req: true
    },
    "senderID": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        req: true,
    },
    "receiverID": {
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