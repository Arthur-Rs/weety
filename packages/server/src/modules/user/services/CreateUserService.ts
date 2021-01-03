import User from '../entities/User';
import UserModel from '../models/entities/UserModel';
import UserRepository from '../models/repositories/UserRepositoryModel';

import { injectable, inject } from 'tsyringe'
import HashModel from '../provider/hash/model';

import { differenceInYears } from 'date-fns'
import AppError from '@shared/errors/AppError';

@injectable()
class CreateUserService{
  constructor(
    @inject('UserRepository') 
    private userRepository: UserRepository,

    @inject('Hash') 
    private hash: HashModel
  ) {}

  async execute(data: UserModel): Promise<User> {
    const user = await this.userRepository.create(data);

    if (differenceInYears(user.birth_date, new Date()) < 13) {
      throw new AppError('Invalid age, must be older than 13 years', 400)
    }

    const passwordEncrypted = await this.hash.hash(user.password);

    user.password = passwordEncrypted

    return user
  }
}

export default CreateUserService