import ManagerRepositoryPost, {
  RepositoryPost,
} from "../../domain/ManageRepositoryPost";
import { Post } from "../../domain/post.model";

export class SqlPostgresRepoPost implements RepositoryPost {
  async createPost(post: Post): Promise<Post | null> {
    return await ManagerRepositoryPost.save(post);
  }
  async updatePost(id: number, body: Object): Promise<any> {
    return await ManagerRepositoryPost.update(id, body);
  }
  async AllPost():Promise<any> {
    return await ManagerRepositoryPost.find();
  }
}

export default SqlPostgresRepoPost;
