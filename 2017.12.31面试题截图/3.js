setAttribute(good, job)
getAttribute(nogood)

var div1 = document.getElementById('div1');
var parent =div1.parentElement;
var child = div1.childNodes;
div1.removeChild(child[0]);
stopPropagation()
var btn = document.getElementById('btn1');
btn.addEventListener('click',function (event) {
  console.log('clicked')
})

function bindEvent (elem,type,fn) {
  elem.addEventListener(elem, type, fn);
}

var a= document.getElementById('link');
bindEvent(a,'click',function (e) {
  e.preventDefault();
  alert('clicked');
})


