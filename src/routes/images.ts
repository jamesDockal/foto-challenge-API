import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";
import { ImagesController } from "../controllers/Images";

const imagesRoutes = Router();

const { createImageWithRef, getAllImages, getImages } = new ImagesController();

imagesRoutes.post("/", multer(multerConfig).single("file"), createImageWithRef);

imagesRoutes.get("/teste", getImages);
imagesRoutes.get("/", getAllImages);

export { imagesRoutes };
