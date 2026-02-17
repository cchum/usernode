const express = require('express')
const router = express.Router()
const User = require('./models/user')

router.get('/', async(req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send('Error ', err)
    }
})


router.post('/', async(req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        user_name: req.body.user_name,
        password: req.body.password

    })

    try{
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router