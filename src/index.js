const express = require('express');
const body_parser = require('body-parser');

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

require('./app/controllers/authController')(app);
require('./app/controllers/projectController')(app);

app.listen('3000');
