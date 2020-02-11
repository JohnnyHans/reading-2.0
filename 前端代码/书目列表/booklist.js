// pages/booklist/booklist.js
const name ='join'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {tit:'会飞的教室',bg:'',id:'134'},
      { tit: '西游记', bg: '', id: '131114' },
      { tit: '老人与海', bg: '', id: '1234' },
      { tit: '基督山伯爵', bg: '', id: '1834' },
      { tit: '水浒传', bg: '', id: '11134' },
      { tit: '红楼梦', bg: '', id: '188734' },
      { tit: '三国演义', bg: '', id: '183400' }
    ],
    click: '点击查看>>'
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

  },

  /**
   * 获取搜索输入内容
   */
  searchChange: function (d) {
    this.setData({
      key: d.detail.value
    })
  },

  /**
   * 搜索
   */
  goSearch: function () {
    if (this.data.key == '') {
      wx.showToast({
        title: '请输入要搜索的书目',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: '../book-list/book-list?type=2&key=' + this.data.key + '&questionType=1&contest=0',
      })
    }
  },

  goAnswer: function(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/answer/answer?id='+id +'&name=fff',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})