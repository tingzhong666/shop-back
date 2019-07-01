const router = require('express').Router()

// 验证
router.get('/check', (req, res) => {
  const sessionid = req.cookies.sessionid
  let code = 0
  let data = {}
  let msg = ''

  if (sessionid !== 'rewqaqaqr') {
    code = 1
    msg = 'cookie无效，未登录'
  }

  res.json({
    code,
    data,
    msg
  })
})

module.exports = router
