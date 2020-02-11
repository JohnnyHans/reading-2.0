// pages/answer/answer.js
const app = getApp();
var url = app.globalData.url;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,//当前题目
    currentAnswer: 0,//用户当前所选择的答案
    correctAnswer: 0,//正确答案
    isCorrect: true,//是否正确
    hasAnswer: false,//判断当前题目是否答过
    total: 0,//总题数
    score: 0,//当前分数
    hasNext: true,
    time: null,
    second: 60,
    measrue:'本题计时',
    bookq: [
      { que: '邬理因为跳楼而失去了宝贵的生命，对吗？邬理因为跳楼而失去了宝贵的生命，对吗?邬理因为跳楼而失去了宝贵的生命，对吗?', optiona: '对', optionb: '错', optionc: '好', optiond: '坏' },
      { que: 'Are you a bad guy who has been called ashole?', optiona: 'right', optionb: 'wrong', optionc: 'good', optiond: 'bad' }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bookId: options.bookId,
      type: options.type
    })
    this.getQuesion();
    this.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.questionEnd();
  },


  getUserInfo: function () {
    var that = this;
    wx.request({
      url: url + 'api/user/getUserInfo',
      data: {
        openId: app.getOpenId()
      },
      success: function (res) {
        that.setData({
          user: res.data
        })
      }
    })
  },

  //开始定时器
  questionStart: function () {
    var that = this;
    this.setData({
      myTime: setInterval(function () {
        if (this.data.second > 0) {
          this.setData({
            second: this.data.second - 1
          })
        } else {
          this.questionEnd();
          wx.showToast({
            title: '时间到了哦！',
            duration: 1000,
            icon: "none"
          })
          wx.showLoading({
            title: '提交中...',
          })
          wx.request({
            url: url + 'api/question/answer',
            data: {
              uId: app.getOpenId(),
              qId: this.data.questionList[this.data.current].id,
              answer: 0
            },
            success: function (res) {
              wx.hideLoading();
              if (res.data.success) {
                that.setData({
                  hasNext: res.data.hasNext,
                  isCorrect: res.data.isCorrect,
                  score: res.data.score,
                  correctAnswer: res.data.correctAnswer,
                  hasAnswer: true
                })
                if (!res.data.hasNext) {
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '../score/score?type=' + that.data.type + "&bookId=" + that.data.bookId + "&score=" + that.data.score,
                    })
                  }, 1000)
                }
              }
            },
            fail: function () {
              wx.hideLoading()
            }
          })
        }
      }.bind(this), 1000)
    })
  },

  //结束定时器
  questionEnd: function () {
    clearInterval(this.data.myTime);
  },

  //获取题目列表
  getQuesion: function () {
    var that = this;
    // wx.showLoading({
    //   title: '加载中...',
    // })

    wx.request({
      url: url + 'api/question/getListByCate',
      data: {
        uId: app.getOpenId(),
        bookId: this.data.bookId,
        type: this.data.type
      },
      success: function (res) {
        wx.hideLoading();
        if (res.data.success) {
          that.setData({
            questionList: res.data.questionList,
            total: res.data.questionList.length
          })
          that.questionStart();
        }
      },
      fail: function () {
        wx.hideLoading()
      }
    })
  },

  //答题
  answer: function (e) {
    var that = this;

    // wx.showLoading({
    //   title: '提交中...',
    // })

    //停止计时
    this.questionEnd();

    if (this.data.hasAnswer) {
      wx.showToast({
        title: '你已经答过了呦!',
        duration: 1000,
        icon: "none"
      })
    } else {
      this.setData({
        currentAnswer: e.currentTarget.dataset.id
      })
      wx.request({
        url: url + 'api/question/answer',
        data: {
          uId: app.getOpenId(),
          qId: this.data.questionList[this.data.current].id,
          answer: e.currentTarget.dataset.id
        },
        success: function (res) {
          wx.hideLoading();
          if (res.data.success) {
            that.setData({
              hasNext: res.data.hasNext,
              isCorrect: res.data.isCorrect,
              score: res.data.score,
              correctAnswer: res.data.correctAnswer,
              hasAnswer: true
            })
            if (!res.data.hasNext) {
              // console.log(that.data)
              setTimeout(function () {
                wx.redirectTo({
                  url: ''
                })
              }, 1000)
            }
          }
        },
        fail: function () {
          wx.hideLoading()
        }
      })
    }
  },

  //下一题
  next: function () {
    wx.redirectTo({
      url: '/pages/answerdone/answerdone'//跳转至“答题结束”页面未能实现，待找出问题
    })
    //以下为原来的代码片段
    // if (this.data.hasAnswer) {
    //   this.setData({
    //     current: this.data.current + 1,
    //     hasAnswer: false,
    //     currentAnswer: 0,
    //     correctAnswer: 0,
    //     isCorrect: true,
    //     second: 60
    //   })
    //   this.questionStart();
    // } else {
    //   wx.showToast({
    //     title: '请先回答此题！',
    //     duration: 1000,
    //     icon: "none"
    //   })
    // } 
  }
})