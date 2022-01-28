const mongoose = require('mongoose')
const uniValid = require('mongoose-unique-validator')

const userModel = mongoose.Schema({
    message: {type: String, require:true},
})

userModel.plugin(uniValid)

module.exports = mongoose.model('Message', messageModel)