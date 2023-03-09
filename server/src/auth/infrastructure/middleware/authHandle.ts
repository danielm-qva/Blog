import { Response, Request, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import {JWT_SECRETE} from '../utils/JsonWebTokenGenertate' ;

export const isAutorizado = (req: Request, res: Response, next: NextFunction) => {  
    const headersAuthorization = req.headers["authorization"];
    const toke = String(headersAuthorization?.split(" ")[1]);
    const beare = String(headersAuthorization?.split(" ")[0]);
    if(!toke && beare !== "Bearer"){
      res.status(403).json({ mensaje: "No autorizado..." });
    } else{

      try {
         const veriToken = jwt.verify(toke , JWT_SECRETE);
            if(veriToken) next();
            else res.status(400).json({"mess": "Tokne no valido"});
      } catch (error) {
          res.status(500).json(error);
      }
    }
};