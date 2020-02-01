const path = require('path')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 8000));

console.log(__dirname, 'app.js __dirname');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> Listening on port %s.', app.get('port'));
})
