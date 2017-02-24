//logs.js
var app = getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    videosrc:'https://xcx.txunda.com/Public/chs/sui.mp4',
    Y:10,
    imgs:[
      "https://xcx.txunda.com/Public/img/sui2.jpg",
      "https://xcx.txunda.com/Public/img/sui3.jpg",
      "https://xcx.txunda.com/Public/img/sui4.jpg",
      "https://xcx.txunda.com/Public/img/sui5.jpg",
      "https://xcx.txunda.com/Public/img/sui6.jpg",
      "https://xcx.txunda.com/Public/img/sui7.jpg",
      "https://xcx.txunda.com/Public/img/sui8.jpg"
    ],
    userimg:[]
  },
  onLoad: function () {
    this.videoContext = wx.createVideoContext('myVideo');
    app.getUserInfo(function(userInfo){
      wx.request({
        url: 'https://xcx.txunda.com/index.php/Index/putchs',
        data: {"name":userInfo.nickName,"imgsrc":userInfo.avatarUrl},
        method: 'POST',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          // success
          console.log( res );
          if(res.statusCode == 200){
            this.setData({"userimg":res.data.data});
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
  onHide:function(){
    this.videoContext.pause();
  },
  onShareAppMessage: function () {
    return {
      title: '碎银子',
      desc: '“碎银子是龙园茶业专利产品，选用8年以上优质古树熟茶老茶经特殊切割工艺，反复筛选，精制而成，醇香，汤厚，棉滑滑，是普洱茶中的臻品。”',
      path: '/pages/sui/sui'
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
