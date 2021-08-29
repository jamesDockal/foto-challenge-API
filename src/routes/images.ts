import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import { ImagesController } from "../controllers/Images";
import { ImagesMiddleware } from "../middlewares/Images";

const imagesRoutes = Router();

const { saveImage, getAllImages, deleteImage, getImageById } =
  new ImagesController();

const { imageExists } = new ImagesMiddleware();

imagesRoutes.get("/", getAllImages);
imagesRoutes.get("/:id", getImageById);

imagesRoutes.post("/", multer(multerConfig).single("file"), saveImage);

imagesRoutes.delete("/:id", imageExists, deleteImage);

export { imagesRoutes };
