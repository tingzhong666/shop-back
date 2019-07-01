const router = require('express').Router()

// 商品编辑  详情
router.get('/shop_details', (req, res) => {
  res.json({
    code: 0,
    data: {
      id: 41345,
      imgs: [{ name: 'a.jpg', url: 'http://static.yoshop.xany6.com/2018071718294208f086786.jpg' }],
      title: '荣耀 V10全网通 标配版 4GB+64GB 魅丽红 移动联通电信4G全面屏手机 双卡双待aaaaaaaa',
      tab: ['1', '102'],
      intro: '搭载麒麟1000 2019最新cpu，完爆苹果所有机型，爱国人士的首选！',
      volume: 445,
      time: 1561858695023,
      // 商品详情 一组图片
      shopImg: [
        {
          name: 'a.jpg',
          url: 'https://m.360buyimg.com/mobilecms/jfs/t21316/362/708863866/198848/a601a229/5b163f9dNcf3c1ccc.jpg.dpg'
        },
        {
          name: 'ab.jpg',
          url: 'https://m.360buyimg.com/mobilecms/jfs/t21820/26/749903628/203059/cc61fed2/5b163fdcN1b1c2b7b.jpg.dpg'
        },
        {
          name: 'ac.jpg',
          url: 'https://m.360buyimg.com/mobilecms/jfs/t20335/69/717452858/177561/c9cff73e/5b164007N3b28e6fb.jpg.dpg'
        },
        {
          name: 'ad.jpg',
          url: 'https://m.360buyimg.com/mobilecms/jfs/t22126/244/708329010/203765/cb443196/5b16408fNb1895483.jpg.dpg'
        },
        {
          name: 'ae.jpg',
          url: 'https://m.360buyimg.com/mobilecms/jfs/t23707/187/138773072/105293/a5b65aae/5b26263eN72718c40.jpg.dpg'
        },
        {
          name: 'af.jpg',
          url: 'https://m.360buyimg.com/mobilecms/jfs/t20326/333/743070368/155700/b83519de/5b16410aN476f1156.jpg.dpg'
        }
      ],
      freight: 1,
      status: 'up',
      swi: true,
      def: false,
      alone: 5.5,
      code: '',
      price: 1234,
      scribing: 1235,
      n: 999,
      weight: 0.12
    },
    msg: ''
  })
})

module.exports = router
