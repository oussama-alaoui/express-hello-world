const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    weight_type: {
        type: String,
        required: true
    },
    product_situation: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    product_cleaning: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    documents: {
        type: Array,
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        default: "request"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("RequestProduct", RequestProductSchema);