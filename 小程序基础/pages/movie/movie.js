// 2>注册page
Page({

  // 页面加载的时候执行，只会执行一次
  onLoad: function () {
    console.log('Movie 页 Load');
  },
  // 页面第一次渲染完成之后，只会执行一次
  onReady(){
    console.log('Movie 页 Read');
  },
  // 页面显示就会执行，执行多次
  onShow(){
    console.log('Movie 页 show');
  },
  // 页面隐藏就会执行，执行多次
  onHide(){
    console.log('Movie 页 hide');
  },
  // 页面卸载后才会执行，执行一次
  onUnload(){
    console.log('Movie 页 unload');
  },

  onCache(){
    // 异步缓存数据
    // wx.setStorage({
    //   key:'name',
    //   data:{
    //     p1:'Matt'
    //   },
    //   success: ()=>{
    //     // console.log('存储数据成功');
    //     wx.getStorage({
    //       key: 'name',
    //       success: (data) =>{
    //         console.log(data);
    //       }
    //     })
    //   }
    // })

    // 同步缓存数据
    wx.setStorageSync('names', 'Domesy');

    let ns = wx.getStorageSync('names');
    console.log(ns);
  }
});