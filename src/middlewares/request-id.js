const { v4: uuidv4 } = require('uuid');

const requestIdMiddleware = (req, res, next) => {
  const correlationId = req.header('x-correlation-id') || uuidv4();
  res.setHeader('x-correlation-id', correlationId);
  req.correlationId = correlationId;
  next();
};

module.exports = requestIdMiddleware;
