import AppDataSource from "../../../db/data-source";
import { ManagerRepository, UserRepository } from "../../domain/ManagerRepository";
import User from "../../domain/user.model";


export class SqlPostgresRepo implements UserRepository {
  
   async createUser(user: User): Promise<any> {
        return await ManagerRepository.save(user); 
    }
    async findAUserById(_id: number): Promise<User | null> {
        return await ManagerRepository.findOneBy({id: _id});
    }
   async  findAllUser(): Promise<User[] | []> {
         return await ManagerRepository.find({relations : {
             post: true
         }});
    }
    async updateUser(id: number, user: Object): Promise<any> {
    return await ManagerRepository.update(id , user) ;        
    }

   async deleteUser(id: number): Promise<any> {
        return await ManagerRepository.delete({id: id});
   }  
} 