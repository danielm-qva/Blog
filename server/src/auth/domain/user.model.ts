import { Entity, Column, PrimaryGeneratedColumn, OneToMany , Unique } from "typeorm";
import { Post } from "../../post/domain/post.model";
import { IsEmail, IsString, Max, Min ,IsNotEmpty ,IsAlphanumeric, IsBoolean , IsStrongPassword } from "class-validator";

@Entity()
export class User {
  constructor(
    email: string,
    name: string,
    password: string,
    isActive?: boolean
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.isActive = isActive ?? true;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column() 
  @Unique('unique_email', ['email'])
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @Column()
  @Unique('unique_name' , ['name'])
  @IsString()
  @Max(25)
  @Min(5)
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @Column({ default: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive!: boolean;

  @OneToMany(() => Post, (post) => post.userid)
  post!: Post[];

}

export default User;
