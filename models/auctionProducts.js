const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuctionProductSchema = new Schema({
  startingPrice: {
    type: Number,
    required: true
  },
  bids: [{
    type: Schema.Types.ObjectId,
    ref: "Bid"
  }],
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
  created_at: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: "auction"
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("AuctionProduct", AuctionProductSchema);
