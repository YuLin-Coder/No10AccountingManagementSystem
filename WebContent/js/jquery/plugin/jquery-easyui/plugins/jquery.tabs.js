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
function _1(_2,_3){
var w=0;
var b=true;
$(">div.tabs-header ul.tabs li",_2).each(function(){
if(this==_3){
b=false;
}
if(b==true){
w+=$(this).outerWidth(true);
}
});
return w;
};
function _4(_5){
var _6=$(">div.tabs-header",_5);
var _7=0;
$("ul.tabs li",_6).each(function(){
_7+=$(this).outerWidth(true);
});
var _8=$(".tabs-wrap",_6).width();
var _9=parseInt($(".tabs",_6).css("padding-left"));
return _7-_8+_9;
};
function _a(_b){
var _c=$(">div.tabs-header",_b);
var _d=0;
$("ul.tabs li",_c).each(function(){
_d+=$(this).outerWidth(true);
});
if(_d>_c.width()){
$(".tabs-scroller-left",_c).css("display","block");
$(".tabs-scroller-right",_c).css("display","block");
$(".tabs-wrap",_c).addClass("tabs-scrolling");
if($.boxModel==true){
$(".tabs-wrap",_c).css("left",2);
}else{
$(".tabs-wrap",_c).css("left",0);
}
var _e=_c.width()-$(".tabs-scroller-left",_c).outerWidth()-$(".tabs-scroller-right",_c).outerWidth();
$(".tabs-wrap",_c).width(_e);
}else{
$(".tabs-scroller-left",_c).css("display","none");
$(".tabs-scroller-right",_c).css("display","none");
$(".tabs-wrap",_c).removeClass("tabs-scrolling").scrollLeft(0);
$(".tabs-wrap",_c).width(_c.width());
$(".tabs-wrap",_c).css("left",0);
}
};
function _f(_10){
var _11=$.data(_10,"tabs").options;
var cc=$(_10);
if(_11.fit==true){
var p=cc.parent();
_11.width=p.width();
_11.height=p.height();
}
cc.width(_11.width).height(_11.height);
var _12=$(">div.tabs-header",_10);
if($.boxModel==true){
_12.width(cc.width()-(_12.outerWidth()-_12.width()));
}else{
_12.width(cc.width());
}
_a(_10);
var _13=$(">div.tabs-panels",_10);
var _14=_11.height;
if(!isNaN(_14)){
if($.boxModel==true){
var _15=_13.outerHeight()-_13.height();
_13.css("height",(_14-_12.outerHeight()-_15)||"auto");
}else{
_13.css("height",_14-_12.outerHeight());
}
}else{
_13.height("auto");
}
var _16=_11.width;
if(!isNaN(_16)){
if($.boxModel==true){
_13.width(_16-(_13.outerWidth()-_13.width()));
}else{
_13.width(_16);
}
}else{
_13.width("auto");
}
if($.parser){
setTimeout(function(){
$.parser.parse(_10);
},0);
}
};
function _17(_18){
var tab=$(">div.tabs-header ul.tabs li.tabs-selected",_18);
if(tab.length){
var _19=$.data(tab[0],"tabs.tab").id;
var _1a=$("#"+_19);
var _1b=$(">div.tabs-panels",_18);
if(_1b.css("height").toLowerCase()!="auto"){
if($.boxModel==true){
_1a.height(_1b.height()-(_1a.outerHeight()-_1a.height()));
_1a.width(_1b.width()-(_1a.outerWidth()-_1a.width()));
}else{
_1a.height(_1b.height());
_1a.width(_1b.width());
}
}
$(">div",_1a).triggerHandler("_resize");
}
};
function _1c(_1d){
$(_1d).addClass("tabs-container");
$(_1d).wrapInner("<div class=\"tabs-panels\"/>");
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_1d);
var _1e=$(">div.tabs-header",_1d);
$(">div.tabs-panels>div",_1d).each(function(){
if(!$(this).attr("id")){
$(this).attr("id","gen-tabs-panel"+$.fn.tabs.defaults.idSeed++);
}
var _1f={id:$(this).attr("id"),title:$(this).attr("title"),content:null,href:$(this).attr("href"),closable:$(this).attr("closable")=="true",icon:$(this).attr("icon"),selected:$(this).attr("selected")=="true",cache:$(this).attr("cache")=="false"?false:true};
$(this).attr("title","");
_31(_1d,_1f);
});
$(".tabs-scroller-left, .tabs-scroller-right",_1e).hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
$(_1d).bind("_resize",function(){
var _20=$.data(_1d,"tabs").options;
if(_20.fit==true){
_f(_1d);
_17(_1d);
}
return false;
});
};
function _21(_22){
var _23=$.data(_22,"tabs").options;
var _24=$(">div.tabs-header",_22);
var _25=$(">div.tabs-panels",_22);
var _26=$("ul.tabs",_24);
if(_23.plain==true){
_24.addClass("tabs-header-plain");
}else{
_24.removeClass("tabs-header-plain");
}
if(_23.border==true){
_24.removeClass("tabs-header-noborder");
_25.removeClass("tabs-panels-noborder");
}else{
_24.addClass("tabs-header-noborder");
_25.addClass("tabs-panels-noborder");
}
$("li",_26).unbind(".tabs").bind("click.tabs",function(){
$(".tabs-selected",_26).removeClass("tabs-selected");
$(this).addClass("tabs-selected");
$(this).blur();
$(">div.tabs-panels>div",_22).css("display","none");
var _27=$(".tabs-wrap",_24);
var _28=_1(_22,this);
var _29=_28-_27.scrollLeft();
var _2a=_29+$(this).outerWidth();
if(_29<0||_2a>_27.innerWidth()){
var pos=Math.min(_28-(_27.width()-$(this).width())/2,_4(_22));
_27.animate({scrollLeft:pos},_23.scrollDuration);
}
var _2b=$.data(this,"tabs.tab");
var _2c=$("#"+_2b.id);
_2c.css("display","block");
if(_2b.href&&(!_2b.loaded||!_2b.cache)){
_2c.load(_2b.href,null,function(){
if($.parser){
$.parser.parse(_2c);
}
_23.onLoad.apply(this,arguments);
_2b.loaded=true;
});
}
_17(_22);
_23.onSelect.call(_2c,_2b.title);
});
$("a.tabs-close",_26).unbind(".tabs").bind("click.tabs",function(){
var _2d=$(this).parent()[0];
var _2e=$.data(_2d,"tabs.tab");
_3b(_22,_2e.title);
});
$(".tabs-scroller-left",_24).unbind(".tabs").bind("click.tabs",function(){
var _2f=$(".tabs-wrap",_24);
var pos=_2f.scrollLeft()-_23.scrollIncrement;
_2f.animate({scrollLeft:pos},_23.scrollDuration);
});
$(".tabs-scroller-right",_24).unbind(".tabs").bind("click.tabs",function(){
var _30=$(".tabs-wrap",_24);
var pos=Math.min(_30.scrollLeft()+_23.scrollIncrement,_4(_22));
_30.animate({scrollLeft:pos},_23.scrollDuration);
});
};
function _31(_32,_33){
var _34=$(">div.tabs-header",_32);
var _35=$("ul.tabs",_34);
var tab=$("<li></li>");
var _36=$("<span></span>").html(_33.title);
var _37=$("<a class=\"tabs-inner\"></a>").attr("href","javascript:void(0)").append(_36);
tab.append(_37).appendTo(_35);
if(_33.closable){
_36.addClass("tabs-closable");
_37.after("<a href=\"javascript:void(0)\" class=\"tabs-close\"></a>");
}
if(_33.icon){
_36.addClass("tabs-with-icon");
_36.after($("<span/>").addClass("tabs-icon").addClass(_33.icon));
}
if(_33.selected){
tab.addClass("tabs-selected");
}
if(_33.content){
$("#"+_33.id).html(_33.content);
}
$("#"+_33.id).removeAttr("title");
$.data(tab[0],"tabs.tab",{id:_33.id,title:_33.title,href:_33.href,loaded:false,cache:_33.cache});
};
function _38(_39,_3a){
_3a=$.extend({id:null,title:"",content:"",href:null,cache:true,icon:null,closable:false,selected:true,height:"auto",width:"auto"},_3a||{});
if(_3a.selected){
$(".tabs-header .tabs-wrap .tabs li",_39).removeClass("tabs-selected");
}
_3a.id=_3a.id||"gen-tabs-panel"+$.fn.tabs.defaults.idSeed++;
$("<div></div>").attr("id",_3a.id).attr("title",_3a.title).height(_3a.height).width(_3a.width).appendTo($(">div.tabs-panels",_39));
_31(_39,_3a);
};
function _3b(_3c,_3d){
var _3e=$.data(_3c,"tabs").options;
var _3f=$(">div.tabs-header li:has(a span:contains(\""+_3d+"\"))",_3c)[0];
if(!_3f){
return;
}
var _40=$.data(_3f,"tabs.tab");
var _41=$("#"+_40.id);
if(_3e.onClose.call(_41,_40.title)==false){
return;
}
var _42=$(_3f).hasClass("tabs-selected");
$.removeData(_3f,"tabs.tab");
$(_3f).remove();
_41.remove();
_f(_3c);
if(_42){
_43(_3c);
}else{
var _44=$(">div.tabs-header .tabs-wrap",_3c);
var pos=Math.min(_44.scrollLeft(),_4(_3c));
_44.animate({scrollLeft:pos},_3e.scrollDuration);
}
};
function _43(_45,_46){
if(_46){
var _47=$(">div.tabs-header li:has(a span:contains(\""+_46+"\"))",_45)[0];
if(_47){
$(_47).trigger("click");
}
}else{
var _48=$(">div.tabs-header ul.tabs",_45);
if($(".tabs-selected",_48).length==0){
$("li:first",_48).trigger("click");
}else{
$(".tabs-selected",_48).trigger("click");
}
}
};
function _49(_4a,_4b){
return $(">div.tabs-header li:has(a span:contains(\""+_4b+"\"))",_4a).length>0;
};
$.fn.tabs=function(_4c,_4d){
if(typeof _4c=="string"){
switch(_4c){
case "resize":
return this.each(function(){
_f(this);
_17(this);
});
case "add":
return this.each(function(){
_38(this,_4d);
$(this).tabs();
});
case "close":
return this.each(function(){
_3b(this,_4d);
});
case "select":
return this.each(function(){
_43(this,_4d);
});
case "exists":
return _49(this[0],_4d);
}
}
_4c=_4c||{};
return this.each(function(){
var _4e=$.data(this,"tabs");
var _4f;
if(_4e){
_4f=$.extend(_4e.options,_4c);
_4e.options=_4f;
}else{
var t=$(this);
_4f=$.extend({},$.fn.tabs.defaults,{width:(parseInt(t.css("width"))||undefined),height:(parseInt(t.css("height"))||undefined),fit:(t.attr("fit")?t.attr("fit")=="true":undefined),border:(t.attr("border")?t.attr("border")=="true":undefined),plain:(t.attr("plain")?t.attr("plain")=="true":undefined)},_4c);
_1c(this);
$.data(this,"tabs",{options:_4f});
}
_21(this);
_f(this);
_43(this);
});
};
$.fn.tabs.defaults={width:"auto",height:"auto",idSeed:0,plain:false,fit:false,border:true,scrollIncrement:100,scrollDuration:400,onLoad:function(){
},onSelect:function(_50){
},onClose:function(_51){
}};
})(jQuery);

