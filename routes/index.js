const express = require('express')
const homeRouter = express.Router()
const {projects} = require('../data.json');

//passes projects into locals, and renders the index.pug file
homeRouter.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});

module.exports = homeRouter;
