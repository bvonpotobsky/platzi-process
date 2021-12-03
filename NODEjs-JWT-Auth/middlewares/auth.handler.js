const boom = require('@hapi/boom');

const { config } = require('../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];

  if (apiKey === config.apiKey) {
    next();
  } else if (!apiKey) {
    return next(boom.unauthorized('No API key provided'));
  } else {
    return next(boom.unauthorized('Invalid API key'));
  }
}

module.exports = { checkApiKey };
