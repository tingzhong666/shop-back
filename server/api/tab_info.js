const router = require('express').Router()

// 某个分类信息
router.get('/tab_info', (req, res) => {
  res.json({
    code: 0,
    data: {
      id: 1,
      label: '手机',
      time: 1561617649057,
      parentId: 0,
      img: 'https://mirror-gold-cdn.xitu.io/16941d0d3b03739ca4f?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1'
    },
    msg: ''
  })
})

module.exports = router
