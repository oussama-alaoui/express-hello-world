var path = require('path');
var multer = require('multer');
var uuid = require('uuid').v4;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    }
    , filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        cb(null, uuid() + ext);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
            cb(null, true);
        }
        else {
            return cb(new Error('Only image are allowed!'))
        }
    }
})

module.exports = upload;