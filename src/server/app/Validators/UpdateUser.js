'use strict'

class UpdateUser {
  get sanitizationRules() {
    return {
      email: 'normalize_email',
      birth_date: 'to_date'
    }
  }

  get rules() {
    const userEmail = this.ctx.auth.user.email

    return {
      first_name: 'string|max:96',
      last_name: 'string|max:96',
      email: `email|max:96|unique:users,email,${userEmail}`,
      password: 'min:6|confirmed|required_if:old_password',
      birth_date: 'date'
    }
  }
}

module.exports = UpdateUser
