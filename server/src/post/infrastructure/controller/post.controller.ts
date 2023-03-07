import { PostUseCase } from "../../applications/UseCasePost";
import { Response, Request } from "express";
import { Post } from "../../domain/post.model";
import { validate } from "class-validator";

export class ControllerPost {
  constructor(private readonly repo: PostUseCase) {}

  public createPost = async (req: Request, res: Response) => {
    const { description, photoPost, user } = req.body;
    const newPost = new Post(description, photoPost, user);
    const error = await validate(newPost);
    if (error.length > 0) {
      return res.status(404).json(error);
    } else {
      try {
        this.repo
          .createPost(newPost)
          .then((ans) => {
            return res.status(204).json(ans);
          })
          .catch((error) => {
            return res.status(500).json(error);
          });
      } catch (error) {
        return res.status(500).json(error);
      }
    }
    
  };

  public updatePost = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      this.repo
        .updatePost(parseInt(id), req.body)
        .then((ans) => {
          return res.status(200).json(ans);
        })
        .catch((error) => {
          return res.status(404).json(error);
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
   public getAllPost =async (req: Request , res: Response) => {
       try {
          this.repo.findAllPost().then(item => { 
             res.status(200).json(item);
          })
       } catch (error) {
        
       }
   }
}
