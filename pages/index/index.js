//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showList:[
      {
        img:"https://i.kcimg.cn/data/avatar/noavatar_big.gif-50x50.jpg",
        name:"互动播报",
        title:"第24期",
        color:"#FF9300"
      },
      {
        img: "../../image/user.png",
        name: "好消息",
        title: "地区圈子",
        color: "#1571E5"
      },
      {
        img: "https://i.kcimg.cn/data/avatar/noavatar_big.gif-50x50.jpg",
        name: "求助社区",
        title: "发言规范",
        color: "#F44336"
      },
      {
        img: "https://i.kcimg.cn/data/avatar/noavatar_big.gif-50x50.jpg",
        name: "好卡友",
        title: "时代楷模",
        color: "#FFBE00"
      },
    ],
    needHelpList:[
      {
        "id": 10820,//id
        "reward": 5,//悬赏数
        "status": 0,//是否解决
        "headpic": "http://face.360che.com/data/avatar/new/71/52c3f86295dab6be27f769add66277e9_big.jpg",//头像
        "nikename": "飞奔的货车",//匿名
        "total": 0,//帮助数
        "date": "05-19",//发帖时间
        "tag": "打听行情",//标签
        "content": "北京天气怎么样",//求助内容
        "userid": "504771",//用户id
        "path": "北京市朝阳区兴隆东街",//地址
        "grade": 0,//获取等级
        "carbrand": "卡车",
        "gallery": [
          {
            "imgurl": "83fbd2bcc816474a9a6b08472a344f3f.jpg_600x400.jpg",//图片
            "imgurlmax": "83fbd2bcc816474a9a6b08472a344f3f.jpg",//原图
            "w": 600,
            "h": 400
          }
        ],
        "datetime": "2017/5/19 9:31:22"//发布时间
      },
      {
        id: 10893,
        reward: 0,
        status: 1,
        total: 1,
        date: "昨天",
        tag: "车坏了",
        content: "玻璃胶",
        userid: "414680",
        path: "北京市朝阳区花园闸路",
        headpic: "https://i.kcimg.cn/data/avatar/new/80/b4b9e745f32bca8d0cb3b25bfc0de47a_big.jpg-80x80.jpg",
        nikename: "feiyangniwo",
        grade: 5,
        carbrand: "",
        gallery: [],
        datetime: "2017/11/8 14:43:45"
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
