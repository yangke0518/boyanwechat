// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      {pic:'/images/home-swiper1.png'},
      {pic:'/images/home-swiper2.png' },
      {pic:'/images/home-swiper3.png' },
    ],
    indicatorDots: true, //是否显示面板指示点	
    autoplay:true,
    circular: true,      //是否采用衔接滑动
    indicatorAtiveColor:'#fff',
    interval: 2000,
    duration: 500,
    nowIdx:0,
    swiperH:''
  },
  handleChange:function(e){
    this.setData({
      nowIdx:e.detail.current
    })
  },
  // 获取swiper的高度
  getHeight:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth*2;
    var imgh = e.detail.height;
    var imgw = e.detail.width;
    var sH = winWid *imgh/imgw +'rpx'
    console.log(sH);

    this.setData({
      swiperH:sH
    })
  },
  myquestion(){
    wx.navigateTo({
      url: "/pages/myquestionbank/myquestionbank",
    })
  },
  myplan() {
    wx.navigateTo({
      url: "/pages/mymajor/mymajor"
    })
  },
  mynetlearn() {
    wx.navigateTo({
      url: "/pages/mynetwork/mynetwork",
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