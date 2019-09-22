
Component({
  // 接收一个组件，此时是驼峰式
  properties:{
    nowIn: String
  },
  data: {
    magicNumber: Math.random(),
  },

  attached(){
    this.triggerEvent('getMagicNumber', this.data.magicNumber);
  },

  methods: {
    onTap(event){
      // console.log(event);
  
      // this.setData:改变数据，可以改变数据
      // 这里的setData是同步更新的，数据会同时改变
      this.setData({
        magicNumber:Math.random()
      });

      // triggerEvent点击后会触发一个事件，第一个参数，事件名，第二个是参数，可以是任意类型
      this.triggerEvent('getMagicNumber', this.data.magicNumber);
    },
  }
})
