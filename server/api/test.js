const router = require('express').Router()

router.get('/test', (req, res) => {
  res.json({
    code: 0,
    data: {},
    msg: '测试'
  })
})

module.exports = router
