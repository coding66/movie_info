// pages/detail/detail.js
var subjectUtil=require('../../utils/subjectutils2.js');
Page({

  data: {
      info:{},
      taggle:true,
    hiddenLoading: false
  },
  onLoad: function (options) {
    var movieid=wx.getStorageSync('movieid')
    var that=this;
     wx.request({
       url: 'https://douban.uieee.com/v2/movie/subject/'+movieid,
       header: {
         'content-type': 'application/xml' // 默认值
       },
       success:function(res){
         var pic=res.data.photos
         var picsub=pic.slice(0,4)
         var picnew=res.data;
         picnew.potonew=picsub;
         subjectUtil.proessed(res.data)
        that.setData({
             info:res.data,
          hiddenLoading: true
        })
         console.log(res)
          
       }
     })
    taggle: (options.taggle=='true'?true:false)//监听页面数据加载
    
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
  taggletap:function(){
    var that = this;
    that.setData({
      taggle: (!that.data.taggle)
    })
  }
})