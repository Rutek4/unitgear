const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

// Routes
app.use('/', require('./routes/index'));
app.use('/convert', require('./routes/convert'));

module.exports = app;