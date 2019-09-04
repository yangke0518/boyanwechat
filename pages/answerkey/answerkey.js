Page({
  /**
   * 组件的初始数据
   */
  data: {
    showhint: true,
    quesitems: [
      {
        title: '1,“文质彬彬，然后君子。”这段文字出自（ ）',
        id: 1,
        type: 1,
        rigthanswer:'B',
        wronganswer:'A',
        jixxi:'《论语·雍也》曾说：“质胜文则野，文胜质则史。文质彬彬，然后君子。”这是对妥善处理好人的先天自然素质和后天人为修养的关系所发的议论。论语·雍也》曾说：“质胜文则野，文胜质则史。文质彬彬，然后君子。”这是对妥善处理好人的先天自然素质和后天人为修养的关系所发的议论。论语·雍也》曾说：“质胜文则野，文胜质则史。文质彬彬，然后君子。”这是对妥善处理好人的先天自然素质和后天人为修养的关系所发的议论。',
        grade:'第一章 绪论，001“文化”的界定',
        question: [
          { name: 'A', value: '《礼记·中庸》' },
          { name: 'B', value: '《论语·雍也》' },
          { name: 'C', value: '《说菀·指武》' },
          { name: 'D', value: '《周礼》' },
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
  // 给每一题添加选中的属性
  changeques: function () {
    const quesitemschecked = this.data.quesitems;
    for (let i in quesitemschecked) {
      quesitemschecked[i].danchecked = '';
    }
    // console.log(quesitemschecked)
  },
  //单选确定全选返选
  inputchecked(e) {
    const { ques, check } = e.currentTarget.dataset;
    console.log(ques, check)
    const changelist = this.data.quesitems;
    for (let i in changelist) {
      if (ques == i) {
        changelist[i].danchecked = check
      }
      // changelist[i].danchecked = check
      // for(let a in changelist[i].question){
      //   console.log(a);
      //   if (ques==a){
      //     changelist[i].danchecked = check
      //   }
      // }
    }
    this.setData({
      quesitems: changelist
    })
    console.log(changelist)
  },
  onLoad: function (options) {
    this.changeques();
  }

})
