const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

const adminEditRouts = require('./routes/admin-edit');
const menuItems = require('./routes/menu');

app.use('/admin', adminEditRouts);
app.use('/menu', menuItems);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || 'An unknown error occured!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
