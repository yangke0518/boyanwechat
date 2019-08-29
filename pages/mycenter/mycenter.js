// pages/mycenter/mycenter.js
Page({
  // 去个人资料
  gomydata(){
    wx.navigateTo({
      url:'/pages/mydata/mydata',
    })
  },
  // 去我的缴费
  golearncost(){
    wx.navigateTo({
      url:'/pages/learncost/learncost',
    })
  },
  // 去历史成绩
  gohistoryresult(){
    wx.navigateTo({
      url:'/pages/historyresult/historyresult',
    })
  },
  // 去班主任
  gomyteacher(){
    wx.navigateTo({
      url:'/pages/myteacher/myteacher',
    })
  },
  // 去我的资料
  gomydata(){
    wx.navigateTo({
      url:'/pages/mydata/mydata',
    })
  },
  // 我的消息
  gomymessage(){
    wx.navigateTo({
      url:'/pages/mymessage/mymessage',
    })
  },
  // 我的提问
  goputquestion(){
    wx.navigateTo({
      url:'/pages/putquestion/putquestion',
    })
  },
  // 我的投诉
  gomycomplaint(){
    wx.navigateTo({
      url:'/pages/mycomplaint/mycomplaint',
    })
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
