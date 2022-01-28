const mongoose = require('mongoose')
const uniValid = require('mongoose-unique-validator')

const messageModel = mongoose.Schema({
    message: {type: String, require:true},
})

messageModel.plugin(uniValid)

module.exports = mongoose.model('Message', messageModel)