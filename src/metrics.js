const prometheus = require('prometheus-client');
const client = new prometheus.Registry();

// Definir métricas
const httpRequestsTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'status']
});
client.registerMetric(httpRequestsTotal);

const httpRequestDurationSeconds = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Histogram of HTTP request duration',
  buckets: [0.1, 0.3, 0.5, 1, 2, 5]
});
client.registerMetric(httpRequestDurationSeconds);

const httpErrorsTotal = new prometheus.Counter({
  name: 'http_errors_total',
  help: 'Total number of HTTP errors'
});
client.registerMetric(httpErrorsTotal);

// Endpoint para exponer métricas
app.get('/metrics', (req, res) => {
  res.set('Content-Type', client.contentType);
  res.end(client.metrics());
});
