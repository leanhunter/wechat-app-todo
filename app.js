//app.js
const {Provider} = require('./libs/wechat-redux.js');
const configureStore = require('./configureStore.js');

App(Provider(configureStore())({
  onLaunch: function (options) {
    console.log("onLaunch",options.scene);
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  onShow: function (options) {
    console.log("onLaunch",options.scene)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
                console.log('wx.login',res);
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null
  }
}))