
// import {Request, Response} from 'express'
// import  userModels from '../models/user.models'

// export const registerUser = async (req: Request, res: Response) => {
//          const { name , last_name , emial , password } = req.body;     
//          const user = new userModels({name , last_name , emial , password})
//            const newUser = await user.save();
//             if(newUser){
//                 res.status(200).json(newUser);
//             }else{
//                 res.status(400).json({'mensaje': "Erross"});
//             }
// }