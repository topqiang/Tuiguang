//logs.js
var app = getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    videosrc:'https://xcx.txunda.com/Public/chs/108.mp4',
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
      
    ]
  },
  onLoad: function () {
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      wx.request({
        url: 'https://xcx.txunda.com/index.php/Index/putchs',
        data: {"name":userInfo.nickName,"imgsrc":userInfo.avatarUrl},
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          // success
          console.log( res );
          if(res.statusCode == 200){
            var userimg = res.data.data;
            this.setData({"userimg":userimg})
          }
        }.bind(this)
      })
    }.bind(this));
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
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })


  }
})
