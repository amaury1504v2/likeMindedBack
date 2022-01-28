const express = require('express')
const router = express.Router()
const userController = require('./../controllers/user')

router.post('/sendmessage', userController.sendmessage)

module.exports = router
