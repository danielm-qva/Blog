import { Response , Request } from "express";

export const login = (req: Request , res: Response) => {
       const {email , password } = req.body;
       res.status(200).json({email , password});
}