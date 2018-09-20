//index.js
//获取应用实例
var subjectUtils3 = require('../../utils/subjectutils3.js')
const app = getApp()

Page({
  data: {
      imgurl:''
  },
  onReady:function(){
    var that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {

        var arr = subjectUtils3.proesseds3(res.data.subjects);
        var imginfo = [];
        for (var i = 0; i < arr.length; i++) {
          imginfo.push(arr[i].images.large)
        }
        console.log(imginfo)
        that.setData(
          {
            imgurl: imginfo[0]
          }
        )
        console.log(res)
      }
    })
  },
  onLoad: function () {
    
  },
  enter:function(){
    wx.switchTab({
         url: '../shouye/shouye',
       })

  }
})
