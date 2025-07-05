const express = require('express');
const userRoutes = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.urlencoded());

app.use(userRoutes);

app.use(errorHandler);

module.exports = app;