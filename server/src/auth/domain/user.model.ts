
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "../../post/domain/post.model";

@Entity()
export class User {

    constructor(email: string, name: string, password: string) {
        this.email = email;
        this.name = name;
        this.password = password;
    }


    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({ default: false })
    isActive: boolean = false;

    @OneToMany(() => Post, (post) => post.user)
    post!: Post[];
}

export default User;