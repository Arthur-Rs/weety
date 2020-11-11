'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use('Env')

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { request, response }) {
    if (error.name === 'ValidationException') {
      const { field, message } = error.messages[0]

      return response.status(400).send({
        error: {
          code: 400,
          message: 'Bad Request',
          type: 'Validation Error',
          validation: {
            field,
            message
          }
        }
      })
    }

    if (
      (error.name === 'PasswordMisMatchException',
      error.name === 'UserNotFoundException')
    ) {
      return response.status(error.status).send({
        error: {
          code: 401,
          message: 'Unauthorized',
          type: 'Incorrect Credentials'
        }
      })
    }

    if (error.status === 500) {
      if (Env.get('NODE_ENV') === 'development') {
        return response.status(error.status).send(error.message)
      }

      return response.status(error.status).send({
        error: {
          code: 500,
          message: 'Internal Server Error'
        }
      })
    }
  }
}

module.exports = ExceptionHandler
