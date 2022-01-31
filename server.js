const express = require('express');
const req = require('express/lib/request');
const sequelize = require('./config/connection')
const app = express();
require('dotenv').config()
const routes = require('./routes')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(8080, () => console.log('Now listening'));
  });
  