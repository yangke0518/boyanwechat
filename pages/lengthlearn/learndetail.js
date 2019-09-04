Page({
  /**
   * 组件的初始数据
   */
  data: {
    showhint:true,  //弹框组件手势显示
    slidehint:true, //滑动手势组件显示
    nowid:'', //当前显示的题目的id值，显示当前的swiper-slide
    quesitems: [
      {
        title:'1,“文质彬彬，然后君子。”这段文字出自（ ）',
        id:1,
        type:1,
        question: [
          { name: 'A', value: '《礼记·中庸》'},
          { name: 'B', value: '《论语·雍也》'},
          { name: 'C', value: '《说菀·指武》'},
          { name: 'D', value: '《周礼》'},
        ]
      },
      {
        title: '2,“文质彬彬，然后君子。”这段文字出自（ ）',
        id: 2,
        type: 1,
        question: [
          { name: 'A', value: '《礼记·中庸》'},
          { name: 'B', value: '《论语·雍也》'},
          { name: 'C', value: '《说菀·指武》'},
          { name: 'D', value: '《周礼》'}
        ]
      },
      {
        title: '3,“文质彬彬，然后君子。”这段文字出自（ ）',
        id: 3,
        type: 2,
        question: [
          { name: 'A', value: '《礼记·中庸》' },
          { name: 'B', value: '《论语·雍也》' },
          { name: 'C', value: '《说菀·指武》' },
          { name: 'D', value: '《周礼》' }
        ]
      }
    ]
  },
  // 给每一题添加选中的属性
  changeques:function(){
    const quesitemschecked = this.data.quesitems;
    for (let i in quesitemschecked) {
      quesitemschecked[i].danchecked = '';      //添加单选的值
      quesitemschecked[i].collected = false;   //添加是否选择的标签
    }
    // console.log(quesitemschecked)
  },
  //单选确定全选返选
  inputchecked(e){
    const { ques,check} = e.currentTarget.dataset;
    console.log(ques,check)
    const changelist = this.data.quesitems;
    for (let i in changelist){
      if (ques==i){
        changelist[i].danchecked = check
      }
    }
    this.setData({
      quesitems: changelist
    })
    // console.log(changelist)
    //跳转到下一题，swiper进行自动滑动


  },  
  // 是否收藏此题
  shouldcollection:function(e){
    const {collect} = e.currentTarget.dataset;
    console.log(collect);
    const collectlist = this.data.quesitems;
    for (let i in collectlist){
      if (collect == collectlist[i].id){
        collectlist[i].collected = !collectlist[i].collected
      }
    }
    this.setData({
      quesitems: collectlist
    })
  },
  //点击进入章节题目列表页面 learnlist
  golearndetail:function(){
    wx.navigateTo({
      url: '/pages/learnlist/learnlist',
    })
  },
  // 关闭答题弹框
  closehint:function(){
    this.setData({
      showhint:false
    })
  },
  // 关闭手势弹框
  closeslidehint: function () {
    this.setData({
      slidehint: false
    })
  },
  onLoad:function(options){
    this.changeques();
  }

})
 