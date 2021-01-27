const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 9000;

// const adminEditRouts = require('./routes/admin-edit');
// const menuItems = require('./routes/menu');

// app.use(bodyParser.json());

// app.use('/admin', adminEditRouts);
// app.use('/menu', menuItems);
// app.use('/', (req, res) => {
//   res.send('hello');
// });

app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// app.use((error, req, res, next) => {
//   if (res.headerSent) {
//     return next(error);
//   }
//   res
//     .status(error.code || 500)
//     .json({ message: error.message || 'An unknown error occured!' });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
