const express = require('express');

const loRigthGestion = require('../function/rigthGestion.fn');

let loRouter = express.Router();

loRouter.get('/', function(req, res) {
  res.json(loRigthGestion.listRigth());
});

module.exports = loRouter
