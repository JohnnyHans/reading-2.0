//index.js
//获取应用实例
const app = getApp()
var url = app.globalData.url;

Page({

  data: {
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    top_banner: [
      { img:'/resoures/icon_index/banner.png', url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' },
      { img: '/resoures/icon_index/banner2.png', url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' },
      { img: '/resoures/icon_index/banner2.png',url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' }
    ],

    feedlist: [
      { tit: '走进"新劳动教育" ︳鹿山脚下有一个“开心农场”，孩子们在这里寻找春天！', id: '1', url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' },
      { tit: '孩子如何理解这个世界？这7本必读的世界科普百年经典给他们答案！', id: '2', url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' },
      { tit: '龙岩紫金中学陈渝杭｜每一个优秀的孩子背后都有一个用心的家长', id: '3', url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' },
      { tit: '关于编辑出版《我为祖国点赞》演讲•朗诵省级成果集服务基层深入开展主题教育的函', id: '4', url: 'https://mp.weixin.qq.com/s/AWZfU79xBxEB7E-51POrBA' }
    ],
    feedmore:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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

  onShareAppMessage() {
    if (res.from === 'menu') {
      // 来自菜单转发
      console.log(res.target)
    }
    return {
      title: '悦读王者',
      path: 'pages/index/index'
    }
  },

  bannerClick: function (d) {
      wx.navigateTo({
        url: '../web/web?url=' + d.currentTarget.dataset.url,
      })
      console.log({
        bannerClick:url
      })
  },

  goBooktest: function () {
    wx.navigateTo({
      url: '/pages/booktest/booktest',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goContest: function () {
    wx.navigateTo({
      url: '/pages/contest/contest',
    })
  },

  goDianzan: function () {
    wx.navigateToMiniProgram({
      appId: 'wxaa7bfb371fe2c0c7',
      path: 'page/index/index?id=123',
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },

  newsClick: function(d){
    let id = d.currentTarget.dataset.id
    wx.navigateTo({
      url: '../web/web?url=' + d.currentTarget.dataset.url+ '&id='+ id
    })
    console.log({
      newsClick:url,
      newsClick:id
    })
  },

  goFeed: function () {
    wx.navigateTo({
      url: '/pages/feed/feed',
    })
  },

  /**
   * 获取搜索输入内容
   */
  searchChange: function (d) {
    this.setData({
      key: d.detail.value
    })
  }

})


