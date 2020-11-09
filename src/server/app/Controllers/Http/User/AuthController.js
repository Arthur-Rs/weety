'use strict'

const User = use('App/Models/User')

class AuthController {
  async store({ request, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const tokens = await auth.withRefreshToken().attempt(email, password, true)

    const user = await User.findBy('email', email)

    return { user, tokens }
  }

  async update({ request, auth }) {
    const refresh_token = request.input('refresh_token')

    const token = await auth.generateForRefreshToken(refresh_token, true)

    return token
  }
}

module.exports = AuthController
