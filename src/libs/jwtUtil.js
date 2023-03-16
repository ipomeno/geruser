const jwt = require('jsonwebtoken');

const JWT_SECRET = '93820&@%#(*@shahslaj';
const JWT_EXPIRES_IN = 86400;

module.exports = { 
  sign(data) {
    return jwt.sign(data, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
  },
  verify(token) {
    return jwt.verify(token, JWT_SECRET);
  }
};