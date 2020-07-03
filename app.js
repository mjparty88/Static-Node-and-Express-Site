const express = require('express');
const data = require('./data.json');
const homeRouter = require('./routes')
const aboutRouter = require('./routes/about')
const projectsRouter = require('./routes/projects')
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

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
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(port, () => console.log(`The app is listening at http://localhost:${port}`));

  //https://placehold.it/550x350
