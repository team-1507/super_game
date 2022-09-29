const { app } = require('./build/server.js');
// import * as app from './build/server.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
})
.on('error', function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const isPipe = portOrPipe => Number.isNaN(portOrPipe);
  const bind = isPipe(PORT) ? 'Pipe ' + PORT : 'Port ' + PORT;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});