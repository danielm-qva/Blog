
import { Router , Response , Request } from "express";
import { login } from "../controller/auth.controller";

const routerAuth = Router();
routerAuth.post('/login', login);


export default routerAuth;