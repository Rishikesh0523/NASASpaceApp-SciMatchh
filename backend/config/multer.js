const multer = require('multer');

const storage = multer.diskStorage({
  destination:'./backend/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() +" "+ file.originalname)
  }
});

const upload = multer({
  storage: storage
}).single('image');

module.exports = upload
