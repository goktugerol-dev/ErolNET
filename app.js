// Implementing Packages
const express = require("express");

const app = express();

// first parameter views is express feature, second one is the file name
app.use(express.static("public"));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home-guest')
});

app.listen(3000);