const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzODg5MDI0Nn0.ytqdFiRiCu3IK5zDM5mr5wGL3uhGNZK2hPjVJYMS0dQ';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
