const router = require('express').Router()

// 评价列表
router.get('/evaluate', (req, res) => {
  res.json({
    code: 0,
    data: {
      // 总条数
      total: 2,
      list: [
        {
          id: 12432,
          shopImg: 'http://static.yoshop.xany6.com/2018071718294208f086786.jpg',
          title: '荣耀 V10全网通 标配版 4GB+64GB 魅丽红 移动联通电信4G全面屏手机 双卡双待aaaaaaaaaaa',
          username: '呵呵sdf',
          n: '9.9',
          content: '简直受不了',
          img: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53jv8P1WnRLBfwS6pUjacEeOAJEALplJj1_6q95pieWHDKeFF',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53jv8P1WnRLBfwS6pUjacEeOAJEALplJj1_6q95pieWHDKeFF'
          ],
          time: 1561806413749
        },
        {
          id: 55223,
          shopImg: 'http://static.yoshop.xany6.com/2018071718294208f086786.jpg',
          title: '荣耀 V10全网通 标配版 4GB+64GB 魅丽红 移动联通电信4G全面屏手机 双卡双待aaaaaaaaaaa',
          username: '呵呵sdf',
          n: '9.9',
          content: '简直受不了',
          img: [],
          time: 1561806413749
        }
      ]
    },
    msg: ''
  })
})

module.exports = router
