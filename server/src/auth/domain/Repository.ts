import AppDataSource from "../../db/data-source";
import User from "./user.model";

const repositoryUser = AppDataSource.getRepository(User);

export default repositoryUser;