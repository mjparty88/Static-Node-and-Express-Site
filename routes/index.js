const express = require('express')
const homeRouter = express.Router()
const {projects} = require('../data.json');

homeRouter.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});

module.exports = homeRouter;
