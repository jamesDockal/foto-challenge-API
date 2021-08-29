import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import Images from "../entities/Images";

class ImagesMiddleware {
  async imageExists(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const imagesRepository = getRepository(Images);
    const imageExists = await imagesRepository.findOne({ id });

    if (!imageExists) {
      return res.status(404).json({ error: "Image not exits!" });
    }
    return next();
  }
}

export { ImagesMiddleware };
