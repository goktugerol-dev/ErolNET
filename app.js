// Implementing Packages
const express = require("express");
const app = express();

const router = require('./router');

// first parameter views is express feature, second one is the file name
app.use(express.static("public"));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3000);