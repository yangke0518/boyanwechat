Page({
  data: {
    complainvalue: "",
  },
  changequesvalue: function (e) {
    this.setData({
      complainvalue: e.detail.value
    })
  },
  submitques: function () {
    console.log(this.data.complainvalue);
    if (this.data.complainvalue == "") {
      wx.showToast({
        title: '请输入您的投诉',
        icon: 'none',
      })
    } else {
      console.log('进行问题提交')
    }
  },
})