const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

const server = app.listen(3000, () => {
    console.log('server is running....')
})

const io = socketIO(server)
io.on('connection', (socket) => {
    console.log('client socket connected')

    socket.on('order', (response) => {
        console.log(response)

        io.sockets.emit('shop', response)
    })
})