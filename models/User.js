// Creating a variable with constructor function.
let User = (data,) => {
    this.data = data;
    // this.unicorn = data;   name doesn't need to match, just creating a property
}

// .register can be also any name but I used register because It's to register
User.prototype.register = () => {}


module.exports = User;