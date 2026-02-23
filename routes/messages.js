const express = require('express')
const router = express.Router()
const Message = require('./models/message')
const Conversation = require('./models/conversation')


router.get('/:conversationId', async(req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })
    .populate('senderId', 'user_name')
    res.status(200).json(messages)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

})

router.post('/', async(req, res) => {
    const { senderId, receiverId, text } = req.body

    try {
        let conversation = await Conversation.findOne({
            users: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                users: [senderId, receiverId]
            })
        }

        const message = await Message.create({
            conversationId: conversation._id,
            senderId,
            text
        })

        res.status(201).json(message)
    } catch (err) {
        res.status(500).json(({ error: err.message }))
    }
})

module.exports = router