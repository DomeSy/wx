// pages/page/play.js
import url from "../../config/url";

// 获取App实例，因为歌只能放一首，不能同时放多首，所以此时的song是唯一的
var app = getApp();

Page({
  data: {
    song:{},
    duration:0,
    current: 0,
    isDown: false,
    lrc: {
      // 歌词部分最好用键值对的形式存储，时间对应键，内容对应值
      "0": "正在获取歌词"
    }
  },

  onLoad: function (options) {
    // console.log(options.id)

    let { id } = options;

    let {song} = app.globalData;
    // id = 1296583188;

    // 获取歌词
    wx.request({
      url: `${url.lyric}?id=${id}`,
      success: (res)=>{
        // console.log(res,'获取歌词');
        let { lyric } = res.data.lrc;
        // console.log(lyric);

        // 正则表达式
        let r = /\[(.*?)](.*)/g;
        var obj = {};
        lyric.replace( r,($0,$1,$2)=>{
          // console.log( $1,$2 ) 
          obj[$1.substring(0,5)] = $2
        } );
        this.setData({
          lrc: obj
        })
      }
    })

    // 获取歌曲详情
    wx.request({
      url: `${url.song}?ids=${id}`,
      success: (res) =>{
        // console.log(res,'song');

        this.setData({
          song:res.data.songs[0]
        })
      },
    });

    if ( !song ){
      song = app.globalData.song = wx.createInnerAudioContext();
    }
    song.src = `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
    song.play();
    
    // 监听音频播放事件
    song.onPlay( res=>{
      // console.log(res,"开始播放");
    });

    // 监听音频播放进度更新事件
    song.onTimeUpdate( res=>{
      // console.log(song);
      if(this.data.duration !== song.duration ){
        this.setData({
          duration: song.duration
        })
      };
      if( !this.data.isDown ){
        this.setData({
          current: song.currentTime
        })
      };

      // 设置当前的歌词滚动信息
      let { currentTime } = song;
      let min = Math.floor(currentTime/60);
      let sec = Math.floor(currentTime%60);
      // 时间拼接
      var attr = (min < 10 ? "0" + min : "" + min) + ":" + (sec < 10 ? "0" + sec : "" + sec);
      // console.log(attr);
      
      if(attr in this.data.lrc && "el-" + attr !== this.data.currentLrc){
        this.setData({
          currentLrc: "el-" + attr
        })
        console.log(this.data.currentLrc);
      }
    })
  },
  // 当手动按下滚动条的时候触发
  changing(){
    this.setData({
      isDown:true
    })
  },
  // 手指抬起的时候触发
  change(e){
    this.setData({
      isDown:false,
      current: e.detail.value
    });
    // seek：跳转到这个点
    app.globalData.song.seek(e.detail.value)
  },
  // 点击图片停止
  onTap(){
    let {song} = app.globalData;
    song.paused ? song.play() : song.pause();
  },

})