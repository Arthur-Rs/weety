import UserRepositoryModel from '../models/repositories/UserRepositoryModel'
import UserRepositoryFake from '../fakes/repositories/UserRepositoryFake'
import UserModel from '../models/entities/UserModel'

import HashFake from '../provider/hash/fakes'
import HashModel from '../provider/hash/model'

import CreateUserService from './CreateUserService'
import { subYears } from 'date-fns'
import AppError from '@shared/errors/AppError'

let hash: HashModel
let userRepository: UserRepositoryModel
let createUserService: CreateUserService

describe('Create User', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryFake()
    hash = new HashFake()

    createUserService = new CreateUserService(userRepository, hash)
  })

  it('should to be able create new user', async () => {
    const data: UserModel = {
      first_name: 'User',
      email: 'user@mail.com',
      password: '123456'
    }

    const user = await createUserService.execute(data)

    const checkUser = await userRepository.getById(user.id)
    
    expect(checkUser).not.toBeUndefined()
  })

  it('should to be able encrypt the user password', async () => {
    const data: UserModel = {
      first_name: 'User',
      email: 'user@mail.com',
      password: '123456'
    }

    const user = await createUserService.execute(data)
    
    const diference = user.password !== data.password 

    const compare = await hash.compare(data.password as string, user.password)

    expect(diference).toEqual(true)
    expect(compare).toEqual(true)
  })

  it('Should not be able to create the user if the user is under 13 years old', 
    async () => {
      const data: UserModel = {
        first_name: 'User',
        email: 'user@mail.com',
        password: '123456',
        birth_date: subYears(new Date(), 14) 
      }

      await expect(
        createUserService.execute(data)
      ).rejects.toBeInstanceOf(AppError)
    }
  )
})