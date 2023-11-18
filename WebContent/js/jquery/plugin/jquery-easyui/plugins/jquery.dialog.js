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
var t=$(_2);
t.wrapInner("<div class=\"dialog-content\"></div>");
var _3=t.find(">div.dialog-content");
_3.css("padding",t.css("padding"));
t.css("padding",0);
_3.panel({border:false});
return _3;
};
function _4(_5){
var _6=$.data(_5,"dialog").options;
var _7=$.data(_5,"dialog").contentPanel;
$(_5).find("div.dialog-toolbar").remove();
$(_5).find("div.dialog-button").remove();
if(_6.toolbar){
var _8=$("<div class=\"dialog-toolbar\"></div>").prependTo(_5);
for(var i=0;i<_6.toolbar.length;i++){
var p=_6.toolbar[i];
if(p=="-"){
_8.append("<div class=\"dialog-tool-separator\"></div>");
}else{
var _9=$("<a href=\"javascript:void(0)\"></a>").appendTo(_8);
_9.css("float","left").text(p.text);
if(p.iconCls){
_9.attr("icon",p.iconCls);
}
if(p.handler){
_9[0].onclick=p.handler;
}
_9.linkbutton({plain:true,disabled:(p.disabled||false)});
}
}
_8.append("<div style=\"clear:both\"></div>");
}
if(_6.buttons){
var _a=$("<div class=\"dialog-button\"></div>").appendTo(_5);
for(var i=0;i<_6.buttons.length;i++){
var p=_6.buttons[i];
var _b=$("<a href=\"javascript:void(0)\"></a>").appendTo(_a);
_b.text(p.text);
if(p.iconCls){
_b.attr("icon",p.iconCls);
}
if(p.handler){
_b[0].onclick=p.handler;
}
_b.linkbutton();
}
}
if(_6.href){
_7.panel({href:_6.href,onLoad:_6.onLoad});
_6.href=null;
}
$(_5).window($.extend({},_6,{onResize:function(_c,_d){
var _e=$(_5).panel("panel").find(">div.panel-body");
_7.panel("resize",{width:_e.width(),height:(_d=="auto")?"auto":_e.height()-_e.find(">div.dialog-toolbar").outerHeight()-_e.find(">div.dialog-button").outerHeight()});
if(_6.onResize){
_6.onResize.call(_5,_c,_d);
}
}}));
};
function _f(_10){
var _11=$.data(_10,"dialog").contentPanel;
_11.panel("refresh");
};
$.fn.dialog=function(_12,_13){
if(typeof _12=="string"){
switch(_12){
case "options":
return $(this[0]).window("options");
case "dialog":
return $(this[0]).window("window");
case "setTitle":
return this.each(function(){
$(this).window("setTitle",_13);
});
case "open":
return this.each(function(){
$(this).window("open",_13);
});
case "close":
return this.each(function(){
$(this).window("close",_13);
});
case "destroy":
return this.each(function(){
$(this).window("destroy",_13);
});
case "refresh":
return this.each(function(){
_f(this);
});
case "resize":
return this.each(function(){
$(this).window("resize",_13);
});
case "move":
return this.each(function(){
$(this).window("move",_13);
});
}
}
_12=_12||{};
return this.each(function(){
var _14=$.data(this,"dialog");
if(_14){
$.extend(_14.options,_12);
}else{
var t=$(this);
var _15=$.extend({},$.fn.dialog.defaults,{title:(t.attr("title")?t.attr("title"):undefined),href:t.attr("href"),collapsible:(t.attr("collapsible")?t.attr("collapsible")=="true":undefined),minimizable:(t.attr("minimizable")?t.attr("minimizable")=="true":undefined),maximizable:(t.attr("maximizable")?t.attr("maximizable")=="true":undefined),resizable:(t.attr("resizable")?t.attr("resizable")=="true":undefined)},_12);
$.data(this,"dialog",{options:_15,contentPanel:_1(this)});
}
_4(this);
});
};
$.fn.dialog.defaults={title:"New Dialog",href:null,collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null};
})(jQuery);

