import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "../../auth/domain/user.model";

@Entity()
export class Post {
  constructor(description: string, photo: string, user: User) {
    this.description = description;
    this.photoPost = photo;
    this.user = user;
  }

  @PrimaryGeneratedColumn()
  id!: Number;

  @Column()
  description: string;

  @Column()
  photoPost: string;

  @Column()
  like: Number = 0 ;

  @ManyToOne(() => User, (user) => user.post)
  user: User;
}
