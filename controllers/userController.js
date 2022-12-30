const User = require('../models/User');



// Function when someone visits the base url
exports.home = (req, res) => {
    res.render('home-guest');
};

exports.register = (req, res) => {
    let user = new User(req.body);
    user.register();
    res.send("Thanks for trying to register")
    
};

exports.login = () => {};
exports.logout= () => {};