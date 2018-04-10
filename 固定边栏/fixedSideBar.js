//固定边栏原生JS实现

var $ = function(id){
        return document.getElementById(id);
      }

      var addEvent = function(obj,event,fn){
                if(obj.addEventListener){
                  obj.addEventListener(event,fn,false);
                }else if(obj.attachEvent){
                  obj.attachEvent('on'+event,fn);
                }
      }
      var domSider = $('J_BdSide');
      var scrollEvent = function(){
        var sideHeight = domSider.offsetHeight;
        var screenHeight =document.documentElement.clientHeight||document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollHeight+screenHeight>sideHeight){
          domSider.style.cssText = 'position:fixed;right:0px;top:'+(-(sideHeight-screenHeight))+'px';
        }else{
          domSider.style.position='static';
        }
      }
      addEvent(window,'scroll',function(){
        scrollEvent();

      });
      addEvent(window,'resize',function(){
        scrollEvent();
      });



      //固定边栏jquery实现
      //
  $(window).scroll(function() {
        var windowHeight = $(window).scrollTop() + $(window).height();
        var sideHeight = $('#J_BdSide').height();
        if (windowHeight > sideHeight) {
          $('#J_BdSide').css({
            'position' : 'fixed',
            right : '0px',
            top : -(sideHeight - $(window).height())
          });
        } else {
          $('#J_BdSide').css({
            'position' : 'static'
          });
        }
      });
