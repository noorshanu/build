const path = require('path');

const multer = require('multer');

// Configure multer storage (although files will be deleted afterward)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '.././uploads'));
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const uniqueId = Date.now();
    const filename = `${file.originalname}-${uniqueId}${fileExt}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });
module.exports = { upload };
