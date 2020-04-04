///  Instalar ---> npm i socket.io ////

var io = require('socket.io')(3000)  // 3000 é a porta que var usar ///

io.on('connection', (socket)=>{
    console.log('novo usuario conectado');

    socket.on('client_hello', (data)=>{
        io.sockets.emit('server_hello', data); //todos usuarios recebe a msg
    })

});