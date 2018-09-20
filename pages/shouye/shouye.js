// pages/main/main.js
var subjectUtils=require('../../utils/subjectutils.js')
var subjectUtils3 = require('../../utils/subjectutils3.js')
Page({
  data: {
     'imgurl':[],
     'dots':true,
     'autoplay':true,
     'interval':2000,
     'duration':1000,
     'circular':true,
     info:{},
     hiddenLoading:false
  },

  onLoad: function (options) {
    var that=this;
     wx.request({
       url: 'https://douban.uieee.com/v2/movie/in_theaters',
       header: {
         'content-type': 'application/xml' // 默认值
       },
       success:function(res){
         subjectUtils.proesseds(res.data.subjects)
        var arr= subjectUtils3.proesseds3(res.data.subjects);
        var imginfo=[];
        for(var i=0;i<arr.length;i++){
          imginfo.push(arr[i].images.large)
        }
        console.log(imginfo)
         that.setData(
           {info:res.data.subjects,
             hiddenLoading:true,
             imgurl:imginfo
           }
           )
            console.log(res)
       }
     })
    
  },
  jumpdetail:function(e){
   getApp().jumpdetail(e);
  }
  
})