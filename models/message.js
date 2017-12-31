var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// The blueprint for the model
var schema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// The model created for the collections in mongo shell
module.exports = mongoose.model('Message', schema);