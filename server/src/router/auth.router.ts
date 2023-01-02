import { Router , Response , Request } from "express";
import { login } from "../controller/auth.controller";

const routerAuth = Router();

routerAuth.get('/login' ,(req:Request ,res:Response) => {
    res.status(200).send({
        message: 'DAV Network Node',
      });
});

routerAuth.post('/login' , login);


export default routerAuth;