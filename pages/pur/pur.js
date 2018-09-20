// pages/pur/pur.js
var subjectUtils = require('../../utils/subjectutils.js')
Page({
  data: {
    info: {},
    hiddenLoading: false
  },
  onLoad: function (options) {
    var that=this;
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/top250',
        header: {
          'content-type': 'application/xml' // 默认值
        },
        success:function(res){
          subjectUtils.proesseds(res.data.subjects)
           that.setData({
             info: res.data.subjects,
             hiddenLoading:true
           })
           console.log(res);
        }
      })
  },
  jumpdetail: function (e) {
    getApp().jumpdetail(e);
  }
})