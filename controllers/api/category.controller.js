var categories = require('../../models/categories.model');

// Create and Save a new Category
exports.create = (req, res) => {
            // Validate request
            if(!req.body) {
                return res.status(400).send({
                    message: "Category content can not be empty"
                });
            }
        
            // Create a Category
            const category = new categories({
                name: req.body.name,
            });
        
            // Save Category in the database
            category.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Category."
                });
            });
    };

// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
    categories.find().populate('products')
        .then(categories => {
            res.send(categories);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        });
}