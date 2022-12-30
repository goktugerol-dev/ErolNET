const User = require('../models/User');



// Function when someone visits the base url
exports.home = (req, res) => {
    res.render('home-guest');
};

exports.register = (req, res) => {
    let user = new User(req.body);      // User Blueprint - Model
    user.register()
    if (user.errors.length){
        res.send(user.errors)
    } else {
        res.send("Congrats. No Errors")
    }
}
  
exports.login = () => {};
exports.logout = () => {};