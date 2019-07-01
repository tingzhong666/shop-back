const router = require('express').Router()

// 登录
router.post('/login', (req, res) => {
  const { username, password } = req.body
  let code = 0
  let data = {}
  let msg = ''

  if (username === 'admin' && password === 'admin') {
    res.setHeader('set-cookie', 'sessionid=rewqaqaqr;path=/;max-age=2222222')
  } else {
    code = 1
    msg = '账号密码错误'
  }

  res.json({
    code,
    data,
    msg
  })
})

module.exports = router
