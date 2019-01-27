var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// var Schema = 


const userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    imageURL: { type: String },
    userName: { type: String },
    email: { type: String },
    password: { type: String },
});

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

//this method is used to compare the password being input by the user to that in the database
//we pass the "password" argument to this function when we call it from the passport config file
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}


// gooddeedsdb
module.exports = mongoose.model('User', userSchema);
