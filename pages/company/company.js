// pages/company/company.js
var app = getApp();
const API = app.globalData.api;
Page({
  data:{
    "api":API
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var provance = options.provance;
    var gsname = wx.getStorageSync('gsname');
    wx.request({
      url: API+"/index.php?s=/Home/Company/wxcompanylist",
      method: 'GET',
      data: {"provance":provance,"gsname":gsname,"motype":"小程序"},
      success: function(res){
        // success
        var res = res.data;
        console.log(res);
        this.setData(res);
      }.bind(this)
    })
  },
  gocomp:function(e){
    wx.redirectTo({
      url: '/pages/companylist/companylist?cid='+e.target.dataset.cid
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