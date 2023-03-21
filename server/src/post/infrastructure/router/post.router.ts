import { Router } from "express";
import { isAutorizado } from "../../../auth/infrastructure/middleware/authHandle";
import { PostUseCase } from "../../applications/UseCasePost";
import { ControllerPost } from "../controller/post.controller";
import SqlPostgresRepoPost from "../repository/SqlPostgresRespositoryPost";

const routerPost = Router();

const sqlRepo = new SqlPostgresRepoPost();
const caseUser = new PostUseCase(sqlRepo);
const controllerPost = new ControllerPost(caseUser);

routerPost.post("/post",isAutorizado ,controllerPost.createPost);
routerPost.put('/post/:id',isAutorizado, controllerPost.updatePost);
routerPost.get('/post', controllerPost.getAllPost)

export default routerPost;
    