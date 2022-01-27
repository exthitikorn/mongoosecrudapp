var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        varidate: {
            varidator: function(text) {
                return text.length > 0;
            },
            message: "Empty name is not allowed"
        }
    }
}))