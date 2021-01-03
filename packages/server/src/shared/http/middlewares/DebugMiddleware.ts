import { Request, Response, NextFunction } from 'express'
import Debug from 'debug'

const DebugMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const debug = Debug("weety:request") 
  const { url, method } = req

  debug(`New request on route "${url}" with method "${method}"`)

  next()
}

export default DebugMiddleware