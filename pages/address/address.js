// pages/address/address.js
var app = getApp();
const API = app.globalData.api;
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var address = wx.getStorageSync('latlng');
    var curarr = [];
    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log(res);
        var centerlat = ((+res.latitude) + (+address.lat))/2;
        var centerlng = ((+res.longitude) + (+address.lng))/2;
        that.setData({
          "centerlat":centerlat,
          "centerlng":centerlng
        });
        wx.request({
          url: API+"/index.php?s=/Home/Address/wxaddress",
          data:{
            "fromlat" : res.latitude,
            "fromlng" : res.longitude,
            "tolat" : address.lat,
            "tolng" : address.lng,
            "motype":"小程序"
          },
          method: 'GET', 
          success: function(ress){
            // success
            var server = ress.data;
            if(server.flag == "success"){
              console.log(JSON.stringify(server.data));
              var steps = server.data.steps;
              var polyline = [];
              steps.map(function(item,index){
                if(item && item.length > 0){
                  item.map(function(step,index){
                    var path = step.path;
                    if(path){
                      var arr = path.split(";");
                      console.log(arr);
                      arr.map(function(point,index){
                        var pointarr = point.split(",");
                        if(pointarr.length == 2){
                          polyline.push({
                            longitude:pointarr[0],
                            latitude:pointarr[1]
                          });
                        }
                      });
                    }
                    if(step.vehicle_info && step.vehicle_info.detail && step.vehicle_info.detail.on_station){
                      curarr.push({"text":"到达"+step.vehicle_info.detail.on_station});
                    }
                    if(step.instructions){
                    curarr.push({"text":step.instructions});
                    }
                  })
                }
              });

            }
            console.log(polyline)
            that.setData({
              addarr : curarr,
              polyline:[{
                points:polyline,
                color:"#ff000088",
                width:5
              }]
            });
          }
        })
      }
    });
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