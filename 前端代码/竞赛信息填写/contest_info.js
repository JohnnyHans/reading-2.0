// pages/contest_info/contest_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['福建省', '福州市', '鼓楼区'],
    level: ['年级选择', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三', '16级', '17级', '18级', '19级'],
    classn: ['班级选择', '1班', '2班', '3班', '4班', '5班', '6班', '7班', '8班', '9班', '10班', '11班', '12班', '13班', '14班', '15班', '16班', '17班', '18班', '19班', '20班', '21班', '22班', '23班', '24班', '25班', '26班', '27班', '28班', '29班', '30班'],
    index: 0,
    range: 0,
  },

  goChoice: function(){
    wx.redirectTo({
      url: '/pages/contest_choice/contest_choice',
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindPickerChang: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      range: e.detail.value
    })
  },

  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
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
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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