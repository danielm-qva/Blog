import { Router } from "express";
import UserCaseUse from "../../application/AuthCaseUse";
import {ControllerUser}  from "../controller/user.controller";
import { isAutorizado } from "../middleware/authHandle";
import { SqlPostgresRepo } from "../repository/SqlPostgresRepository";


const userRouter = Router();
const caseUse = new UserCaseUse(new SqlPostgresRepo());
const controlleruser = new ControllerUser(caseUse) ;


userRouter.get('/user' ,isAutorizado, controlleruser.findAllUser);
userRouter.get('/user/:id' ,isAutorizado ,controlleruser.findOndeUser);
userRouter.put('/user/:id', isAutorizado ,controlleruser.updateUser);
userRouter.delete('/user/:id',isAutorizado , controlleruser.deleteUser);

//login 
userRouter.post('/login' , controlleruser.loginUser);
userRouter.post('/register' , controlleruser.createUser);

export default userRouter;