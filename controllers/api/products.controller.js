var products = require('../../models/products.model');
var Category = require('../../models/categories.model');
var User = require('../../models/users.model');

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Product name can not be empty"
        });
    }

    // Create a Product
    const product = new products({
        name: req.body.name || "Untitled Product",
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        created_by: req.body.created_by,
    });

    // img upload
    if (req.files) {
        var files = req.files;
        var images = [];
        files.forEach(function (file) {
            images.push(file.path);
        });
        product.image = images;
    }

    // save product in the category
    Category.findById(req.body.category, async function(err, category) {
        if (err) {
            return res.status(500).send({
                message: "Error retrieving category with id " + req.body.category
            });
        }
        category.products.push(product._id);
        await category.save();
    });

    // Save Product in the user
    User.findById(req.body.created_by, async function(err, user) {
        if (err) {
            return res.status(500).send({
                message: "Error retrieving user with id " + req.body.created_by
            });
        }
        user.products.push(product._id);
        await user.save();
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    products.find().populate('created_by').populate('category')
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
}

// Find a single product with a productId
exports.findOneById = (req, res) => {
    products.findById(req.params.productId).populate('created_by').populate('category')
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.productId
            });
        });
}

// Find a single product with a userId
exports.findUserProducts = (req, res) => {
    products.find({userId: req.params.userId}).populate('created_by').populate('category')
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.userId
                });
            }
            res.send(product);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.userId
            });
        });
}

// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find product and update it with the request body
    products.findByIdAndUpdate(req.params.productId, {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        created_by: req.body.created_by,
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
}

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    products.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
}