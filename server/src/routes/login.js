const express = require('express');

const router = express.Router();

router.get('/', (resquest, response) => {
  return response.send('teste')
});

module.exports = router;