// pages/lengthlearn/learndetail.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    quesitems: [
      {
        title:'1,“文质彬彬，然后君子。”这段文字出自（ ）',
        question: [
          { name: 'A', value: '《礼记·中庸》'},
          { name: 'B', value: '《论语·雍也》'},
          { name: 'C', value: '《说菀·指武》'},
          { name: 'D', value: '《周礼》'}
        ]
      },
      {
        title: '2,“文质彬彬，然后君子。”这段文字出自（ ）',
        question: [
          { name: 'A', value: '《礼记·中庸》' },
          { name: 'B', value: '《论语·雍也》' },
          { name: 'C', value: '《说菀·指武》' },
          { name: 'D', value: '《周礼》' }
        ]
      },
      {
        title: '3,“文质彬彬，然后君子。”这段文字出自（ ）',
        question: [
          { name: 'A', value: '《礼记·中庸》' },
          { name: 'B', value: '《论语·雍也》' },
          { name: 'C', value: '《说菀·指武》' },
          { name: 'D', value: '《周礼》' }
        ]
      }
    ]
  },
    
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  
  

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
