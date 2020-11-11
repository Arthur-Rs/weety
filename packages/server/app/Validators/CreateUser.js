'use strict'

class CreateUser {
  get sanitizationRules() {
    return {
      email: 'normalize_email',
      birth_date: 'to_date'
    }
  }

  get rules() {
    return {
      first_name: 'string|required|max:96',
      last_name: 'string|max:96',
      email: 'email|required|max:96|unique:users,email',
      password: 'string|required|confirmed',
      birth_date: 'date|required'
    }
  }
}

module.exports = CreateUser
