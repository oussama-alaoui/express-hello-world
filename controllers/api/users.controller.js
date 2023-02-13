var userModule = require('../../models/users.model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// Create and Save a new User
exports.create = (req, res) => {

    console.log(req.file);
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Create a User
    const user = new userModule({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
    });

    user.password= bcrypt.hashSync(req.body.password+user._id, 8)
    user.img = req.file.path;

    // Save jwt in header
    
    // Save User in the database
    user.save()
    .then(data => {
        var token = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
    
        res.header('auth', token).send(token);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};


// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    userModule.find().populate('products')
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
}

// Find a single user with a userId
exports.findOne = (req, res) => {
    userModule.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            });
        });
}

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    userModule.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        email: req.body.email,
        // img: req.body.img,
        country: req.body.country,
        password: bcrypt.hashSync(req.body.password, 8),
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.userId
            });
        });
}

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    userModule.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({ message: "User deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.userId
            });
        });
}

// Login
exports.login = (req, res) => {
    userModule.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password + user._id, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.header('auth', token).send(token);
    });
}