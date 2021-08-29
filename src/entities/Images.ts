import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("images")
class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;
}

export default Images;
