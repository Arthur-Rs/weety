'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('first_name').notNullable()
      table.string('last_name')
      table.string('biography')
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.boolean('confirmed_email').defaultTo(false)
      table.timestamp('birth_date').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
