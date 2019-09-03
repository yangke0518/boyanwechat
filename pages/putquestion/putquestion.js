// pages/putquestion/putquestion.js
Page({
  data:{
    questionvalue:"",
  },
  changequesvalue:function(e){
    this.setData({
      questionvalue:e.detail.value
    })
  },
  submitques:function(){
    console.log(this.data.questionvalue);
    if (this.data.questionvalue==""){
      wx.showToast({
        title: '请输入您的提问',
        icon: 'none',
      })
    }else{
      console.log('进行问题提交')
    }
  },
})
 