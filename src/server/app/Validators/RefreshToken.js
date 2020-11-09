'use strict'

class RefreshToken {
  get rules() {
    return {
      refresh_token: 'string|required'
    }
  }
}

module.exports = RefreshToken
