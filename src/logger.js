const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;
const DailyRotateFile = require('winston-daily-rotate-file');

// Definir formato de log
const logFormat = printf(({ timestamp, level, message, correlationId, stack }) => {
  return JSON.stringify({
    timestamp,
    level,
    correlationId,
    message,
    stack
  });
});

// Configurar Winston con rotación diaria
const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new DailyRotateFile({
      filename: 'logs/app-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d'
    }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

module.exports = logger;

