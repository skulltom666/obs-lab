app.get('/api/error', (req, res) => {
  const error = new Error('Simulated error');
  logger.error('Error occurred', { correlationId: req.correlationId, stack: error.stack });
  httpErrorsTotal.inc(); // Incrementar contador de errores
  res.status(500).send('Internal Server Error');
});
