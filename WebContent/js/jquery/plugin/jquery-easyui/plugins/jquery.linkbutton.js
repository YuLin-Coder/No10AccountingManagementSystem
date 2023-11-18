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
var _3=$.data(_2,"linkbutton").options;
$(_2).empty();
$(_2).addClass("l-btn");
if(_3.plain){
$(_2).addClass("l-btn-plain");
}else{
$(_2).removeClass("l-btn-plain");
}
if(_3.text){
$(_2).html(_3.text).wrapInner("<span class=\"l-btn-left\">"+"<span class=\"l-btn-text\">"+"</span>"+"</span>");
if(_3.iconCls){
$(_2).find(".l-btn-text").addClass(_3.iconCls).css("padding-left","20px");
}
}else{
$(_2).html("&nbsp;").wrapInner("<span class=\"l-btn-left\">"+"<span class=\"l-btn-text\">"+"<span class=\"l-btn-empty\"></span>"+"</span>"+"</span>");
if(_3.iconCls){
$(_2).find(".l-btn-empty").addClass(_3.iconCls);
}
}
_4(_2,_3.disabled);
};
function _4(_5,_6){
var _7=$.data(_5,"linkbutton");
if(_6){
_7.options.disabled=true;
var _8=$(_5).attr("href");
if(_8){
_7.href=_8;
$(_5).attr("href","javascript:void(0)");
}
var _9=$(_5).attr("onclick");
if(_9){
_7.onclick=_9;
$(_5).attr("onclick",null);
}
$(_5).addClass("l-btn-disabled");
}else{
if(_7.href){
$(_5).attr("href",_7.href);
}
if(_7.onclick){
_5.onclick=_7.onclick;
}
$(_5).removeClass("l-btn-disabled");
}
};
$.fn.linkbutton=function(_a){
if(typeof _a=="string"){
switch(_a){
case "options":
return $.data(this[0],"linkbutton").options;
case "enable":
return this.each(function(){
_4(this,false);
});
case "disable":
return this.each(function(){
_4(this,true);
});
}
}
_a=_a||{};
return this.each(function(){
var _b=$.data(this,"linkbutton");
if(_b){
$.extend(_b.options,_a);
}else{
var t=$(this);
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,{disabled:(t.attr("disabled")?true:undefined),plain:(t.attr("plain")?t.attr("plain")=="true":undefined),text:$.trim(t.html()),iconCls:t.attr("icon")},_a)});
t.removeAttr("disabled");
}
_1(this);
});
};
$.fn.linkbutton.defaults={disabled:false,plain:false,text:"",iconCls:null};
})(jQuery);

