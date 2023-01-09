
import * as fs from 'fs';
import { Response , Request } from "express";

export interface ResponseLogin {
       user: string ;
       status: boolean;
}

export const login = (req: Request , res: Response) => {
       var loginB: boolean = false; 
       const {nameuser , password } = req.body;
           var redM = JSON.parse(fs.readFileSync(__dirname + '/db.json', 'utf8'));
            redM.map( (res: any) => {
                if(res.user === nameuser && res.pass == password){
                     loginB = !loginB
                }
            })

         if(loginB){
              res.status(200).send({date: new Date() , login: true , mensaje: "Loing realizaon con exito..."})
         }
         else {
           res.status(500).send({date: new Date() , login: false , mensaje: "Login no ha sido exitos..."})
         }
}
