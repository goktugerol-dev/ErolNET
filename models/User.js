const validator = require("validator");

// Creating a variable with constructor function.
let User = function (data) {
    this.data = data;
    this.errors = [];
    // this.unicorn = data;   name doesn't need to match, just creating a property
}

User.prototype.validate = function() {
    if (this.data.username == "") { this.errors.push("You must provide a username.")}
    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)){this.errors.push("Username can only contain letters and numbers")}
    if (!validator.isEmail(this.data.email)) { this.errors.push("You must provide a valid e-mail address.")}
    if (this.data.password == "") {this.errors.push("You must provide a password")}
    if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push ("password must be a least 12 characters")}
    if (this.data.password.length > 100) {this.errors.push("Password cannot exceed 100 characters")}
    if (this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push ("Your username must be a least 3 characters")}
    if (this.data.username.length > 30) {this.errors.push("Username cannot exceed 30 characters")}
}

// "this" calls lowercase user object pointing here

// .register can be also any name but I used register because It's to register
User.prototype.register = function () {
    // 1: Validate user data:
    this.validate()
    // 2: Only if there are no validation errors: Save the user data into database
}


module.exports = User;