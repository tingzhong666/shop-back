const router = require('express').Router()

// 商品列表
router.get('/shop', (req, res) => {
  res.json({
    code: 0,
    data: {
      total: 2,
      list: [
        {
          id: 41345,
          img: 'http://static.yoshop.xany6.com/2018071718294208f086786.jpg',
          title: '荣耀 V10全网通 标配版 4GB+64GB 魅丽红 移动联通电信4G全面屏手机 双卡双待aaaaaaaa',
          tab: '手机-华为',
          volume: 445,
          status: '上架',
          time: 1561858695023
        },
        {
          id: 41245,
          img: 'http://static.yoshop.xany6.com/20180717172606d9aee7835.jpg',
          title: '华为 HUAWEI nova 3全面屏高清四摄游戏手机 6GB+128GB 浅艾蓝限量款 全网通移动联通电信4G手机 双卡双待',
          tab: '手机-华为',
          volume: 415,
          status: '上架',
          time: 1561858695023
        }
      ]
    },
    msg: ''
  })
})

module.exports = router
