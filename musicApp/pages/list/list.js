
import url from '../../config/url.js';

Page({
  data:{
    list:[]
  },
  onLoad:function(options){

    console.log(options.id,'asd');

    let { id, type } = options;

    console.log(url.list);
      wx.request({
      // 将地址用config写入
      // url: `${url.list}?idx=${id}`,
      url: `http://localhost:3000/top/list?idx=${id}`,
      success: (res) => {
        console.log(res);

        this.setData({
          // 请求的数据在 data.playlist.tracks     
          // 拆分为10条 
          list:res.data.playlist.tracks.slice(0,10)
        });
        wx.setNavigationBarTitle({
          title: type
        })
      },
    })
  },
  onTap(e){
    let { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/play/play?id=${id}`,
    })
  }
})