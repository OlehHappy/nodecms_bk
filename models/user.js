var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  alias: String,
  ip: String,
  email: String,
  password: String,
  created: Date
});

exports.name = 'user';
exports.Schema = mongoose.model('user', userSchema);

// compile our model
// var Person = mongoose.model('User', userSchema);

// create a document
// var record = new Person();
//
// record.alias = 'test Alias';
// record.ip = '192.168.0.1';
// record.email = 'email@email.com';
// record.password = 'mypass';
//
// record.save(function() {
//   User.find().all(function(arr) {
//      console.log(arr);
//      console.log('length='+arr.length);
//    });
// });
