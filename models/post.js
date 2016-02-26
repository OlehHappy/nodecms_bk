var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var postSchema = mongoose.Schema({
  title: String,
  content: String,
  created: Date
});

exports.name = 'post';
exports.Schema = mongoose.model('post', postSchema);

// create test conten
// compile our model
// var Post = mongoose.model('post', postSchema);
// var record = new Post();
// record.title = 'first post';
// record.content = 'this is test content';
// record.save();
