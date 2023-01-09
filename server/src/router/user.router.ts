import { Router } from 'express';
import { registerUser } from '../controller/user.controller';

 const userrouter = Router();
 
 userrouter.post('/', registerUser);

 export default userrouter;

