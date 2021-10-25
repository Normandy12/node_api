require('dotenv').config()

const { Sequelize } = require('sequelize');
var initModels = require("./app/models/init-models");

var express = require('express'),
    app = express(),
    port = 3000;

const sequelize = new Sequelize('node_api', process.env.DEV_USER, process.env.DEV_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});

var models = initModels(sequelize)

var routes = require('./app/routes/UserRoute');
routes(app,models);

app.listen(port);

console.log('REST API server running on port: ' + port);
