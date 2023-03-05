import { Response, Request, NextFunction, response } from "express";


export const isAutorizado = (req: Request, res: Response, next: NextFunction) => {  
    const headre = req.headers["login"];
    if(!headre){
      res.status(403).json({ mensaje: "No autorizado..." });
    } else
    next();
};