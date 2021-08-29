import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import { ImagesController } from "../controllers/Images";
import { ImagesMiddleware } from "../middlewares/Images";

const imagesRoutes = Router();

const { createImageWithRef, getAllImages, deleteImage } =
  new ImagesController();

const { imageExists } = new ImagesMiddleware();

imagesRoutes.post("/", multer(multerConfig).single("file"), createImageWithRef);

imagesRoutes.get("/", getAllImages);

imagesRoutes.delete("/:title", imageExists, deleteImage);

export { imagesRoutes };
