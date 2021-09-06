;(function(){
  var timer = null,
      playing = true
  var AutoRead = function(opt){
    this.btnTop = opt.btnTop;
    this.btnplay = opt.btnplay;
    var _self = this;
    addEvent(this.btnTop, 'click', function(){
      //点击小火箭返回顶部
      window.scrollTo(0, 0);
    })
    addEvent(this.btnplay, 'click', function(){
      _self.setAutoPlay();
    })
    //滚动条距离大于200不显示小火箭
    addEvent(window, 'scroll', function(){
      _self.isBtnShow();
    })
  }
  AutoRead.prototype = {
    setAutoPlay: function(){
      this.btnplay.style.background = 'url(../img/rkt.png) no-repeat 0 0/100% 100%';
    },
    isBtnShow: function(){
      var sTopScroll = getScrollOffset().top;
      this.btnTop.style.display = sTopScroll >= 200 ? 'block' : 'none';
    }
  }
  window.AutoRead = AutoRead;
})();