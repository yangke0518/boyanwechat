// pages/lengthlearn/learndetail.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    items: [
      { name: 'A', value: '《礼记·中庸》'},
      { name: 'B', value: '《论语·雍也》', checked: 'true'},
      { name: 'C', value: '《说菀·指武》'},
      { name: 'D', value: '《周礼》'},
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
