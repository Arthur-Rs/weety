'use strict'

const User = use('App/Models/User')

const Hash = use('Hash')

class UserController {
  async store({ request }) {
    const data = request.only([
      'first_name',
      'last_name',
      'email',
      'password',
      'birth_date'
    ])

    const user = await User.create(data)

    return user
  }

  async update({ request, auth }) {
    const data = request.only([
      'first_name',
      'last_name',
      'biography',
      'email',
      'password',
      'birth_date'
    ])

    auth.user.merge(data)

    await auth.user.save()

    return auth.user
  }

  async destroy({ request, response, auth }) {
    const password = request.input('password')

    if (!(await Hash.verify(password, auth.user.password))) {
      return response.status(401).send({ error: 'error' })
    }

    await auth.user.delete()
  }
}

module.exports = UserController
