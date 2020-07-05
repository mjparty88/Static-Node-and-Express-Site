const express = require('express')
const projectsRouter = express.Router()
const {projects} = require('../data.json');

//accessing the projects route without an id parameter will redirect to a random instance of a project
projectsRouter.get('/', (req, res, next) => {
  const randomIndex = Math.ceil(Math.random()*projects.length)-1
  res.redirect(`/projects/${randomIndex}`)
  next()
});

//if an URL parameter of id is provided (which it should be), it changes that a projects with that id exists.

projectsRouter.get('/:id', (req, res, next) => {
  if(projects[req.params.id] !== undefined) {
    //If it does, it passes that project into locals and renders the locals page
    res.locals.project = projects[req.params.id]
    res.render('project');
  }
  //If it does not next is called. Express will eventually hit the error handling middleware
    next()
});

module.exports = projectsRouter;
