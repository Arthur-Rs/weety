import { Router } from 'express'
import UserRoutes from '@modules/user/http/routes/UserRoutes'

const routes = Router()

routes.use('/user', UserRoutes)

export default routes