const multer = require("multer");

const MIME_TYPES = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/items");
  },
  filename: (req, file, cb) => {
    const extension = MIME_TYPES[file.mimetype];
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

module.exports = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else
      cb(new Error(`l'image n'est pas acceptée ${file.originalname}`), false);
  },
  storage,
  limits: { fileSize: 24 * 1024 * 1024 },
}).any("monfichier");
