// pages/booktest/booktest.js
const name = 'bookname'

Page({

  data: {
    cateGory:[
      { bg: '', tit: '新课标小学段书目', last: '最近更新：《会飞的教室》10.12', id: '1', },
      { bg: '', tit: '新课标中学段书目', last: '最近更新：《会飞的教室》10.12', id: '2', },
      { bg: '', tit: '中华优秀传统文化书目', last: '最近更新：《会飞的教室》10.12', id: '3', },
      { bg: '', tit: '新教育实验推荐书目', last: '最近更新：《会飞的教室》10.12', id: '4', },
      { bg: '', tit: '其他书目', last: '最近更新：《会飞的教室》10.12', id: '5', }
    ],
    click:'立即测试'
  },

  goList: function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/booklist/booklist?id=' + id +'&name=premier'
    })
    console.log({
      goList: id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})