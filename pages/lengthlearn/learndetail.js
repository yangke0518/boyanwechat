// pages/lengthlearn/learndetail.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    quesitems: [
      {
        title:'1,“文质彬彬，然后君子。”这段文字出自（ ）',
        id:1,
        type:1,
        question: [
          { name: 'A', value: '《礼记·中庸》'},
          { name: 'B', value: '《论语·雍也》'},
          { name: 'C', value: '《说菀·指武》'},
          { name: 'D', value: '《周礼》'}
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
    console.log(e.currentTarget.dataset);
    let idx = e.currentTarget.dataset.idex; //答案编号
    let outidx = e.currentTarget.outidx; //题目编号
    let question = this.data.quesitems[outidx];
    console.log(question);
  },  
})
