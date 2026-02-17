const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDB'

const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open', function(){
    console.log('connected succesfully...')
})