// pages/companylist/companylist.js
var app = getApp();
const API = app.globalData.api;
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.cid);
    wx.request({
      url: API+"/index.php?s=/Home/Company/wxcompany/",
      method: 'GET',
      data: {"id":options.cid,"motype":"小程序"},
      success: function(res){
        // success
        var res = res.data;
        console.log(res);
        if(res.flag == "success"){
          wx.setStorage({
            key: 'latlng',
            data: {"lat":res.data.lat,"lng":res.data.lnt}
          });
          var city = wx.getStorageSync('city');
          if(res.data.provance.indexOf(city) != -1 || city.indexOf(res.data.provance) != -1){
            res.city = true;
          }
        }
        this.setData(res);
      }.bind(this)
    })
  },
  showadd:function(){
    var address = wx.getStorageSync('latlng');//数据库存储的位置
    console.log(address);
     wx.openLocation({
      latitude: Number(address.lat),
      longitude: Number(address.lng),
      name:this.data.data.name,
      address:this.data.data.address,
      scale: 28
    });
    //wx.redirectTo({url: '/pages/address/address'})
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