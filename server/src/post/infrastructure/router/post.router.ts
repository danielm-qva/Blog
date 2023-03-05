import { Router } from "express";
import { PostUseCase } from "../../applications/UseCasePost";
import { ControllerPost } from "../controller/post.controller";
import SqlPostgresRepoPost from "../repository/SqlPostgresRespositoryPost";
const routerPost = Router();

const sqlRepo = new SqlPostgresRepoPost();
const caseUser = new PostUseCase(sqlRepo);
const controllerPost = new ControllerPost(caseUser);

routerPost.post("/post", controllerPost.createPost);
routerPost.put('/post/:id', controllerPost.updatePost);

export default routerPost;
    