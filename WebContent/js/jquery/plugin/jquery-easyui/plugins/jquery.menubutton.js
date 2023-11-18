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
var _3=$.data(_2,"menubutton").options;
var _4=$(_2);
_4.removeClass("m-btn-active m-btn-plain-active");
_4.linkbutton(_3);
if(_3.menu){
$(_3.menu).menu({onShow:function(){
_4.addClass((_3.plain==true)?"m-btn-plain-active":"m-btn-active");
},onHide:function(){
_4.removeClass((_3.plain==true)?"m-btn-plain-active":"m-btn-active");
}});
}
_4.unbind(".menubutton");
if(_3.disabled==false&&_3.menu){
_4.bind("click.menubutton",function(){
_5();
return false;
});
var _6=null;
_4.bind("mouseenter.menubutton",function(){
_6=setTimeout(function(){
_5();
},_3.duration);
return false;
}).bind("mouseleave.menubutton",function(){
if(_6){
clearTimeout(_6);
}
});
}
function _5(){
var _7=_4.offset().left;
if(_7+$(_3.menu).outerWidth()+5>$(window).width()){
_7=$(window).width()-$(_3.menu).outerWidth()-5;
}
$(".menu-top").menu("hide");
$(_3.menu).menu("show",{left:_7,top:_4.offset().top+_4.outerHeight()});
_4.blur();
};
};
$.fn.menubutton=function(_8){
_8=_8||{};
return this.each(function(){
var _9=$.data(this,"menubutton");
if(_9){
$.extend(_9.options,_8);
}else{
var t=$(this);
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,{disabled:(t.attr("disabled")?t.attr("disabled")=="true":undefined),plain:(t.attr("plain")?t.attr("plain")=="true":undefined),menu:t.attr("menu"),duration:t.attr("duration")},_8)});
$(this).removeAttr("disabled");
$(this).append("<span class=\"m-btn-downarrow\">&nbsp;</span>");
}
_1(this);
});
};
$.fn.menubutton.defaults={disabled:false,plain:true,menu:null,duration:100};
})(jQuery);

