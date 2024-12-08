const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');
  if (!parts.length === 2) {
    return res.status(401).send({ error: 'Token error' });
  }
  if (!parts[0].toLowerCase() === 'bearer') {
    return res.status(401).send({ error: 'Token malformatted' });
  }
  jwt.verify(parts[1], authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Token invalid' });
    }
    req.userId = decoded.id;
    console.log(decoded.id);

    return next();
  },);
}