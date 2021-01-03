import { Router } from 'express'
import UserController from '../controller/UserController'

const routes = Router()

routes.post('/', UserController.store)

export default routes