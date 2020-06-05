const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(cors());
require('./app/controllers/authController')(app);
//require('./app/controllers/projectController')(app);

app.listen(process.env.PORT || 3000);
