// pages/feed/feed.js
const app = getApp();
var url = app.globalData.url;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedList:[
      { tit: '走进"新劳动教育" ︳鹿山脚下有一个“开心农场”，孩子们在这里寻找春天！', id: '1', url:'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA'},
      { tit: '孩子如何理解这个世界？这7本必读的世界科普百年经典给他们答案！' , id: '2',url:''}, 
      { tit: '龙岩紫金中学陈渝杭｜每一个优秀的孩子背后都有一个用心的家长' , id: '3',url:''},
      { tit: '关于编辑出版《我为祖国点赞》演讲•朗诵省级成果集服务基层深入开展主题教育的函', id: '4', url: ''},
      { tit: '第22届新时代好少年“我为祖国点赞”主题教育成果展示暨表彰仪式圆满结束', id: '5', url: ''},
      { tit: '福建省启动新时代好少年“美好生活 劳动创造”主题教育读书活动', id: '6', url: ''},
      { tit: '福建省教育系统关工委挂牌“福建师范大学实习基地” 推进“新时代好少年”主题教育系列活动', id: '7', url: ''},
      { tit: '【闽教关委[2019]28号】新时代好少年“美好生活 劳动创造”主题教育系列活动的通知', id: '8', url: ''},
      { tit: '【文件通知】闽教关委〔2019〕28号 PDF盖章版 新时代好少年“美好生活 劳动创造”主题教育系列活动的通知', id: '9', url: ''},
      { tit: '献礼祖国70华诞｜“我为祖国点赞”系列成果展播正式上线！', id: '10', url: ''},
      { tit: '我为祖国点赞｜全国优秀征文获奖名单公布啦！', id: '11', url: ''},
      ]
  },

  goWeb: function(d) {
    let id = d.currentTarget.dataset.id
    wx.navigateTo({
      url: '../web/web?url=' + d.currentTarget.dataset.url+'&id='+id
    })
    console.log({
      goWeb:id,url
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