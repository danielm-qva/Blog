import { Request, Response } from "express";
import UserCaseUse from "../../application/AuthCaseUse";
import User from "../../domain/user.model";

import { validate } from 'class-validator';
import { JsonWebTokenGenerate } from "../utils/JsonWebTokenGenertate";

import bycrypt from 'bcrypt';
 
export class ControllerUser {
  constructor(private usecase: UserCaseUse) {}

  findAllUser = (req: Request, res: Response) => {
    this.usecase.findAllUser().then((list) => {
      return res.status(200).json(list);
    });
  };

  findOndeUser = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      this.usecase
        .findAUserById(-id)
        .then((item) => {
          return res.status(200).json(item);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  createUser = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;

    try {
      const user = new User(email, name, password);
      const error = await validate(user);
        if(error.length > 0) {
           return res.status(404).json(error);
        }
        else {
          this.usecase
          .createUser(user)
          .then((item) => {
            return res.status(200).json(item);
          })
          .catch((error) => {
            return res.status(404).json(error);
          });
        }
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  deleteUser = (req: Request, res: Response) => {
    const {id} = req.params;
    try {
      this.usecase
        .UserDelete(parseInt(id))
        .then((itme: any) => {
            if(itme.affected!= 0){  
              return res.status(200).json(itme);
            }
             else {
                 return res.status(404).json("NOT FOUND");
             }
        })
        .catch((error) => {
          return res.status(404).json(error);
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      this.usecase
        .updateUser(parseInt(id), req.body)
        .then((item) => {
          return res.status(203).json(item);
        })
        .catch((error) => {
          return res.status(404).json(error);
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  loginUser = (req: Request , res: Response) => {
        const {email , password} = req.body ;
        try {
          this.usecase.loginUser(email).then((ans) => {
               if(ans !== null ) {
                bycrypt.compare(password , ans.password).then((ass) => {
                   if(ass){
                     const jsonwebtoken = new JsonWebTokenGenerate(ans.email, ans.name);
                      const {email , id , name} = ans;
                     return res.status(200).json({"toke": jsonwebtoken.GenereateToken() , 'user': {email , id , name} });
                   }
                   else {
                    res.status(404).json({'mensg' : "Ha ocurrido un Error 😢"});
                   }
                })
              }
              else {
                res.status(404).json({'mensg' : "User not fount 😢"});
              }
              }).catch(error => {
                return res.status(404).json(error);
              })
          } catch (error) {
             return res.status(500).json(error);
          }    
  }
}
