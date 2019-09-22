//app.js

// 1>注册 App
// 会得到一个程序的实例，可以被其他页面访问
App({

  // 在小程序运行期间，之后运行一次
  // 程序销毁(过了一段事件没有运行，或手动删除了小程序，在此添加运行)之后，再次启动就好知性
  onLaunch: function () {
    console.log('小程序启动了');
  },
  // 每次切换到后台，就会执行
  onShow(){
    console.log('切换到小程序运行了');
  },
  // 每次在后台切换过来，就会执行
  onHide(){
    console.log('小程序被隐藏在后台运行');
  },
  globalData: {
    userInfo: null
  }
})