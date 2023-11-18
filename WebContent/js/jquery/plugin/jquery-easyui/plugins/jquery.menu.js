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
function _1(_2){
$(_2).appendTo("body");
$(_2).addClass("menu-top");
var _3=[];
_4($(_2));
var _5=null;
for(var i=0;i<_3.length;i++){
var _6=_3[i];
_7(_6);
_6.find(">div.menu-item").each(function(){
_8($(this));
});
_6.find("div.menu-item").click(function(){
if(!this.submenu){
_16(_2);
var _9=$(this).attr("href");
if(_9){
location.href=_9;
}
}
});
_6.bind("mouseenter",function(){
if(_5){
clearTimeout(_5);
_5=null;
}
}).bind("mouseleave",function(){
_5=setTimeout(function(){
_16(_2);
},100);
});
}
function _4(_a){
_3.push(_a);
_a.find(">div").each(function(){
var _b=$(this);
var _c=_b.find(">div");
if(_c.length){
_c.insertAfter(_2);
_b[0].submenu=_c;
_4(_c);
}
});
};
function _8(_d){
_d.hover(function(){
_d.siblings().each(function(){
if(this.submenu){
_19(this.submenu);
}
$(this).removeClass("menu-active");
});
_d.addClass("menu-active");
var _e=_d[0].submenu;
if(_e){
var _f=_d.offset().left+_d.outerWidth()-2;
if(_f+_e.outerWidth()>$(window).width()){
_f=_d.offset().left-_e.outerWidth()+2;
}
_1d(_e,{left:_f,top:_d.offset().top-3});
}
},function(e){
_d.removeClass("menu-active");
var _10=_d[0].submenu;
if(_10){
if(e.pageX>=parseInt(_10.css("left"))){
_d.addClass("menu-active");
}else{
_19(_10);
}
}else{
_d.removeClass("menu-active");
}
});
_d.unbind(".menu").bind("mousedown.menu",function(){
return false;
});
};
function _7(_11){
_11.addClass("menu").find(">div").each(function(){
var _12=$(this);
if(_12.hasClass("menu-sep")){
_12.html("&nbsp;");
}else{
var _13=_12.addClass("menu-item").html();
_12.empty().append($("<div class=\"menu-text\"></div>").html(_13));
var _14=_12.attr("icon");
if(_14){
$("<div class=\"menu-icon\"></div>").addClass(_14).appendTo(_12);
}
if(_12[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(_12);
}
if($.boxModel==true){
var _15=_12.height();
_12.height(_15-(_12.outerHeight()-_12.height()));
}
}
});
_11.hide();
};
};
function _16(_17){
var _18=$.data(_17,"menu").options;
_19($(_17));
$(document).unbind(".menu");
_18.onHide.call(_17);
return false;
};
function _1a(_1b,pos){
var _1c=$.data(_1b,"menu").options;
if(pos){
_1c.left=pos.left;
_1c.top=pos.top;
}
_1d($(_1b),{left:_1c.left,top:_1c.top},function(){
$(document).unbind(".menu").bind("mousedown.menu",function(){
_16(_1b);
$(document).unbind(".menu");
return false;
});
_1c.onShow.call(_1b);
});
};
function _1d(_1e,pos,_1f){
if(!_1e){
return;
}
if(pos){
_1e.css(pos);
}
_1e.show(1,function(){
if(!_1e[0].shadow){
_1e[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(_1e);
}
_1e[0].shadow.css({display:"block",zIndex:$.fn.menu.defaults.zIndex++,left:_1e.css("left"),top:_1e.css("top"),width:_1e.outerWidth(),height:_1e.outerHeight()});
_1e.css("z-index",$.fn.menu.defaults.zIndex++);
if(_1f){
_1f();
}
});
};
function _19(_20){
if(!_20){
return;
}
_21(_20);
_20.find("div.menu-item").each(function(){
if(this.submenu){
_19(this.submenu);
}
$(this).removeClass("menu-active");
});
function _21(m){
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
$.fn.menu=function(_22,_23){
if(typeof _22=="string"){
switch(_22){
case "show":
return this.each(function(){
_1a(this,_23);
});
case "hide":
return this.each(function(){
_16(this);
});
}
}
_22=_22||{};
return this.each(function(){
var _24=$.data(this,"menu");
if(_24){
$.extend(_24.options,_22);
}else{
_24=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,_22)});
_1(this);
}
$(this).css({left:_24.options.left,top:_24.options.top});
});
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,onShow:function(){
},onHide:function(){
}};
})(jQuery);

