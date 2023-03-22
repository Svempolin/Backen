const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io')

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname,'client')))

const PORT = process.env.PORT || 9999;

server.listen(PORT, ()=> console.log('server is running on http://localhost:'+ PORT))

const io = socket(server)

io.on('connection', socket => {
    // här inne är vi uppkopplade
console.log('new user connected', socket.id)

// detta är när en ny användare kopplar upp sig
socket.on('user',(data) => {
    console.log( data,' has joined the classroom')
})

})