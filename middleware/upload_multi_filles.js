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

var upload_multi_img = multer({
    storage: storage,
})

module.exports = upload_multi_img;