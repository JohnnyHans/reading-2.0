// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:'123456',
    savedImgUrl: '',
    hidden: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
  },

  headInfo() {
    
  },

  changeNum:function(){
    this.data.num = 123456789
    this.setDate({
    num:this.data.num
    })
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  goBind: function(){
    wx.navigateTo({
      url: '/pages/bind/bind',
    })
  },

  goHelp: function(){
    wx.navigateTo({
      url: '/pages/help/help',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function (res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })
  }, 

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  
  promisify: api => {
    return (options, ...params) => {
      return new Promise((resolve, reject) => {
        const extras = {
          success: resolve,
          fail: reject
        }
        api({ ...options, ...extras }, ...params)
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我在「悦读王者」参加竞赛，你也来吧！',
      path: '/pages/index/index'
    }
  }
})