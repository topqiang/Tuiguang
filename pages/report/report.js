// pages/report/report.js
var app = getApp();
const API = app.globalData.api;
Page({
  data:{
    "pic":"",
    "api":API,
    "motype":"小程序"
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
  blurhandel:function(e){
    var clum = e.target.dataset.clum;
    var value = e.detail.value;
    var json;
    if(clum == "name"){
      json = {"name":value};
    }
    if(clum == "tel"){
      json = {"tel":value};
    }
    if(clum == "remark"){
      json = {"remark":value};
    }
    this.setData(json);
  },
  putdata:function(){
    if(!this.data.name){
      wx.showModal({
        title: '提示',
        content: '姓名不能为空！',
        showCancel: false});
        return;
    }
    if(!this.data.tel || !/^1[3|4|5|8]{1}\d{9}$/.test(this.data.tel)){
      wx.showModal({
        title: '提示',
        content: '电话格式不合法！',
        showCancel: false});
        return;
    }
    if(!this.data.remark){
      wx.showModal({
        title: '提示',
        content: '购买渠道不能为空！',
        showCancel: false});
        return;
    }
    wx.request({
      url: API+'/index.php?s=/Home/Report/addReport',
      data: this.data,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type' : 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function(res){
        console.log(res);
        var resu = res.data;
        if(resu.flag == "success"){
          wx.showToast({
            title: '举办成功！请等待工作人员与您联系！',
            icon: 'success',
            duration: 2000,
            success:function(){
              wx.navigateBack({
                delta: 2,
              });
            }
          })
        }
      }
    })
  },
  choseimg:function(){
    wx.chooseImage({
      count: 1, 
      sizeType: ['compressed'], 
      sourceType: ['album', 'camera'], 
      success: function(res){
        // success
        var files = res.tempFilePaths;
        console.log(files);
        wx.showLoading({
          title: '图片上传中'
        });
        wx.uploadFile({
          url: API+'/index.php?s=/Home/Report/wxupload',
          filePath: files[0],
          name: 'pic',
          success: function(res){
            var data = res.data;
            if(typeof data != 'object')data = JSON.parse(data);
            console.log(data);
            this.setData({
              "pic":data.data.pic
            });
          }.bind(this),
          complete:function(){
            wx.hideLoading();
          }
        });
      }.bind(this)
    })
  },
  onUnload:function(){
    // 页面关闭
  }
})