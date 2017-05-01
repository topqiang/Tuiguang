// pages/sou/sou.js
var app = getApp();
Page({
  data:{
    search:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
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
  },
  goresult:function(){
    if ( !/^\w{5}\d{5}$/.test(this.data.search) ) {
        wx.showToast({
          title: '请输入合法的防伪码！',
          icon: 'success',
          duration: 2000
        })
    }else{
         wx.navigateTo({
           url: '/pages/result/result?code_name='+this.data.search,
         });
    }
  },
  blurHandel:function(e){
    console.log(e.detail.value);
    this.setData({
      search:e.detail.value
    });
  }
})