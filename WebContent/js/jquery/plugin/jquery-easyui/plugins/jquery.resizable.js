/**
 * jQuery EasyUI 1.1.1
 * 
 * Licensed under the GPL:
 *   http://www.gnu.org/licenses/gpl.txt
 *
 * Copyright 2010 stworthy [ stworthy@gmail.com ] 
 * 
 */
(function($){
$.fn.resizable=function(_1){
function _2(e){
var _3=e.data;
var _4=$.data(_3.target,"resizable").options;
if(_3.dir.indexOf("e")!=-1){
var _5=_3.startWidth+e.pageX-_3.startX;
_5=Math.min(Math.max(_5,_4.minWidth),_4.maxWidth);
_3.width=_5;
}
if(_3.dir.indexOf("s")!=-1){
var _6=_3.startHeight+e.pageY-_3.startY;
_6=Math.min(Math.max(_6,_4.minHeight),_4.maxHeight);
_3.height=_6;
}
if(_3.dir.indexOf("w")!=-1){
_3.width=_3.startWidth-e.pageX+_3.startX;
if(_3.width>=_4.minWidth&&_3.width<=_4.maxWidth){
_3.left=_3.startLeft+e.pageX-_3.startX;
}
}
if(_3.dir.indexOf("n")!=-1){
_3.height=_3.startHeight-e.pageY+_3.startY;
if(_3.height>=_4.minHeight&&_3.height<=_4.maxHeight){
_3.top=_3.startTop+e.pageY-_3.startY;
}
}
};
function _7(e){
var _8=e.data;
var _9=_8.target;
if($.boxModel==true){
$(_9).css({width:_8.width-_8.deltaWidth,height:_8.height-_8.deltaHeight,left:_8.left,top:_8.top});
}else{
$(_9).css({width:_8.width,height:_8.height,left:_8.left,top:_8.top});
}
};
function _a(e){
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _b(e){
_2(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_7(e);
}
return false;
};
function _c(e){
_2(e,true);
_7(e);
$(document).unbind(".resizable");
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
return false;
};
return this.each(function(){
var _d=null;
var _e=$.data(this,"resizable");
if(_e){
$(this).unbind(".resizable");
_d=$.extend(_e.options,_1||{});
}else{
_d=$.extend({},$.fn.resizable.defaults,_1||{});
}
if(_d.disabled==true){
return;
}
$.data(this,"resizable",{options:_d});
var _f=this;
$(this).bind("mousemove.resizable",_10).bind("mousedown.resizable",_11);
function _10(e){
var dir=_12(e);
if(dir==""){
$(_f).css("cursor","default");
}else{
$(_f).css("cursor",dir+"-resize");
}
};
function _11(e){
var dir=_12(e);
if(dir==""){
return;
}
var _13={target:this,dir:dir,startLeft:_14("left"),startTop:_14("top"),left:_14("left"),top:_14("top"),startX:e.pageX,startY:e.pageY,startWidth:$(_f).outerWidth(),startHeight:$(_f).outerHeight(),width:$(_f).outerWidth(),height:$(_f).outerHeight(),deltaWidth:$(_f).outerWidth()-$(_f).width(),deltaHeight:$(_f).outerHeight()-$(_f).height()};
$(document).bind("mousedown.resizable",_13,_a);
$(document).bind("mousemove.resizable",_13,_b);
$(document).bind("mouseup.resizable",_13,_c);
};
function _12(e){
var dir="";
var _15=$(_f).offset();
var _16=$(_f).outerWidth();
var _17=$(_f).outerHeight();
var _18=_d.edge;
if(e.pageY>_15.top&&e.pageY<_15.top+_18){
dir+="n";
}else{
if(e.pageY<_15.top+_17&&e.pageY>_15.top+_17-_18){
dir+="s";
}
}
if(e.pageX>_15.left&&e.pageX<_15.left+_18){
dir+="w";
}else{
if(e.pageX<_15.left+_16&&e.pageX>_15.left+_16-_18){
dir+="e";
}
}
var _19=_d.handles.split(",");
for(var i=0;i<_19.length;i++){
var _1a=_19[i].replace(/(^\s*)|(\s*$)/g,"");
if(_1a=="all"||_1a==dir){
return dir;
}
}
return "";
};
function _14(css){
var val=parseInt($(_f).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
})(jQuery);

