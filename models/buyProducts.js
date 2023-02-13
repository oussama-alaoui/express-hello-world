const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuyProductSchema = new Schema({
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
    type: {
        type: String,
        default: "buy"
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

module.exports = mongoose.model("BuyProduct", BuyProductSchema);