const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cookieParser())
  .use('/api', router)
  .use('/public', express.static('./dist/public'))
  .use('/', (req, res) => {
    fs.readFile('./dist/index.html', 'utf8', (err, data) => {
      if (err) throw err
      res.send(data)
    })
  })

app.listen(8888, () => console.log('port:8888 runing...'))
