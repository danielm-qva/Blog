import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique, AfterInsert, BeforeInsert } from "typeorm";
import { Post } from "../../post/domain/post.model";
import bycrypt from 'bcrypt';
import { IsEmail, IsString, Max, Min, IsNotEmpty, IsAlphanumeric, IsBoolean, IsStrongPassword, IS_NOT_EMPTY } from "class-validator"
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
  @Unique('unique_name', ['name'])
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  @Column({ default: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive!: boolean;

  @OneToMany(() => Post, (post) => post.userid)
  post!: Post[];

  @BeforeInsert()
  async save() {
    const salt = await bycrypt.genSalt(10);
    const hass_pasword = await bycrypt.hash(this.password, salt);
    this.password = hass_pasword;
  }

}

export default User;
