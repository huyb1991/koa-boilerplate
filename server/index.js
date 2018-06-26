const Koa = require('koa'),
      serve = require('koa-static'),
      cors = require('koa-cors'),
      BodyParse = require('koa-bodyparser'),
      mongoose = require('mongoose')

// ==== Configuration ==== //
const config = require('./src/config'),
      app = new Koa()

// CORS: Always enable on production
if (process.env.NODE_ENV === 'production') {
  app.use(cors(config.CORS));
}

// Set up Mongoose
mongoose.connect(config.DB_URL);
mongoose.Promise = global.Promise;

// Middlewares
app.use(BodyParse())
if (process.env.NODE_ENV !== 'production') {
  const logger = require('koa-logger')

  app.use(logger())
}

// Serve static files
app.use(serve('./public'))

// Routes
require('./src/routes')(app)

app.listen(3000)