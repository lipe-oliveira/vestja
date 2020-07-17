const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
require('./app/controllers/authController')(app);
//require('./app/controllers/projectController')(app);
console.log(process.env.POR)
app.listen(process.env.PORT || 3000);
