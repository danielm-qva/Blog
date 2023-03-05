
import AppDataSource from "../../db/data-source";
import User from "./user.model";

export interface UserRepository {
    createUser(user: User): Promise<null>;
    findAUserById(_id: number): Promise<User | null>;
    findAllUser(): Promise<User[] | []>;
    updateUser(id: number, user: User): Promise<User | null>;
    deleteUser(id: number): Promise<null>;
}


export const ManagerRepository = AppDataSource.getRepository(User);

export default UserRepository;