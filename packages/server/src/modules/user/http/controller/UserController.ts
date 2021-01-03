import CreateUserService from '@modules/user/services/CreateUserService'
import { classToClass } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class UserController {
  async store(req: Request, res: Response) {
    const data = req.body
   
    const createUserService = container.resolve(CreateUserService)
    const user = await createUserService.execute(data)
    const user_serialized = classToClass(user)

    return res.status(201).send(user_serialized)
  }
}

export default new UserController()