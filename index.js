

const app = require('./app');

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(server.http)
})