const express = require('express')
const projectsRouter = express.Router()
const {projects} = require('../data.json');

//accessing the projects route without an id parameter will redirect to a random instance of a project
projectsRouter.get('/', (req, res, next) => {
  const randomIndex = Math.ceil(Math.random()*projects.length)-1
  res.redirect(`/projects/${randomIndex}`)
});

projectsRouter.get('/:id', (req, res, next) => {
  //if an URL parameter of id is provided it checks that a projects exists with that id.
  if(projects[req.params.id] !== undefined) {
    //if it does, it passes that project into locals and renders the page
    res.locals.project = projects[req.params.id]
    res.render('project');
  } else {
    //if it does not next is called. Express will eventually hit the error handling middleware
    next()
  }

});

module.exports = projectsRouter;
