const express = require('express');
const app = express();
const routes = require('./routes/login');
const cors = require('cors');
require('./database');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/api', routes);
app.get('/', (request, response) => {
  return response.send('hello world');
});

app.listen(8888);