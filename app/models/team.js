var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Team = mongoose.Schema({
  players: [User],
  rank: Number
});

module.exports = mongoose.model('Team', Team);
