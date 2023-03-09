import { UserRepository } from "../domain/ManagerRepository";
import User from "../domain/user.model";

export class UserCaseUse {
  constructor(private readonly userRepo: UserRepository) { }

  public async createUser({ email, name, password }: { email: string, name: string, password: string }) {
    const userValue = new User(email, name, password);
    return await this.userRepo.createUser(userValue);
  }

  public async findAllUser() {
    return await this.userRepo.findAllUser();
  }

  async findAUserById(_id: number) {
    return await this.userRepo.findAUserById(_id);
  }

  async UserDelete(id: number) {
    return await this.userRepo.deleteUser(id);
  }

  async updateUser(id: number, user: User) {
    return await this.userRepo.updateUser(id, user);
  }

  async loginUser(email: string ){
     return await this.userRepo.loginUser(email);
  }
}


export default UserCaseUse;