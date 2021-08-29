import { EntityRepository, Repository } from "typeorm";
import Images from "../entities/Images";

// make a connection between the table user and the app
@EntityRepository(Images)
class ImagesRepository extends Repository<Images> {}

export default ImagesRepository;
