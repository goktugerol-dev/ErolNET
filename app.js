// Implementing Packages
const express = require("express");
const app = express();

const router = require('./router');

// Add the user submitted data onto our request object.
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// first parameter views is express feature, second one is the file name
app.use(express.static("public"));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router);

// app.listen(3000); the app will wait db to connect, after an established connection it it will start
module.exports = app;