var category = require('../models/categories.model');
var product = require('../models/products.model');
var user = require('../models/users.model');

// home page
exports.index = async function(req, res) {

    // get all categories
    var categories = await category.find().populate('products');

    // get all products
    var products = await product.find().populate('category').populate('created_by');

    // get lstadded products
    var lastadded = await product.find().sort({created_at: -1}).limit(4).populate('category').populate('created_by');

    // get last user
    var lastuser = await user.find().sort({created_at: -1}).limit(4);

    res.render('index', { title: 'Home', categories: categories, products: products, lastadded: lastadded, lastuser: lastuser });
}

