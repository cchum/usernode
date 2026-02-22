const mongoose = require('mongoose')

const messageSchema = new mongooseSchema({
    // "senderID": id, still thinking how to implement
    // "receiverID": id, still thinking how to implement
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Message', messageSchema)