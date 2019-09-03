Page({
  /**
   * 页面的初始数据
   */
  data: {
    showadd: '', 
    list:[
      {
        id:1,
        bigtitle:'第一章 绪论',
        learn:[
          {
            title:'第一节“文化”的界定',
            total: '100',
            sid:'1',
            detail:[
              {
                son:'001“文化”的界定',
                start:'1',
                end:'30'
              },
              {
                son: '002“文化”的界定02',
                start: '2',
                end: '20'
              }
            ]
          },
          {
            title: '第二节 民族文化、国别文化与两个文化层面',
            total: '200',
            sid: '2',
            detail: [
              {
                son: '001“民族文化、国别文化与两个文化层面',
                start: '1',
                end: '28'
              },
              {
                son: '002“民族文化、国别文化与两个文化层面',
                start: '2',
                end: '20'
              }
            ]
          },
          {
            title:'第三节 民族文化、国别文化与两个文化层面民族文化、国别文化与两个文化层面',
            total: '300',
            sid: '3',
            detail: [
              {
                son: '001“第三节民族文化、国别文化与两个文化层面',
                start: '1',
                end: '28'
              },
              {
                son: '002“第三节民族文化、国别文化与两个文化层面',
                start: '2',
                end: '20'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        bigtitle: '第二章 中国文化的地理背景',
        learn: [
          {
            title: '第二章 第一节“文化”的界定',
            total: '100',
            sid: '4',
            detail: [
              {
                son: '第二章 001“文化”的界定',
                start: '1',
                end: '30'
              },
              {
                son: '第二章 002“文化”的界定02',
                start: '2',
                end: '20'
              }
            ]
          },
        ]
      }
    ]
  },
  //最外面的大的加减进行展开，收缩
  changeadd:function(event){
    let {gid,gflag} = event.currentTarget.dataset;
    this.setData({
      showadd: gid,
    })    
    const changelist  = this.data.list;
    for (let i in changelist){
      if (gid == changelist[i].id){
        changelist[i].addFlagBig = !changelist[i].addFlagBig;
      }
    }
    this.setData({
      list: changelist
    })
  },
  //里面的小的加减进行展开，收缩
  changesmalladd:function(event){
    const {sid} = event.currentTarget.dataset;
    console.log(sid);
    const changelist = this.data.list;
    for(let i in changelist){
      for(let a in changelist[i].learn){
        if (sid == changelist[i].learn[a].sid){
          changelist[i].learn[a].addFlagSmall = !changelist[i].learn[a].addFlagSmall
        }
      }
    }
    this.setData({
      list: changelist
    })
  },
  // 给每个数组添加flag状态,ajax请求成功后进行添加
  addflag:function(){
    let listcheck = this.data.list;
    for (let i in listcheck){
      listcheck[i].addFlagBig = true;
      for (let a in listcheck[i].learn){
        listcheck[i].learn[a].addFlagSmall = false;
      }
    }
    this.setData({
      list:listcheck
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addflag();
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