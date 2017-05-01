//logs.js
var app = getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    imgs:[
      "https://xcx.txunda.com/Public/lunbo/cha1.jpg",      
      "https://xcx.txunda.com/Public/lunbo/cha2.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha3.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha4.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha5.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha6.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha7.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha8.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha9.jpg",
      "https://xcx.txunda.com/Public/lunbo/cha10.jpg",
      "https://admin.lypuer.com/Public/xcx/t01.jpg",
      "https://admin.lypuer.com/Public/xcx/t02.jpg",
      "https://admin.lypuer.com/Public/xcx/t03.jpg",
      "https://admin.lypuer.com/Public/xcx/t04.jpg",
      "https://admin.lypuer.com/Public/xcx/t05.jpg",
      "https://admin.lypuer.com/Public/xcx/t06.jpg",
      "https://admin.lypuer.com/Public/xcx/t07.jpg",
      "https://admin.lypuer.com/Public/xcx/t08.jpg",
      "https://admin.lypuer.com/Public/xcx/t09.jpg",
      "https://admin.lypuer.com/Public/xcx/t10.jpg",
      "https://admin.lypuer.com/Public/xcx/t11.jpg"
    ],
    text:"茶化石是一种高品质的普洱茶古树熟茶，是传统工艺和现代工艺的完美结合，因其原料选用西双版纳勐海古树茶区百年以上树龄春茶芽叶，工艺流程复杂，成品数量稀少，外形又酷似经历千万年风霜雨雪的小化石，故名茶化石。"
  },
  onLoad: function ( options ) {
    
  },
  onShow:function(){
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
        transformOrigin: "50% 50%",
      });
    setInterval(function() {
      var  y = -this.data.Y;
      animation.translateY(y).step()
      this.setData({
        animationData:animation.export(),
        Y:y
      })
    }.bind(this), 1000);

  },
  goback: function(){
    wx.navigateBack({
      delta: 1
    });
  },
  onShareAppMessage: function () {
    return {
      title: '茶化石',
      desc: '“茶化石是龙园茶业专利产品，选用8年以上优质古树熟茶老茶经特殊切割工艺，反复筛选，精制而成，醇香，汤厚，棉滑滑，是普洱茶中的臻品。”',
      path: '/pages/logs/logs'
    }
  },
  gzgzh: function( res ){
    console.log( res );

    wx.showModal({
      title: '提示',
      content: '请点右上角分享给朋友吧！',
      showCancel: false
    })


  }
})
