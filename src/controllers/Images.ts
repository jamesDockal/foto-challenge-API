import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Images from "../entities/Images";

import fs from "fs";
import path from "path";

class ImagesController {
  async saveImage(req: Request, res: Response) {
    const path = req.file?.path;
    if (!path) {
      return res.status(400).json({ error: "You must provide a image file" });
    }

    const imagesRepository = getRepository(Images);

    fs.readFile(path, async (err, image: any) => {
      const createdImage = await imagesRepository.create({
        id: req.file?.filename,
        image_url: path,
        image: image,
      });
      await imagesRepository.save(createdImage);
      return res.json({ createdImage });
    });
  }

  async getImageById(req: Request, res: Response) {
    const { id } = req.params;

    const imagesRepository = getRepository(Images);
    const image = await imagesRepository.findOne({
      id,
    });

    if (!image) {
      return res.send("error");
    }
    return res.end(image.image);
  }

  async getAllImages(req: Request, res: Response) {
    const imagesRepository = getRepository(Images);

    const Allimages = await imagesRepository.find();

    return res.json({ Allimages });
  }

  async deleteImage(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // delete the image from 'images' folder
      const url = path.resolve(__dirname, "..", "..", "images", id);
      fs.unlinkSync(url);

      // delete from database
      const imagesRepository = getRepository(Images);
      await imagesRepository.delete({
        id,
      });

      return res.json({ success: "Image deleted!" });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export { ImagesController };
