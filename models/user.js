var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

// The blueprint for the model
var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

// Plugin used for obtaining the unique validator installed from npm
schema.plugin(mongooseUniqueValidator);

// The model created for the collections in mongo shell
module.exports = mongoose.model('User', schema);