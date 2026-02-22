const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDB'

const app = express()


mongoose.connect(url)
const con = mongoose.connection

con.on('open', function(){
    console.log('connected successfully...')
})

app.use(express.json())

const userRouter = require('./routes/users')
const messageRouter = require('./routes/messages')
const conversationRouter = require('./routes/conversations')


app.use('/users',userRouter)
app.use('/messages',messageRouter)
app.use('/conversations',conversationRouter)

app.listen(9000, () => {
    console.log('Server has started')
})