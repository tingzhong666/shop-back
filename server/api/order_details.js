const router = require('express').Router()

// 订单详情
router.get('/order_details', (req, res) => {
  res.json({
    code: 0,
    data: {
      // 步骤
      step: 4, // 1 下单 2 付款 3 发货 4 收货 5 评价 6 完成
      // 订单号
      id: 34532453245,
      // 买家昵称
      name: '呵呵asd',
      // 买家用户id
      nameId: 2353,
      // 订单金额 总 + 运 实付
      moneyAll: '1234.00',
      freight: '20.00',
      // 后台改价
      backModify: '0.00',
      // 实付
      actual: '1234.00',
      // 支付方式
      payMethod: '微信支付',
      // 快递
      express: '圆通快递',
      // 交易状态
      // 付款状态
      payed: true,
      // 发货状态
      publish: true,
      // 收货状态
      accept: false,
      // 商品信息
      shop: [
        {
          img: 'http://static.yoshop.xany6.com/2018071718294208f086786.jpg',
          title: '荣耀 V10全网通 标配版 4GB+64GB 魅丽红 移动联通电信4G全面屏手机 双卡双待aaaaaaaaaaa',
          spec: '炫影蓝4+64G',
          // 单价
          price: '607.00',
          // 数量
          n: 1,
          // 重量
          weight: '0.138',
          // 编码
          code: '',
          // 总价
          allPrice: '607.00'
        },
        {
          img: 'http://static.yoshop.xany6.com/20180717175657d4f120465.jpg',
          title: 'Apple iPhone X (A1903) 64GB 深空灰色 移动联通4G手机',
          spec: '炫影蓝2+64G',
          price: '607.00',
          n: 1,
          weight: '0.138',
          code: '',
          allPrice: '607.00'
        }
      ],
      // 总计
      allPrice: '1234.00',
      // 买家留言
      msg: '',
      // 收货信息
      // 收货人
      acceptPeople: '张三',
      // 收货电话
      acceptPhone: 1309988203,
      // 收货地址
      acceptAddress: '某某省某某市某某区某某小区某某栋某某号'
    },
    msg: ''
  })
})

module.exports = router
