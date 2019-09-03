// pages/mycenter/mycenter.js
Page({
  data:{
    mymsg:[
      {list:"1.请及时缴费"},{list:"2.请及时缴费"}  
    ],
    noticeNum:3,
    myquestion:0
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
})
