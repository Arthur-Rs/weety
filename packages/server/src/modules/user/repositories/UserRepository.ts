import { DeepPartial, getRepository, Repository } from "typeorm";

import UserRepositoryModel from '../models/repositories/UserRepositoryModel'
import User from "../entities/User";

import { v4 as uuidv4 } from 'uuid'

class UserRepository implements UserRepositoryModel {
  repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)
  }

  public async getById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id)
    return user
  }

  public async create(data: DeepPartial<User>): Promise<User> {
    const user = this.repository.create(data)
    user.id = uuidv4()
    await this.repository.save(user)

    return user
  }

  public async update(id: string, data: DeepPartial<User>): Promise<User> {
    const user = await this.repository.findOne(id)
    const user_updated = Object.assign(user, data)
    await this.repository.save(user_updated)

    return user_updated
  }
}

export default UserRepository