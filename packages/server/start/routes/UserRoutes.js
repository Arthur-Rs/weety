'use strict'

const Route = use('Route')

Route.post('/user', 'User/UserController.store').validator(['CreateUser'])
Route.post('/auth', 'User/AuthController.store').validator(['Authenticate'])
Route.patch('/auth/refresh', 'User/AuthController.update').validator([
  'RefreshToken'
])

Route.group(() => {
  Route.put('/user', 'User/UserController.update').validator(['UpdateUser'])
  Route.delete('/user', 'User/UserController.destroy')
}).middleware(['auth'])
