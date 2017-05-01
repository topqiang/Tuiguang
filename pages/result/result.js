// pages/result/result.js
var app = getApp();
const API = app.globalData.api;
Page({
  data:{
    "code_name":"",
    "api":API,
    "name":"茶化石"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.code_name);
    this.setData({
      "code_name" : options.code_name
    });
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: API+"/index.php?s=/Home/Qcode/wxfindcode/",
      data: {"code_name":this.data.code_name,"motype":"小程序","name":this.data.name},
      method: 'GET',
      success: function(res){
        // success
        var res = res.data;
        console.log(res);
        wx.hideLoading();
        if(res.flag == "success"){
          wx.setStorage({
            key:"gsid",
            data:res.data.gsid
          });
          wx.setStorage({
            key:"gsname",
            data:res.data.name
          });
        }
        this.setData(res);
      }.bind(this)
    })
  },
  blurHandle:function(e){
    this.setData({
      "code_name" : e.detail.value
    });
  },
  findcode:function(){
    if ( !/^\w{5}\d{5}$/.test(this.data.code_name) ) {
        wx.showToast({
          title: '请输入合法的防伪码！',
          icon: 'success',
          duration: 2000
        })
    }else{
        wx.showLoading({
          title: '加载中',
        });
         wx.request({
          url: API+"/index.php?s=/Home/Qcode/wxfindcode/",
          data: {"code_name":this.data.code_name,"motype":"小程序","name":this.data.name},
          method: 'GET',
          success: function(res){
            // success
            wx.hideLoading();
            var res = res.data;
            console.log(res);
            if(res.flag == "success"){
              wx.setStorage({
                  key:"gsid",
                  data:res.data.gsid
                });
                wx.setStorage({
                  key:"gsname",
                  data:res.data.name
                });
            }
            this.setData(res);
          }.bind(this)
        })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})