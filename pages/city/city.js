// pages/city/city.js
var app = getApp();
const API = app.globalData.api;
var bmap = require('../../utils/bmap-wx.js'); 
Page({
  data:{
    "api":API,
    "city":""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var gsid = wx.getStorageSync('gsid');
    wx.request({
      url: API+"/index.php?s=/Home/Index/wxcity/",
      method: 'GET',
      data: {"gsid":gsid,"motype":"小程序"},
      success: function(res){
        // success
        var res = res.data;
        console.log(res);
        this.setData(res);
      }.bind(this)
    });
    
    var that = this; 
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({ 
            ak: 'oOrTiXvib3XegGIuld0SkW282jP9KkUG'
        }); 
        var fail = function(data) { 
            console.log(data) 
        }; 
        var success = function(data) { 
            var ci = data.currentWeather[0]['currentCity'];
            if (ci.indexOf('市') != -1 ) ci = ci.substring(0,ci.length-1);
            wx.setStorage({key: 'city',data: ci});
            that.setData({
              city:ci
            });
        } 
        // 发起weather请求 
        BMap.weather({ 
            fail: fail, 
            success: success 
        }); 
  },
  gocomp:function(e){
    var provance = e.target.dataset.pro;
    wx.redirectTo({
      url: '/pages/company/company?provance='+provance
    })
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