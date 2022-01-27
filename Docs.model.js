var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Docs', Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    description: String,
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
}));