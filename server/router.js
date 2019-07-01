const router = require('express').Router()
const fs = require('fs')
const path = require('path')

const apis = fs.readdirSync(path.join(__dirname, './api'), { withFileTypes: true })

apis.forEach(item => {
  if (item.isFile) {
    router.use('/', require('./api/' + item.name))
  }
})

module.exports = router
