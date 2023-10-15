const socketIO = require('socket.io');
let io;

function initializeSocket(server) {
    io = socketIO(server);
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado.');
        socket.emit('mensaje', 'Bienvenido');
    });

    return io;
}

module.exports = {
    initializeSocket,
    getIO: () => {
        if (!io) {
            throw new Error('Socket.IO no está inicializado.');
        }
        return io;
    },
};
