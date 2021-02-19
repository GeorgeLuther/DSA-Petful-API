const app = require('./modules/app/app')
const { PORT, DATABASE_URL } = require('./config')

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`)
})
