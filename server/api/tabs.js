const router = require('express').Router()

// 分类
router.get('/tabs', (req, res) => {
  res.json({
    code: 0,
    data: [
      {
        id: 1,
        label: '手机',
        time: 1561617649057,
        child: [
          {
            id: 101,
            label: '小米',
            time: 1561617649057
          },
          {
            id: 102,
            label: '华为',
            time: 1561617649057
          }
        ]
      },
      {
        id: 2,
        label: '电脑',
        time: 1561617649057,
        child: [
          {
            id: 201,
            label: '华硕',
            time: 1561617649057
          }
        ]
      },
      {
        id: 3,
        label: '无人机',
        time: 1561617649057,
        child: []
      },
      {
        id: 4,
        label: '智能家居',
        time: 1561617649057,
        child: []
      },
      {
        id: 5,
        label: '手表',
        time: 1561617649057,
        child: []
      },
      {
        id: 6,
        label: '配件',
        time: 1561617649057,
        child: []
      }
    ],
    msg: ''
  })
})

module.exports = router
