module.exports = {
  DB_URL: process.env.DB_URL,
  CORS: {
    origin: ctx => {
      const requestOrigin = ctx.accept.headers.origin;

      if (!process.env.WHITELIST.includes(requestOrigin)) {
        return new Error(`${requestOrigin} is not allowed by CORS`);
      }
      return requestOrigin;
    }
  }
}
