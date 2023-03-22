const socket = io();

const userName = new URLSearchParams(window.location.search).get('username')

socket.on('connect', ()=> {
    console.log('first user');
    socket.emit('user', 'Lotta')
})