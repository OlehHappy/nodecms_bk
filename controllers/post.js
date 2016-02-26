exports.install = function() {
	// F.restful('/posts/', [], json_post_query, json_post_get, json_post_save, json_post_delete);
	// ... is same as:
	F.route('/posts/', json_post_query);
	// F.route('/user/{id}/', json_user_get);
	// F.route('/user/{id}/', json_user_save, ['post', 'json']);
  // F.route('/user/{id}/', json_user_delete, ['delete']);
};

/*
	Description: Get users
	Method: GET
	Output: JSON
*/
function json_post_query() {

	var self = this;

	// self.model('user').Schema;
	// framework.model('user').Schema;
	var Post = MODEL('post').Schema;

	console.log('query -> all');

	Post.find(function(err, docs) {
		self.json(docs);
		console.log(docs);
	});
}

/*
	Description: Get user
	Method: GET
	Output: JSON
*/
function json_post_get(id) {

	var self = this;

	// self.model('user').Schema;
	// framework.model('user').Schema;
	var Post = MODEL('post').Schema;

	console.log('get ->', id);

	Post.findById(id, function(err, doc) {
		self.json(doc);
	});

}

/*
	Description: Save user
	Method: POST
	Output: JSON
*/
function json_post_save(id) {

	var self = this;

	// self.model('user').Schema;
	// framework.model('user').Schema;
	var Post = MODEL('post').Schema;

	console.log('save ->', id);

	// What is it? https://github.com/totaljs/examples/tree/master/changes
	self.change('user: save, id: ' + id);

	Post.findById(id, function(err, doc) {
		// Please do not save a document (THANKS :-))
		// doc.save();
		self.json({ r: true });
	});

}

/*
	Description: Delete user
	Method: DELETE
	Output: JSON
*/
function json_post_delete(id) {

	var self = this;

	// self.model('user').Schema;
	// framework.model('user').Schema;
	var Post = MODEL('post').Schema;

	console.log('delete ->', id);

	// What is it? https://github.com/totaljs/examples/tree/master/changes
	self.change('user: deleted, id: ' + id);

	Post.findById(id, function(err, doc) {
		// Please do not remove a document (THANKS :-))
		// doc.remove();
		self.json({ r: true });
	});

}
