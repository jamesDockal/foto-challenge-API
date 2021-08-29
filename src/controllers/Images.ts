import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Images from "../entities/Images";

class ImagesController {
  async createImageWithRef(req: Request, res: Response) {
    const imagesRepository = getRepository(Images);

    const createdImage = await imagesRepository.create({
      image: req.file?.filename,
    });

    await imagesRepository.save(createdImage);

    return res.send(createdImage);
  }
  async getAllImages(req: Request, res: Response) {
    const imagesRepository = getRepository(Images);

    const Allimages = await imagesRepository.find();

    return res.send(Allimages);
  }
}

export { ImagesController };
