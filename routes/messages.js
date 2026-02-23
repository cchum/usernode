const express = require('express')
const mongoose = require('mongoose')
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

router.patch('/:messageId', async(req, res) => {
    const { messageId } = req.params

    if(!mongoose.Types.ObjectId.isValid(messageId)){
        return res.status(400).json({ error: 'Invalid message ID'})
    }

    try {
        const message = await Message.findById(messageId)
        if (!message) {
            return res.status(404).json({ error: "Message not found" })
        }

        message.text = req.body.text
        const updatedMessage = await message.save()
        res.status(200).json(updatedMessage)
    } catch(err) {
        res.status(500).json(({error: err.message}))
    }
})

router.delete('/:messageId', async (req, res) => {
    const { messageId } = req.params

    if (!mongoose.Types.ObjectId.isValid(messageId)) {
        return res.status(400).json({ error: "Invalid message ID" })
    }

    try {
        const message = await Message.findByIdAndDelete(messageId)

        if (!message) {
            return res.status(404).json({ error: "Message is not found" })
        }

        res.status(200).json({message: "Deleted Message"})
    } catch(err) {
        res.status(500).json(({error: err.message}))
    }
})

module.exports = router