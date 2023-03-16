const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());

routes(app);

module.exports = app;