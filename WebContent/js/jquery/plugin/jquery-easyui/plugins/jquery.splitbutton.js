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
var _3=$.data(_2,"splitbutton").options;
if(_3.menu){
$(_3.menu).menu({onShow:function(){
_4.addClass((_3.plain==true)?"s-btn-plain-active":"s-btn-active");
},onHide:function(){
_4.removeClass((_3.plain==true)?"s-btn-plain-active":"s-btn-active");
}});
}
var _4=$(_2);
_4.removeClass("s-btn-active s-btn-plain-active");
_4.linkbutton(_3);
var _5=_4.find(".s-btn-downarrow");
_5.unbind(".splitbutton");
if(_3.disabled==false&&_3.menu){
_5.bind("click.splitbutton",function(){
_6();
return false;
});
var _7=null;
_5.bind("mouseenter.splitbutton",function(){
_7=setTimeout(function(){
_6();
},_3.duration);
return false;
}).bind("mouseleave.splitbutton",function(){
if(_7){
clearTimeout(_7);
}
});
}
function _6(){
var _8=_4.offset().left;
if(_8+$(_3.menu).outerWidth()+5>$(window).width()){
_8=$(window).width()-$(_3.menu).outerWidth()-5;
}
$(".menu-top").menu("hide");
$(_3.menu).menu("show",{left:_8,top:_4.offset().top+_4.outerHeight()});
_4.blur();
};
};
$.fn.splitbutton=function(_9){
_9=_9||{};
return this.each(function(){
var _a=$.data(this,"splitbutton");
if(_a){
$.extend(_a.options,_9);
}else{
var t=$(this);
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,{disabled:(t.attr("disabled")?t.attr("disabled")=="true":undefined),plain:(t.attr("plain")?t.attr("plain")=="true":undefined),menu:t.attr("menu"),duration:t.attr("duration")},_9)});
$(this).removeAttr("disabled");
$(this).append("<span class=\"s-btn-downarrow\">&nbsp;</span>");
}
_1(this);
});
};
$.fn.splitbutton.defaults={disabled:false,menu:null,plain:true,duration:100};
})(jQuery);

