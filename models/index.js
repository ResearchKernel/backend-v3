const mongo = require("mongoose");

// User schema
const userSchema = require("./user");
const User = mongo.model('User', userSchema);

// Userprofile Schema

const UserprofileSchema = require('./userprofile')
const Userprofile = mongo.model('userprofile', UserprofileSchema);

module.exports = {
    User,
    Userprofile
};