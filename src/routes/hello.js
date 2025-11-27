app.get('/api/hello', (req, res) => {
  logger.info('Hello route accessed', { correlationId: req.correlationId });
  res.json({ message: 'Hello World', correlationId: req.correlationId });
});
