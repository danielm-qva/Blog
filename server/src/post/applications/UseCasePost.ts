
import {RepositoryPost} from '../domain/ManageRepositoryPost'
import { Post } from '../domain/post.model'

export class PostUseCase {

       constructor(private readonly postRepo: RepositoryPost ){}
    
        createPost =  async (post: Post) => {
            const valuePost = new Post(post.description , post.photoPost , post.userid);
                return  await this.postRepo.createPost(valuePost); 
       } 
       updatePost = async (id:number , bodyupdate: Object) => {
             return await this.postRepo.updatePost(id ,bodyupdate);
       }
        findAllPost = async () => {
             return await this.postRepo.AllPost();
        }
}