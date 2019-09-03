Page({
  /**
   * 页面的初始数据
   */
  data: {
    major:true,
    address:true,
    leftactive: 1, //左边导航栏显示的index
    rightactive:"", //右边的显示隐藏
    majordata:[
      {
        id: 1,
        major:"专科",
        detail:{
          name:"自考-人力资源管理",
          univ:"专科大学",
          kemu:[
            {
              name:"政治专科",
              time:"2019年4月10号  上午9:00",
              address:"政治考点"
            },
            {
              name: "英语专科",
              time: "2019年4月10号  上午9:00",
              address: "英语考点"
            },
            {
              name: "数学专科",
              time: "2019年4月10号  上午9:00",
              address: "数学考点"
            }
          ]
        }
      },
      {
        id: 2,
        major: "本科",
        detail: {
          name: "本科-人力资源管理",
          univ: "本科大学",
          kemu: [
            {
              name: "政治本科",
              time: "2019年4月10号  上午9:00",
              address: "政治考点"
            },
            {
              name: "英语本科",
              time: "2019年4月10号  上午9:00",
              address: "英语考点"
            },
            {
              name: "数学本科",
              time: "2012年4月10号  上午9:00",
              address: "数学考点"
            }
          ]
        }
      },
    ]
  },
  switchRightTab(event){
    // var $this = this;
    let oIndex = event.currentTarget.dataset.gid;
    this.setData({
      leftactive: oIndex
    })
  },
  showrightdetail(event){
    let rightIndex = event.currentTarget.dataset.iid;
    console.log(rightIndex.name)
    this.setData({
      rightactive: rightIndex.name
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