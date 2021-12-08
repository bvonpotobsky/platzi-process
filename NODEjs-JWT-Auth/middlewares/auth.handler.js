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

// function isAdmin(req, res, next) {
//   const { user } = req;

//   if (user.role === 'admin') {
//     next();
//   } else {
//     next(boom.unauthorized('You are not authorized to perform this action'));
//   }
// }

function checkRoles(...roles) {
  return (req, res, next) => {
    const { user } = req;

    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized('You are not authorized to perform this action'));
    }
  };
}

module.exports = { checkApiKey, checkRoles };
