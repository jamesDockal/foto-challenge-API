import { Request, Response, NextFunction } from "express";

import fs from "fs";
import path from "path";

class ImagesMiddleware {
  async imageExists(req: Request, res: Response, next: NextFunction) {
    const { title } = req.params;
    const url = path.resolve(__dirname, "..", "..", "images", title);

    const imageExists = fs.existsSync(url);
    if (!imageExists) {
      return res.status(404).json({ error: "Image not exits!" });
    }
    return next();
  }
}

export { ImagesMiddleware };
