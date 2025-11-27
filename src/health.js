app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/readyz', (req, res) => {
  res.status(200).send('Ready');
});
