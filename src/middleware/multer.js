// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '../uploads');
//   },
//   filename: (req, file, cb) => {
//     // Estrai l'estensione del file originale
//     const fileExt = file.originalname.split('.').pop();
//     // Usa l'ID utente dal token di autenticazione per il nome del file
//     cb(null, `${req.userId}.${fileExt}`);
//   },
// });

// const upload = multer({ storage });

// module.exports = { upload };

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads');
  },
  filename: (req, file, cb) => {
    // Extract file extension
    const fileExt = path.extname(file.originalname);
    // Generate a unique identifier (e.g., timestamp or UUID)
    const uniqueId = Date.now(); // You can replace this with any unique identifier generation logic
    // Construct the filename with the original name and the unique identifier
    const filename = `${file.originalname}-${uniqueId}${fileExt}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

module.exports = { upload };
