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
});

var multiFileUpload = upload.fields([{ name: 'img', maxCount: 5 }, { name: 'doc', maxCount: 5 }]);

module.exports = multiFileUpload;