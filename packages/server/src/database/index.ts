import { createConnection } from 'typeorm'
import options from '@config/database'
import debug from '@shared/log/debug'

createConnection(options).then(() => {
  debug('Database connected with success')
})
