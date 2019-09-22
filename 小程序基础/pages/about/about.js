Page({
  data:{
    name:''
  },
  onGotoMovie(){
    wx.navigateTo({
      url: '/pages/movie/movie',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onGetName(){
    let n = wx.getStorageSync('name');
    if(n){
      this.setData({
        name: n.p1
      })
    }
  },
  onRemoveName(){
    wx.removeStorageSync('names');
  }
})