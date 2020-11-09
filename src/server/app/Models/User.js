'use strict'

const Model = use('Model')

const Hash = use('Hash')

const differenceInYears = require('date-fns/differenceInYears')
const parseISO = require('date-fns/parseISO')

class User extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden() {
    return ['password']
  }

  static get computed() {
    return ['full_name', 'age']
  }

  getFullName({ first_name, last_name }) {
    return `${first_name} ${last_name}`
  }

  getAge({ birth_date }) {
    const parsedDate = parseISO(birth_date)
    return differenceInYears(new Date(), parsedDate)
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
