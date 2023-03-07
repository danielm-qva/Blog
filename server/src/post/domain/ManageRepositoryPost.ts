import AppDataSource from "../../db/data-source";
import { Post } from "./post.model";

export interface RepositoryPost {
    AllPost(): Promise<Post[] | []>;
    createPost(post: Post): Promise<Post | null > ;
    updatePost(id: number , body: object):Promise<Post | null >;
}

const ManagerRepositoryPost = AppDataSource.getRepository(Post);

export default ManagerRepositoryPost;