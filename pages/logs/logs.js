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
      "https://xcx.txunda.com/Public/lunbo/cha10.jpg"
    ],
    text:"茶化石是一种高品质的普洱茶古树熟茶，是传统工艺和现代工艺的完美结合，因其原料选用西双版纳勐海古树茶区百年以上树龄春茶芽叶，工艺流程复杂，成品数量稀少，外形又酷似经历千万年风霜雨雪的小化石，故名茶化石。"
  },
  onLoad: function ( options ) {
    switch(options.type){
      case "jin":
        this.setData({
          imgs:[
            "https://xcx.txunda.com/Public/lunbo/jin1.jpg",      
            "https://xcx.txunda.com/Public/lunbo/jin2.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin3.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin4.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin5.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin6.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin7.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin8.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin9.jpg",
            "https://xcx.txunda.com/Public/lunbo/jin10.jpg"
          ],
          text:"金不换是一种高品质的普洱茶古树熟茶，是传统工艺和现代工艺的完美结合，因其原料选用勐海古茶区百年以上树龄的春茶芽叶，工艺流程复杂，所以成品数量稀少。在古代茶马古道上就有黄金易得此茶难觅的传说，因其品质高、数量少，弥足珍贵故而得名金不换。"
        });
        wx.setNavigationBarTitle({
          title: '金不换'
        });
        break;
      case "sui":
        this.setData({
          imgs:[
            "https://xcx.txunda.com/Public/lunbo/sui1.jpg",      
            "https://xcx.txunda.com/Public/lunbo/sui2.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui3.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui4.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui5.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui6.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui7.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui8.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui9.jpg",
            "https://xcx.txunda.com/Public/lunbo/sui10.jpg"
          ],
          text:"碎银子是一种高品质的普洱茶古树熟茶，是传统工艺和现代工艺的完美结合，因其原料选用西双版纳古茶区百年以上树龄的春茶芽叶，工艺流程复杂，所以成品数量稀少。在古代茶马古道上可以代替银两作交易用，又因外形精致小巧酷似散碎银两，故名碎银子。"
        });
        wx.setNavigationBarTitle({
          title: '碎银子'
        });
        break;
    }
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
