function getScrollOffset(){
  if(window.pageXOffset){
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  }else{
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}
function addEvnet(elem, type, fn){
  if(elem.addEventListener){
    elem.addEventListener(type, fn, false);
  }else if(elem.attachEvent){
    elem.attachEvent('on' + type, function(){
      fn.call(elem);
    })
  }else{
    elem['on' + type] = fn;
  }
}