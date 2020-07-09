var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 横向切换选项
    loop: true, // 循环模式选项
    effect : 'fade',//淡入淡出
    speed:800,
    autoplay: {
      delay:3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },//自动轮播
    // 如果需要分页器
    pagination :{
      el: '.swiper-pagination',
      clickable :true,
    //   bulletClass : 'my-bullet',
    //   bulletActiveClass: 'my-bullet-active',
  },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })  
  for(i=0;i<mySwiper.pagination.bullets.length;i++){
      mySwiper.pagination.bullets[i].onclick=function(){
      this.click();
      };
  }
  // 计算两个时间节点之间的时间差
  function timeDiff(time1, time2) {
  var diff = Math.floor(Math.abs(time1.getTime() - time2.getTime()) / 1000)
  var day = Math.floor( diff / (60 * 60 * 24) )
  var hours = Math.floor( diff % (60 * 60 * 24) / (60 * 60) )
  var minutes = Math.floor( diff % (60 * 60) / 60 )
  var seconds = diff % 60
  var obj = {}
  obj.day = day
  obj.hours = hours
  obj.minutes = minutes
  obj.seconds = seconds
  return obj
}
  // 1-1. 准备两个时间节点
  var time1 = new Date('2020-7-7 19:50:00')
  // 3-2. 获取 p 标签
  var div = document.querySelector('.countdown')
  // 2-1. 书写一个定时器
  setInterval(function () {
    // 2-2. 获取时间差
    var time2 = new Date()
    var res = timeDiff(time1, time2)
    for(var key in res){
      if(res[key] < 10){
       res[key] = "0"+res[key]
      }
    }
    // 3. 写入页面里面
    var str ='<span>' + res.hours + '</span><i>:</i><span>' + res.minutes + '</span><i>:</i><span>' + res.seconds + '</span>'
    div.innerHTML = str
  }, 1000)
  $(window).scroll(() => {
    // 通过判断卷去的高度来决定
    if ($(window).scrollTop() >= 300) {
      // 让回到顶部按钮显示
      $('#goTop').fadeIn()
    } else {
      // 让回到顶部按钮隐藏
      $('#goTop').fadeOut()
    }
  })
  // 2. 点击按钮的时候让页面回到顶部
  $('#goTop').click(() => {

    $('html').animate({
      scrollTop: 0
    }, 1000)

    // animate 是要操作元素的
    // document 是根节点 不是 元素
    // html 是根元素节点
  })
  
  $('.page-main a').attr('href','./details.html')