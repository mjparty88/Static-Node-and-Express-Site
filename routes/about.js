const express = require('express')
const aboutRouter = express.Router()

//No locals are required. Simply renders the about.pug file
aboutRouter.get('/', (req, res) => {
  res.render('about');
});

module.exports = aboutRouter;
