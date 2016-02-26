var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/nodecms');
// mongoose.connect(F.config.database);
mongoose.connect(CONFIG('database'));

global.mongoose = mongoose;
