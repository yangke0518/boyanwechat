// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userPhone:'',
    userPsd:'',
    password:true,
    imgSrc:'/images/login-eye.png'
  },
  showeyes() {
    this.setData({
      password: !this.data.password
    })
  },
  // 清空手机号
  clearphone(){
    this.setData({
      userPhone:''
    })
  },
  // 登录
  loginSubmit(e){
    let {userPhone, userPsd} = e.detail.value;
    // const phoneReg = /^1[0-9]{10}$/;
    // const psdReg = /^[\w\W]{6,26}$/;
    // if (userPhone==''){
    //   wx.showToast({
    //     title: '请输入手机号',
    //     icon:'none',
    //     duration: 2000
    //   })
    //   return;
    // }else if(userPsd==''){
    //   wx.showToast({
    //     title: '请输入密码',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return;
    // }else if (!(phoneReg.test(userPhone))){
    //   wx.showToast({
    //     title: '手机号格式不对',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return;
    // }else if(!(psdReg.test(userPsd))){
    //   wx.showToast({
    //     title: '密码请输入6-26位任意字符',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return;
    // }else{
    //   console.log(userPhone)
    //   console.log(userPsd)
      
    // }

    console.log(userPhone)
    console.log(userPsd)
    wx.switchTab({
      url: '/pages/home/home',
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