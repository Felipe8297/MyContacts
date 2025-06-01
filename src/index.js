const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const handler = require('./middleware/errors');

const app = express();

app.use(express.json());
app.use(routes);
app.use(handler);

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
