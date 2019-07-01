const router = require('express').Router()

// 退出登录
router.get('/logout', (req, res) => {
  res.setHeader('set-cookie', 'sessionid=rewqaqaqr;path=/;max-age=0;')
  res.json({
    code: 0,
    data: {},
    msg: ''
  })
})

module.exports = router
