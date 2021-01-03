import { container } from 'tsyringe'

import UserRepository from '../repositories/UserRepository'
import UserRepositoryModel from '../models/repositories/UserRepositoryModel'

import HashModel from '../provider/hash/model'
import HashBcrypt from '../provider/hash/implementations/bcrypt'

container.registerSingleton<UserRepositoryModel>(
  'UserRepository',
  UserRepository
)

container.registerSingleton<HashModel>(
  'Hash',
  HashBcrypt
)