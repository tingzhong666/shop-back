const router = require('express').Router()

// 订单列表
router.get('/order_list', (req, res) => {
  res.json({
    code: 0,
    data: {
      // 总条数,
      total: 1,
      list: [
        {
          // 时间
          time: 1561778453364,
          // 订单号
          orderN: 78316486238639,
          // 商品
          shop: [
            {
              img: 'http://static.yoshop.xany6.com/2018071718294208f086786.jpg',
              title: '荣耀 V10全网通 标配版 4GB+64GB 魅丽红 移动联通电信4G全面屏手机 双卡双待aaaaaaaaaaa',
              spec: '炫影蓝4+64G',
              price: '607.00',
              n: 1
            },
            {
              img: 'http://static.yoshop.xany6.com/20180717175657d4f120465.jpg',
              title: 'Apple iPhone X (A1903) 64GB 深空灰色 移动联通4G手机',
              spec: '炫影蓝2+64G',
              price: '607.00',
              n: 1
            }
          ],
          // 实付款 含运费
          pay: '1234.00',
          // 运费
          freight: '20.00',
          // 买家
          name: '呵呵**哦',
          // 买家用户id
          nameId: 124523,
          // 支付方式
          payMethod: '微信支付',
          // 快递
          express: '圆通快递',
          // 付款状态
          payed: true,
          // 发货状态
          publish: true,
          // 收货状态
          accept: false
        }
      ]
    },
    msg: ''
  })
})

module.exports = router
