const Message = require('./../models/message')

exports.sendmessage = (req,res,next) =>{
    console.log('begin message')
    .then(message => {
        console.log('1')
        const message = new Message({
            message:req.body.message
        })  
        user.save()
            .then(()=> res.status(201).json({message: 'message sent'}))
            .catch(error=> res.status(400).json({error}))
    })
    .catch(error=> res.status(500).json({error}))
}