// pages/me/me.js
var subjectUtils = require('../../utils/subjectutils.js')
Page({

  data: {
    movie:[],
    information:'',
    hiddenLoading:true,
  },
  onLoad: function (options) {
   
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  },
  inputinfo:function(event){
   var inputtxt = event.detail.value;
    this.setData({
      information:inputtxt

    })
    
  },
  sosuo:function(){
    var that = this
    this.setData({
      hiddenLoading: false,
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/search?q=' + this.data.information,
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success:function(res){
        subjectUtils.proesseds(res.data.subjects)
           that.setData({

             movie:res.data.subjects,
             hiddenLoading:true
           })
           
             console.log(res)
        
      }
    })
  },
  clean:function(){
    wx.switchTab({
      url: '../shouye/shouye',
    })
  },
   jumpdetail: function (e) {
    getApp().jumpdetail(e);
  }
  })