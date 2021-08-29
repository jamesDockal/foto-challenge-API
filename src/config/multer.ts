import multer from "multer";
import path from "path";
import crypto from "crypto";

const storageConfig = multer.diskStorage({
  destination: (req, file, callback: Function) => {
    const imagesFolder = path.resolve(__dirname, "..", "..", "images");
    callback(null, imagesFolder);
  },
  filename: (req, file, callback: Function) => {
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
  fileFilter: (req: any, file: any, cb: Function) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
      "image/png",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};

export default multerConfig;
