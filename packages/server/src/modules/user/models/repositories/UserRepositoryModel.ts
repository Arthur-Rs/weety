import { DeepPartial } from "typeorm";
import User from "../../entities/User";

export default interface UserRepositoryModel {
  getById(id: string): Promise<User | undefined>
  create(data: DeepPartial<User>): Promise<User>
  update(id: string, data: DeepPartial<User>): Promise<User>
}