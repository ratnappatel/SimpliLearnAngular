const express = require('express');

function generateApp(inputApp) {
  const app = inputApp || express();

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next(); // In Express application every function should execute its subsequent function by calling next() 
  });

  app.use(require('./api'));

  return app;
}

module.exports = generateApp;
