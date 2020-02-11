// pages/leaderboard/leaderboard.js
const app = getApp();
var url = app.globalData.url;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leadership:[
      { num: '1', icon: '', nick: 'Newton', score: '167890' },
      { num: '2', icon: '', nick: 'Newton', score: '161234' },
      { num: '3', icon: '', nick: 'Newton', score: '137590' },
      { num: '4', icon: '', nick: 'Newton', score: '120830' },
      { num: '5', icon: '', nick: 'Newton', score: '100945' },
      { num: '6', icon: '', nick: 'Newton', score: '120830' },
      { num: '7', icon: '', nick: 'Newton', score: '120830' },
      { num: '8', icon: '', nick: 'Newton', score: '120830' },
      { num: '9', icon: '', nick: 'Newton', score: '120830' },
      { num: '10', icon: '', nick: 'Newton', score: '120830' },
      { num: '11', icon: '', nick: 'Newton', score: '120830' },
      { num: '12', icon: '', nick: 'Newton', score: '120830' },
      { num: '13', icon: '', nick: 'Newton', score: '120830' }
      ],
      
      // count:'1234567',
      winWidth: 0,
      winHeight: 0,
      // tab切换
      currentTab: 0,
      province: '',
      city: '',
      type: 0,
      pageNo:1,
      pageSize:20,
      pageTotal:1,
      rankList: [],
      myInfo: { }
    },

    onLoad: function(options) {
    var that = this;
    that.setData({
      province: options.province,
      city: options.city
    });
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

    this.getMyRankInfo();
    this.getRank();
  },
  /**
   * 滑动切换tab
   */
  bindChange: function (e) {
    this.setData({
      pageNo: 1,
      pageTotal: 1,
      rankList: [],
      currentTab: e.detail.current
    });
    this.getMyRankInfo();
    this.getRank();
  },

  /**
   * 获取个人排名信息
   */
  getMyRankInfo: function () {
    var that = this;
    wx.request({
      url: url + 'api/user/getMyRankInfo',
      data: {
        type: that.data.currentTab + 1,
        openId: app.getOpenId()
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          myInfo: res.data
        })
      },
      fail: function () {

      }
    })
  },

  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  /**
   * 获取排行榜信息
   */
  getRank: function () {
    var that = this;
    wx.request({
      // url: url + 'api/user/getRank',
      data: {
        type: that.data.currentTab + 1,
        province: that.data.province,
        city: that.data.city,
        pageNo: that.data.pageNo,
        pageSize: that.data.pageSize
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.success) {
          that.setData({
            pageTotal: (res.data.total % that.data.pageSize == 0) ? (res.data.total / that.data.pageSize) : parseInt(res.data.total / that.data.pageSize + 1),
            rankList: that.data.rankList.concat(res.data.dataList)
          })
        }
      },
      fail: function () {

      }
    })
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      pageNo: 1,
      pageTotal: 1,
      rankList: []
    })
    this.getRank();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  loadMore: function () {
    if (this.data.pageTotal > this.data.pageNo) {
      this.setData({
        pageNo: this.data.pageNo + 1
      })
      this.getRank();
    }
  }
})