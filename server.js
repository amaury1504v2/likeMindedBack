const http = require('http')
const app = require('./app')
const socketIo = require('socket.io')

const normalizePort = val => {
    const port = parseInt(val,10)
    if(isNaN(port)){return val;}
    if(port>=0){return port;}
    return false
}
const port = normalizePort(process.env.PORT||3001)
app.set('port',port)

const errorHandler = error =>{
    if(error.syscall !== 'listen'){
        throw error
    }
    const address = server.address()
    const bind = typeof address ==='string' ? 'pipe' + address : 'port: ' +port
    switch(error.code){
        case 'EACCES':
            console.error(bind + 'require Privilege')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' already use')
            process.exit(1)
            break
        default:
            throw error
    }
}
//const port = (process.env.PORT||3000)
//app.set('port', process.env.PORT||3000)
const server = http.createServer(app)

server.on('error',errorHandler)
server.on('listening', ()=>{
    const address = server.address()
    const bind = typeof address ==='string' ? 'pipe' + address : 'port: ' +port
    console.log(' ecoute '+ bind)
})

const io = socketIo(server, {
        cors: {
            origin: '*',
        }
    })
    io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("disconnect", () => { //reception d'un évènement
        console.log("Client disconnected");
    });
    socket.on("sendMessage", (msg) => {
        console.log(msg);
        //socket.emit('returnMessage', msg)
        
        //create msg
        //enregistre

        const message = new Message({
            message:req.body.email
        })  
        message.save()
            .then(()=> res.status(201).json({message: 'create message'}))
            .catch(error=> res.status(400).json({error}))

        io.emit('returnMessage', msg)
    })
    });


server.listen(port)














