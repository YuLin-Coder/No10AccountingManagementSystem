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
$(_2).panel("resize");
};
function _4(_5,_6){
var _7=$.data(_5,"window");
var _8;
if(_7){
_8=$.extend(_7.opts,_6);
}else{
var t=$(_5);
_8=$.extend({},$.fn.window.defaults,{title:t.attr("title"),collapsible:(t.attr("collapsible")?t.attr("collapsible")=="true":undefined),minimizable:(t.attr("minimizable")?t.attr("minimizable")=="true":undefined),maximizable:(t.attr("maximizable")?t.attr("maximizable")=="true":undefined),closable:(t.attr("closable")?t.attr("closable")=="true":undefined),closed:(t.attr("closed")?t.attr("closed")=="true":undefined),shadow:(t.attr("shadow")?t.attr("shadow")=="true":undefined),modal:(t.attr("modal")?t.attr("modal")=="true":undefined)},_6);
$(_5).attr("title","");
_7=$.data(_5,"window",{});
}
var _9=$(_5).panel($.extend({},_8,{border:false,doSize:true,closed:true,cls:"window",headerCls:"window-header",bodyCls:"window-body",onBeforeDestroy:function(){
if(_8.onBeforeDestroy){
if(_8.onBeforeDestroy.call(_5)==false){
return false;
}
}
var _a=$.data(_5,"window");
if(_a.shadow){
_a.shadow.remove();
}
if(_a.mask){
_a.mask.remove();
}
},onClose:function(){
var _b=$.data(_5,"window");
if(_b.shadow){
_b.shadow.hide();
}
if(_b.mask){
_b.mask.hide();
}
if(_8.onClose){
_8.onClose.call(_5);
}
},onOpen:function(){
var _c=$.data(_5,"window");
if(_c.mask){
_c.mask.css({display:"block",zIndex:$.fn.window.defaults.zIndex++});
}
if(_c.shadow){
_c.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:_c.options.left,top:_c.options.top,width:_c.window.outerWidth(),height:_c.window.outerHeight()});
}
_c.window.css("z-index",$.fn.window.defaults.zIndex++);
if(_8.onOpen){
_8.onOpen.call(_5);
}
},onResize:function(_d,_e){
var _f=$.data(_5,"window");
if(_f.shadow){
_f.shadow.css({left:_f.options.left,top:_f.options.top,width:_f.window.outerWidth(),height:_f.window.outerHeight()});
}
if(_8.onResize){
_8.onResize.call(_5,_d,_e);
}
},onMove:function(_10,top){
var _11=$.data(_5,"window");
if(_11.shadow){
_11.shadow.css({left:_11.options.left,top:_11.options.top});
}
if(_8.onMove){
_8.onMove.call(_5,_10,top);
}
},onMinimize:function(){
var _12=$.data(_5,"window");
if(_12.shadow){
_12.shadow.hide();
}
if(_12.mask){
_12.mask.hide();
}
if(_8.onMinimize){
_8.onMinimize.call(_5);
}
},onBeforeCollapse:function(){
if(_8.onBeforeCollapse){
if(_8.onBeforeCollapse.call(_5)==false){
return false;
}
}
var _13=$.data(_5,"window");
if(_13.shadow){
_13.shadow.hide();
}
},onExpand:function(){
var _14=$.data(_5,"window");
if(_14.shadow){
_14.shadow.show();
}
if(_8.onExpand){
_8.onExpand.call(_5);
}
}}));
_7.options=_9.panel("options");
_7.opts=_8;
_7.window=_9.panel("panel");
if(_7.mask){
_7.mask.remove();
}
if(_8.modal==true){
_7.mask=$("<div class=\"window-mask\"></div>").appendTo("body");
_7.mask.css({width:_15().width,height:_15().height,display:"none"});
}
if(_7.shadow){
_7.shadow.remove();
}
if(_8.shadow==true){
_7.shadow=$("<div class=\"window-shadow\"></div>").insertAfter(_7.window);
_7.shadow.css({display:"none"});
}
if(_7.options.left==null){
var _16=_7.options.width;
if(isNaN(_16)){
_16=_7.window.outerWidth();
}
_7.options.left=($(window).width()-_16)/2+$(document).scrollLeft();
}
if(_7.options.top==null){
var _17=_7.window.height;
if(isNaN(_17)){
_17=_7.window.outerHeight();
}
_7.options.top=($(window).height()-_17)/2+$(document).scrollTop();
}
_9.window("move");
if(_7.opts.closed==false){
_9.window("open");
}
};
function _18(_19){
var _1a=$.data(_19,"window");
_1a.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_1a.options.draggable==false,onStartDrag:function(e){
if(_1a.mask){
_1a.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_1a.shadow){
_1a.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_1a.window.css("z-index",$.fn.window.defaults.zIndex++);
if(!_1a.proxy){
_1a.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_1a.window);
}
_1a.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:($.boxModel==true?(_1a.window.outerWidth()-(_1a.proxy.outerWidth()-_1a.proxy.width())):_1a.window.outerWidth()),height:($.boxModel==true?(_1a.window.outerHeight()-(_1a.proxy.outerHeight()-_1a.proxy.height())):_1a.window.outerHeight())});
setTimeout(function(){
if(_1a.proxy){
_1a.proxy.show();
}
},500);
},onDrag:function(e){
_1a.proxy.css({display:"block",left:e.data.left,top:e.data.top});
return false;
},onStopDrag:function(e){
_1a.options.left=e.data.left;
_1a.options.top=e.data.top;
$(_19).window("move");
_1a.proxy.remove();
_1a.proxy=null;
}});
_1a.window.resizable({disabled:_1a.options.resizable==false,onStartResize:function(e){
if(!_1a.proxy){
_1a.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_1a.window);
}
_1a.proxy.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:($.boxModel==true?(e.data.width-(_1a.proxy.outerWidth()-_1a.proxy.width())):e.data.width),height:($.boxModel==true?(e.data.height-(_1a.proxy.outerHeight()-_1a.proxy.height())):e.data.height)});
},onResize:function(e){
_1a.proxy.css({left:e.data.left,top:e.data.top,width:($.boxModel==true?(e.data.width-(_1a.proxy.outerWidth()-_1a.proxy.width())):e.data.width),height:($.boxModel==true?(e.data.height-(_1a.proxy.outerHeight()-_1a.proxy.height())):e.data.height)});
return false;
},onStopResize:function(e){
_1a.options.left=e.data.left;
_1a.options.top=e.data.top;
_1a.options.width=e.data.width;
_1a.options.height=e.data.height;
_1(_19);
_1a.proxy.remove();
_1a.proxy=null;
}});
};
function _15(){
if(document.compatMode=="BackCompat"){
return {width:Math.max(document.body.scrollWidth,document.body.clientWidth),height:Math.max(document.body.scrollHeight,document.body.clientHeight)};
}else{
return {width:Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),height:Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)};
}
};
$(window).resize(function(){
$(".window-mask").css({width:$(window).width(),height:$(window).height()});
setTimeout(function(){
$(".window-mask").css({width:_15().width,height:_15().height});
},50);
});
$.fn.window=function(_1b,_1c){
if(typeof _1b=="string"){
switch(_1b){
case "options":
return $.data(this[0],"window").options;
case "window":
return $.data(this[0],"window").window;
case "setTitle":
return this.each(function(){
$(this).panel("setTitle",_1c);
});
case "open":
return this.each(function(){
$(this).panel("open",_1c);
});
case "close":
return this.each(function(){
$(this).panel("close",_1c);
});
case "destroy":
return this.each(function(){
$(this).panel("destroy",_1c);
});
case "refresh":
return this.each(function(){
$(this).panel("refresh");
});
case "resize":
return this.each(function(){
$(this).panel("resize",_1c);
});
case "move":
return this.each(function(){
$(this).panel("move",_1c);
});
}
}
_1b=_1b||{};
return this.each(function(){
_4(this,_1b);
_18(this);
});
};
$.fn.window.defaults={zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false};
})(jQuery);

