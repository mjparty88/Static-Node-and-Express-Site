const express = require('express')
const projectsRouter = express.Router()
const {projects} = require('../data.json');

//accessing the projects route will redirect to a random instance of a project
projectsRouter.get('/', (req, res, next) => {
  const randomIndex = Math.ceil(Math.random()*projects.length)-1
  res.redirect(`/projects/${randomIndex}`)
  next()
});

projectsRouter.get('/:id', (req, res, next) => {
  if(projects[req.params.id] !== undefined) {
    res.locals.project = projects[req.params.id]
    res.render('project');
  }
    next()
});

module.exports = projectsRouter;
