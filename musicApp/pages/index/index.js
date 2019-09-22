//index.js

Page({
  data: {
    type: [
      { "0": '云音乐新歌榜' },
      { "1": '云音乐热歌榜' },
      { "2": '网易原创歌曲榜' },
      { "3": '云音乐飙升榜' },
      { "4": '云音乐电音榜' },
      { "5": 'UK排行榜周榜' },
      { "6": '美国Billboard周榜' },
      { "7": 'KTV嗨榜' },
      { "8": 'iTunes榜' },
      { "9": 'Hit FM Top榜' },
      { "10": '日本Oricon周榜' },
      { "11": '韩国Melon排行榜周榜' },
      { "12": '韩国Mnet排行榜周榜' },
      { "13": '韩国Melon原声周榜' },
      { "14": '中国TOP排行榜(港台榜)' },
      { "15": '中国TOP排行榜(内地榜)' },
      { "16": '香港电台中文歌曲龙虎榜' },
      { "17": '华语金曲榜' },
      { "18": '中国嘻哈榜' },
      { "19": '法国 NRJ EuroHot 30周榜' },
      { "20": '台湾Hito排行榜' },
      { "21": 'Beatport全球电子舞曲榜' },
      { "22": '云音乐ACG音乐榜' },
      { "23": '云音乐说唱榜' },
      { "24": '云音乐古典音乐榜' },
      { "25": '云音乐电音榜' },
      { "26": '抖音排行榜' },
      { "27": '新声榜' },
      { "28": '云音乐韩语榜' },
      { "29": '英国Q杂志中文版周榜' },
      { "30": '电竞音乐榜' },
      { "31": '云音乐欧美热歌榜' },
      { "32": '云音乐欧美新歌榜' },
      { "33": '说唱TOP榜' },
    ]
  },
  onLoad: function () {
    
  },
  onTap(e){
    // console.log(e);

    let { id } = e.currentTarget.dataset;
    // console.log( id,'ww2');
    // console.log(this.data.type[id][id],'ww1');

    wx.navigateTo({
      // 将id和对应的歌曲名带入
      url: '/pages/list/list?id=' + id +"&type=" + this.data.type[id][id],
    })
  }
})
