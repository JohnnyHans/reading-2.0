//app.js
App({
  globalData: { //全局数据
     user:{}
  },
  onLaunch: function () {
    console.log("onLaunch");
    this.userLogin();
  },
 
  onShow(options) {

  },
  onHide() {

  },
  onError(msg) {

  },
  getOpenId: function () {
   
  },
  userLogin:function(){
    console.log("userLogin");
    var token = this.userToken();
    var app=this;
    console.log(token);
    if(token){
      //获取用户个人
      var url = "/MiniProgram/UserInfo";
      var data = null;
      var success = function (res) {
        console.log(res.data);
        if (res.data.Data.IsPerfect==false){
          app.userInfo();
        }
      };
      app.httpResult(url, data, success);
    }else{
      wx.login({
        success: res => {
          var url = "/MiniProgram/Login?code=" + res.code;
          var data = null;
          var success = function (res) {
            wx.setStorage({
              key: "token",
              data: res.data.Data
            });
            app.userLogin();
          };
          app.httpResult(url, data, success);
        }
      });
    }
  },
  userInfo: function () {
    var app = this;
    wx.getSetting({
      success(res) {
        //已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              var userinfo = res.userInfo;
              var url = "/MiniProgram/UserInfoUpdate";
              var data = userinfo;
              var success = function (res) {
                console.log(res.data.Data);
              }
              app.httpResult(url, data, success);
            }
          });
        }else{
          console.log("authorize");
          wx.authorize({
            scope:'scope.userInfo',
            success(){
              app.userInfo();
            }
          });
        }
      }
    })
  },
  userToken:function(){
    console.log("userToken");
    return wx.getStorageSync('token')
  },
  httpResult: function (url, data, success, fail){
    console.log("HttpResult");
    url = "http://localhost:2350" + url;
    wx.request({
      url: url, 
      data: data, 
      method:"POST", 
      header: {
        'content-type': 'application/json', // 默认值
        'token':this.userToken()
      }, 
      success(res){
        if (res.data){
          if (res.data.Code==200){
            success(res);
          }else{
            console.error(res.data.Msg);
          }
        }
      }
    });
  }
})