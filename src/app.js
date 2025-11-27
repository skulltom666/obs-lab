const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const app = express();

// Configuración de Morgan para loguear las peticiones HTTP
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


const requestIdMiddleware = require('./middlewares/request-id');
app.use(requestIdMiddleware);
