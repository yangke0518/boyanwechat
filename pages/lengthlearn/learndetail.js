Page({
  /**
   * 组件的初始数据
   */
  data: {
    showhint:true,
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
          { name: 'E', value: '《周礼》123' }
        ]
      },
      {
        title: '2,“文质彬彬，然后君子。”这段文字出自（ ）',
        id: 2,
        type: 1,
        question: [
          { name: 'A', value: '《礼记·中庸》' },
          { name: 'B', value: '《论语·雍也》' },
          { name: 'C', value: '《说菀·指武》' },
          { name: 'D', value: '《周礼》' }
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
    
  inputchecked(e){
    const { ques,check} = e.currentTarget.dataset;
    console.log(ques,check)
   
  },  
  // 关闭弹框
  closehint:function(){
    this.setData({
      showhint:false
    })
  }
})
 