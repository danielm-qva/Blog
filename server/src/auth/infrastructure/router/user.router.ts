import { Router } from "express";
import UserCaseUse from "../../application/AuthCaseUse";
import {ControllerUser}  from "../controller/user.controller";
import { SqlPostgresRepo } from "../repository/SqlPostgresRepository";


const userRouter = Router();
const caseUse = new UserCaseUse(new SqlPostgresRepo());
const controlleruser = new ControllerUser(caseUse) ;


userRouter.get('/user' , controlleruser.findAllUser);
userRouter.post('/user' , controlleruser.createUser);
userRouter.get('/user/:id' , controlleruser.findOndeUser);
userRouter.put('/user/:id', controlleruser.updateUser);
userRouter.delete('/user/:id' , controlleruser.deleteUser);

export default userRouter;