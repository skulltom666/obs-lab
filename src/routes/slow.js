app.get('/api/slow', (req, res) => {
  const start = Date.now();
  setTimeout(() => {
    const duration = Date.now() - start;
    httpRequestDurationSeconds.observe(duration / 1000);  // Convert to seconds
    res.json({ message: 'Slow response' });
  }, 700);
});
