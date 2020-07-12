const express = require('express');
const data = require('./data.json');
const homeRouter = require('./routes')
const aboutRouter = require('./routes/about')
const projectsRouter = require('./routes/projects')
const app = express();
let port = process.env.PORT || 3000; //sets the port to the PORT environment variable (in prod), or 3000 in dev.

//sets pug as the view engine
app.set('view engine', 'pug');

//applies the static routes
app.use('/static', express.static('public'));

//applies the modular routers
app.use(homeRouter);
app.use('/about', aboutRouter)
app.use('/projects', projectsRouter)

//create an error and pass it onto the error handling middleware
app.use((req, res, next) => {
  const err = new Error('These are not the pages you are looking for');
  err.status = 404;
  next(err);
});

//error handling middleware
app.use((err, req, res, next) => {
  console.log("There is no page for the site you've looked for on this site.", err.status)
  res.locals.error = err;
  res.status(err.status);
  res.render('error');

});

//listens on the port
app.listen(port, () => console.log(`The app is listening at http://localhost:${port}`));
