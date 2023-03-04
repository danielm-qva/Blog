import AppDataSource from "../../db/data-source";
import { Post } from "./post.model";

const RepositoryPost = AppDataSource.getMongoRepository(Post);

export default RepositoryPost;