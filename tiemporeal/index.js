const path = require('path')
const express = require('express')
const SocketIo = require('socket.io')
const app = express()

app.set('PORT',process.env.PORT || 3000)

app.use(express.static(path.resolve(__dirname,'public')))

const server = app.listen(app.get('PORT'),()=>{
    console.log(`Corriendo en el puerto ${app.get('PORT')}`)
})

const io = SocketIo(server)

//websockets
io.on('connection',(socket)=>{
    console.log(`Corriendo... Id: ${socket.id}`)
    socket.on('chat:message',(data)=>{
        //emitir a todos
        io.sockets.emit('chat:message',data)
    })
    socket.on('chat:typing',(data)=>{
        //io.sockets.emit('chat:typing',data)
        //emitir a los demas
        socket.broadcast.emit('chat:typing',data)
    })
})


