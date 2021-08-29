import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Images from "../entities/Images";

import fs from "fs";
import path from "path";

class ImagesController {
  async createImageWithRef(req: Request, res: Response) {
    const imagesRepository = getRepository(Images);

    const createdImage = await imagesRepository.create({
      image: req.file?.filename,
    });

    await imagesRepository.save(createdImage);

    return res.json({ createdImage });
  }
  async getAllImages(req: Request, res: Response) {
    const imagesRepository = getRepository(Images);

    const Allimages = await imagesRepository.find();

    return res.json({ Allimages });
  }

  async deleteImage(req: Request, res: Response) {
    const { title } = req.params;

    try {
      // delete from 'images' folder
      const url = path.resolve(__dirname, "..", "..", "images", title);
      fs.unlinkSync(url);

      // delete from database
      const imagesRepository = getRepository(Images);
      await imagesRepository.delete({
        image: title,
      });

      return res.json({ success: "Image deleted!" });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export { ImagesController };
