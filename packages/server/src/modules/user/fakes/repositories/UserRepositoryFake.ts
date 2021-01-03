import UserRepositoryModel from '@modules/user/models/repositories/UserRepositoryModel'
import UserModel from "@modules/user/models/entities/UserModel";
import { v4 } from 'uuid';
import User from '@modules/user/entities/User';

class UserRepositoryFake implements UserRepositoryModel {
  database: User[];

  constructor() {
    this.database = [];
  }

  public async getById(id: string): Promise<User | undefined> {
    const user = this.database.find(user => user.id === id)

    return user
  }

  public async create(data: UserModel): Promise<User> {
    const userObject = new User()
    const user = Object.assign(userObject, data)
    user.id = v4()

    this.database.push(user)

    return user
  }

  public async update(id: string, data: UserModel): Promise<User> {
    const user = this.database.find(user => user.id === id)
    const userIdex = this.database.findIndex(user => user.id === id)
    const userUpdated = Object.assign(user, data)

    this.database[userIdex] = userUpdated    

    return userUpdated
  }
}

export default UserRepositoryFake