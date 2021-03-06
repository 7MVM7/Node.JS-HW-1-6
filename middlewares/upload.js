const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "tmp");

const multerSetting = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, tempDir);
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 2048,
  },
});

const upload = multer({
  storage: multerSetting,
});

module.exports = upload;
