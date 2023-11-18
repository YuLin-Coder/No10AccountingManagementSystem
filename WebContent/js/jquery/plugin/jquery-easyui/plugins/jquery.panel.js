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
_2.each(function(){
$(this).remove();
if($.browser.msie){
this.outerHTML="";
}
});
};
function _3(_4,_5){
var _6=$.data(_4,"panel").options;
var _7=$.data(_4,"panel").panel;
var _8=_7.find(">div.panel-header");
var _9=_7.find(">div.panel-body");
if(_5){
if(_5.width){
_6.width=_5.width;
}
if(_5.height){
_6.height=_5.height;
}
if(_5.left!=null){
_6.left=_5.left;
}
if(_5.top!=null){
_6.top=_5.top;
}
}
if(_6.fit==true){
var p=_7.parent();
_6.width=p.width();
_6.height=p.height();
}
_7.css({left:_6.left,top:_6.top});
_7.css(_6.style);
_7.addClass(_6.cls);
_8.addClass(_6.headerCls);
_9.addClass(_6.bodyCls);
if(!isNaN(_6.width)){
if($.boxModel==true){
_7.width(_6.width-(_7.outerWidth()-_7.width()));
_8.width(_7.width()-(_8.outerWidth()-_8.width()));
_9.width(_7.width()-(_9.outerWidth()-_9.width()));
}else{
_7.width(_6.width);
_8.width(_7.width());
_9.width(_7.width());
}
}else{
_7.width("auto");
_9.width("auto");
}
if(!isNaN(_6.height)){
if($.boxModel==true){
_7.height(_6.height-(_7.outerHeight()-_7.height()));
_9.height(_7.height()-_8.outerHeight()-(_9.outerHeight()-_9.height()));
}else{
_7.height(_6.height);
_9.height(_7.height()-_8.outerHeight());
}
}else{
_9.height("auto");
}
_7.css("height",null);
_6.onResize.apply(_4,[_6.width,_6.height]);
_7.find(">div.panel-body>div").triggerHandler("_resize");
};
function _a(_b,_c){
var _d=$.data(_b,"panel").options;
var _e=$.data(_b,"panel").panel;
if(_c){
if(_c.left!=null){
_d.left=_c.left;
}
if(_c.top!=null){
_d.top=_c.top;
}
}
_e.css({left:_d.left,top:_d.top});
_d.onMove.apply(_b,[_d.left,_d.top]);
};
function _f(_10){
var _11=$(_10).addClass("panel-body").wrap("<div class=\"panel\"></div>").parent();
_11.bind("_resize",function(){
var _12=$.data(_10,"panel").options;
if(_12.fit==true){
_3(_10);
}
return false;
});
return _11;
};
function _13(_14){
var _15=$.data(_14,"panel").options;
var _16=$.data(_14,"panel").panel;
_1(_16.find(">div.panel-header"));
if(_15.title){
var _17=$("<div class=\"panel-header\"><div class=\"panel-title\">"+_15.title+"</div></div>").prependTo(_16);
if(_15.iconCls){
_17.find(".panel-title").addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(_15.iconCls).appendTo(_17);
}
var _18=$("<div class=\"panel-tool\"></div>").appendTo(_17);
if(_15.closable){
$("<div class=\"panel-tool-close\"></div>").appendTo(_18).bind("click",_19);
}
if(_15.maximizable){
$("<div class=\"panel-tool-max\"></div>").appendTo(_18).bind("click",_1a);
}
if(_15.minimizable){
$("<div class=\"panel-tool-min\"></div>").appendTo(_18).bind("click",_1b);
}
if(_15.collapsible){
$("<div class=\"panel-tool-collapse\"></div>").appendTo(_18).bind("click",_1c);
}
if(_15.tools){
for(var i=_15.tools.length-1;i>=0;i--){
var t=$("<div></div>").addClass(_15.tools[i].iconCls).appendTo(_18);
if(_15.tools[i].handler){
t.bind("click",eval(_15.tools[i].handler));
}
}
}
_18.find("div").hover(function(){
$(this).addClass("panel-tool-over");
},function(){
$(this).removeClass("panel-tool-over");
});
_16.find(">div.panel-body").removeClass("panel-body-noheader");
}else{
_16.find(">div.panel-body").addClass("panel-body-noheader");
}
function _1c(){
if($(this).hasClass("panel-tool-expand")){
_36(_14,true);
}else{
_30(_14,true);
}
return false;
};
function _1b(){
_40(_14);
return false;
};
function _1a(){
if($(this).hasClass("panel-tool-restore")){
_44(_14);
}else{
_3c(_14);
}
return false;
};
function _19(){
_1d(_14);
return false;
};
};
function _1e(_1f){
var _20=$.data(_1f,"panel");
if(_20.options.href&&!_20.isLoaded){
_20.isLoaded=false;
var _21=_20.panel.find(">.panel-body");
_21.html($("<div class=\"panel-loading\"></div>").html(_20.options.loadingMessage));
_21.load(_20.options.href,null,function(){
if($.parser){
$.parser.parse(_21);
}
_20.options.onLoad.apply(_1f,arguments);
_20.isLoaded=true;
});
}
};
function _22(_23,_24){
var _25=$.data(_23,"panel").options;
var _26=$.data(_23,"panel").panel;
if(_24!=true){
if(_25.onBeforeOpen.call(_23)==false){
return;
}
}
_26.show();
_25.closed=false;
_25.onOpen.call(_23);
};
function _1d(_27,_28){
var _29=$.data(_27,"panel").options;
var _2a=$.data(_27,"panel").panel;
if(_28!=true){
if(_29.onBeforeClose.call(_27)==false){
return;
}
}
_2a.hide();
_29.closed=true;
_29.onClose.call(_27);
};
function _2b(_2c,_2d){
var _2e=$.data(_2c,"panel").options;
var _2f=$.data(_2c,"panel").panel;
if(_2d!=true){
if(_2e.onBeforeDestroy.call(_2c)==false){
return;
}
}
_1(_2f);
_2e.onDestroy.call(_2c);
};
function _30(_31,_32){
var _33=$.data(_31,"panel").options;
var _34=$.data(_31,"panel").panel;
var _35=_34.find(">div.panel-body");
_35.stop(true,true);
if(_33.onBeforeCollapse.call(_31)==false){
return;
}
_34.find(">div.panel-header .panel-tool-collapse").addClass("panel-tool-expand");
if(_32==true){
_35.slideUp("normal",function(){
_33.collapsed=true;
_33.onCollapse.call(_31);
});
}else{
_35.hide();
_33.collapsed=true;
_33.onCollapse.call(_31);
}
};
function _36(_37,_38){
var _39=$.data(_37,"panel").options;
var _3a=$.data(_37,"panel").panel;
var _3b=_3a.find(">div.panel-body");
_3b.stop(true,true);
if(_39.onBeforeExpand.call(_37)==false){
return;
}
_3a.find(">div.panel-header .panel-tool-collapse").removeClass("panel-tool-expand");
if(_38==true){
_3b.slideDown("normal",function(){
_39.collapsed=false;
_39.onExpand.call(_37);
});
}else{
_3b.show();
_39.collapsed=false;
_39.onExpand.call(_37);
}
};
function _3c(_3d){
var _3e=$.data(_3d,"panel").options;
var _3f=$.data(_3d,"panel").panel;
_3f.find(">div.panel-header .panel-tool-max").addClass("panel-tool-restore");
$.data(_3d,"panel").original={width:_3e.width,height:_3e.height,left:_3e.left,top:_3e.top,fit:_3e.fit};
_3e.left=0;
_3e.top=0;
_3e.fit=true;
_3(_3d);
_3e.minimized=false;
_3e.maximized=true;
_3e.onMaximize.call(_3d);
};
function _40(_41){
var _42=$.data(_41,"panel").options;
var _43=$.data(_41,"panel").panel;
_43.hide();
_42.minimized=true;
_42.maximized=false;
_42.onMinimize.call(_41);
};
function _44(_45){
var _46=$.data(_45,"panel").options;
var _47=$.data(_45,"panel").panel;
_47.show();
_47.find(">div.panel-header .panel-tool-max").removeClass("panel-tool-restore");
var _48=$.data(_45,"panel").original;
_46.width=_48.width;
_46.height=_48.height;
_46.left=_48.left;
_46.top=_48.top;
_46.fit=_48.fit;
_3(_45);
_46.minimized=false;
_46.maximized=false;
_46.onRestore.call(_45);
};
function _49(_4a){
var _4b=$.data(_4a,"panel").options;
var _4c=$.data(_4a,"panel").panel;
if(_4b.border==true){
_4c.find(">div.panel-header").removeClass("panel-header-noborder");
_4c.find(">div.panel-body").removeClass("panel-body-noborder");
}else{
_4c.find(">div.panel-header").addClass("panel-header-noborder");
_4c.find(">div.panel-body").addClass("panel-body-noborder");
}
};
function _4d(_4e,_4f){
$.data(_4e,"panel").options.title=_4f;
$(_4e).panel("header").find("div.panel-title").html(_4f);
};
$.fn.panel=function(_50,_51){
if(typeof _50=="string"){
switch(_50){
case "options":
return $.data(this[0],"panel").options;
case "panel":
return $.data(this[0],"panel").panel;
case "header":
return $.data(this[0],"panel").panel.find(">div.panel-header");
case "body":
return $.data(this[0],"panel").panel.find(">div.panel-body");
case "setTitle":
return this.each(function(){
_4d(this,_51);
});
case "open":
return this.each(function(){
_22(this,_51);
});
case "close":
return this.each(function(){
_1d(this,_51);
});
case "destroy":
return this.each(function(){
_2b(this,_51);
});
case "refresh":
return this.each(function(){
$.data(this,"panel").isLoaded=false;
_1e(this);
});
case "resize":
return this.each(function(){
_3(this,_51);
});
case "move":
return this.each(function(){
_a(this,_51);
});
}
}
_50=_50||{};
return this.each(function(){
var _52=$.data(this,"panel");
var _53;
if(_52){
_53=$.extend(_52.options,_50);
}else{
var t=$(this);
_53=$.extend({},$.fn.panel.defaults,{width:(parseInt(t.css("width"))||undefined),height:(parseInt(t.css("height"))||undefined),left:(parseInt(t.css("left"))||undefined),top:(parseInt(t.css("top"))||undefined),title:t.attr("title"),iconCls:t.attr("icon"),cls:t.attr("cls"),headerCls:t.attr("headerCls"),bodyCls:t.attr("bodyCls"),href:t.attr("href"),fit:(t.attr("fit")?t.attr("fit")=="true":undefined),border:(t.attr("border")?t.attr("border")=="true":undefined),collapsible:(t.attr("collapsible")?t.attr("collapsible")=="true":undefined),minimizable:(t.attr("minimizable")?t.attr("minimizable")=="true":undefined),maximizable:(t.attr("maximizable")?t.attr("maximizable")=="true":undefined),closable:(t.attr("closable")?t.attr("closable")=="true":undefined),collapsed:(t.attr("collapsed")?t.attr("collapsed")=="true":undefined),minimized:(t.attr("minimized")?t.attr("minimized")=="true":undefined),maximized:(t.attr("maximized")?t.attr("maximized")=="true":undefined),closed:(t.attr("closed")?t.attr("closed")=="true":undefined)},_50);
t.attr("title","");
_52=$.data(this,"panel",{options:_53,panel:_f(this),isLoaded:false});
}
_13(this);
_49(this);
_1e(this);
if(_53.doSize==true){
_52.panel.css("display","block");
_3(this);
}
if(_53.closed==true){
_52.panel.hide();
}else{
_22(this);
if(_53.maximized==true){
_3c(this);
}
if(_53.minimized==true){
_40(this);
}
if(_53.collapsed==true){
_30(this);
}
}
});
};
$.fn.panel.defaults={title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},fit:false,border:true,doSize:true,collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,tools:[],href:null,loadingMessage:"Loading...",onLoad:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_54,_55){
},onMove:function(_56,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);

