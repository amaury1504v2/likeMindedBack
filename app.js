const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const userRoutes = require('./routes/user')
const path = require('path')
mongoose.connect('mongodb+srv://likeminded:mdp_likeminded_123@cluster0.bansf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("db valid"))
.catch(()=> console.log("db error"))


app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    next()
})

app.use(express.json())
app.use(express.urlencoded({
    extended :true
}))
app.use('/user',userRoutes)



module.exports = app