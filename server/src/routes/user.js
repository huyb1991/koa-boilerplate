// This is an example for route and MongoDB
const Router = require('koa-router'),
      User = require('../models/User')

const router = new Router()

router.get('/api/user', async (ctx, next) => {
  ctx.body = await User
    .find({})
    .exec()
    .then(users => {
      console.log('users: ', users)
      return users
    })
    .catch(err => console.log(err))
})

router.post('/api/user', async (ctx, next) => {
  // Creating a record in Test collection
  ctx.body = await User
    .create({ name: 'Chris' })
    .then(record => {
      console.log('record: ', record)
      return record
    })
    .catch(err => console.log('err: ', err))
})

module.exports = router