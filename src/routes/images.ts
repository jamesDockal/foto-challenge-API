import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";

const imagesRoutes = Router();

imagesRoutes.post("/", multer(multerConfig).single("file"), (req, res) => {
  console.log(req.file);

  return res.send("images route");
});

export { imagesRoutes };
