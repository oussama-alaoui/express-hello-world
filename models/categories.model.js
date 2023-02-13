var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        Maxlength: 100,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
});

module.exports = mongoose.model('Category', CategorySchema);