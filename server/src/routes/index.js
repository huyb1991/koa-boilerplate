const userRouter = require('./user')

// This is root router.
// Can use middleware koa-compress
module.exports = app => {
  app.use(userRouter.routes())
  app.use(userRouter.allowedMethods())
}