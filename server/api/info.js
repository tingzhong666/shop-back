const router = require('express').Router()

// 商户信息
router.get('/info', (req, res) => {
  res.json({
    code: 0,
    data: {
      // 商户头像
      img: 'https://mirror-gold-cdn.xitu.io/16941d0d3b03739ca4f?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1',
      // 商户名称
      name: 'admin',
      // 商户id
      id: 345345346,
      // 手机号
      phone: 1598888912,
      // 简介
      intro: '世界五百强商家之一',
      // 公告
      announcement: '今日5折优惠',
      // 发货地址
      address: '某某省某某市'
    },
    msg: ''
  })
})

module.exports = router
