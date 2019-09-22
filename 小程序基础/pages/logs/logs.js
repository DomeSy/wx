//logs.js
const util = require('../../utils/util.js')

Page({
  
  // 页面加载的时候执行，只会执行一次
  onLoad: function () {
    console.log('Loge 页 Load');
  },
  // 页面第一次渲染完成之后，只会执行一次
  onReady(){
    console.log('Loge 页 Read');
  },
  // 页面显示就会执行，执行多次
  onShow(){
    console.log('Loge 页 show');
  },
  // 页面隐藏就会执行，执行多次
  onHide(){
    console.log('Loge 页 hide');
  },
  // 页面卸载后才会执行，执行一次
  onUnload(){
    console.log('Loge 页 unload');
  }
})
