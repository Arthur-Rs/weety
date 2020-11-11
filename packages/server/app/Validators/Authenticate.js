'use strict'

class Authenticate {
  get sanitizationRules() {
    return {
      email: 'normalize_email'
    }
  }

  get rules() {
    return {
      email: 'email|required',
      password: 'string|required'
    }
  }
}

module.exports = Authenticate
