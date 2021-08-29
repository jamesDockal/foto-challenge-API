import multer from "multer";
import path from "path";
import crypto from "crypto";

const storageConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    const imagesFolder = path.resolve(__dirname, "..", "..", "images");
    callback(null, imagesFolder);
  },
  filename: (req, file, callback) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) callback(err, file.filename);

      file.filename = `${hash.toString("hex")}-${file.originalname}`;

      callback(null, file.filename);
    });
  },
});

const multerConfig = {
  dest: path.resolve(__dirname, "..", "..", "images"),
  storage: storageConfig,
};

export default multerConfig;
