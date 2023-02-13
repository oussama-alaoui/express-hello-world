var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        Maxlength: 100,
    },
    email: {
        type: String,
        Maxlength: 100,
    },
    img: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
    },
    phone: {
        type: String,
        Maxlength: 12,
    },
    city: {
        type: String,
        Maxlength: 100,
    },
    state: {
        type: String,
        Maxlength: 100,
    },
    region: {
        type: String,
        Maxlength: 100,
    },
    home_number: {
        type: String,
        Maxlength: 100,
    },
    password: {
        type: String,
        required: true,
        Maxlength: 100,
        Minlength: 8,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ['user', 'seller', 'smart seller', 'professional seller'],
        default: 'user'
    },
    productsCount: {
        type: Number,
        default: 2
    },
    ser_machCount: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        default: 500
    },
    birthday: {
        type: Date,
    },
    cin : {
        type: String,
        Maxlength: 100,
    },
    home_phone: {
        type: String,
        Maxlength: 100,
    },
    auctionCount: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('User', UserSchema);