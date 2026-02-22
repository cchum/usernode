const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Conversation = require('./models/conversation')

router.get('/:userId', async(req, res) => {

    const { userId } = req.params

    if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
        return res.status(400).json({ error: "Invalid user ID" });
    }
    
    try {
        const conversations = await Conversation.find({
            users:req.params.userId
        })

        res.status(200).json(conversations)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message })
    }
})


module.exports = router