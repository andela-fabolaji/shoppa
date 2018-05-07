import winston from 'winston';

const socketService = (socket) => {
  socket.on('connection', () => {
    winston.info('socket connected');
  });
};

export default socketService;
