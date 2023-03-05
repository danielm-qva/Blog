import { IsString, IsNotEmpty, Max, Min, IsNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "../../auth/domain/user.model";

@Entity()
export class Post {
  constructor(description: string, photo: string, user: number, like?: number) {
    this.description = description;
    this.photoPost = photo;
    this.userid = user;
    this.like = like ?? 0;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Max(255)
  @Min(10)
  description: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  photoPost: string;

  @Column({ default: 0 })
  @IsNumber()
  @IsNotEmpty()
  like!: number;

  @ManyToOne(() => User, (user) => user.post)
  userid: number;
}
