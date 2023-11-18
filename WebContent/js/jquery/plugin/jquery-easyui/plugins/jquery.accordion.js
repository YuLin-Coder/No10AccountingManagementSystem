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
var _3=$.data(_2,"accordion").options;
var _4=$.data(_2,"accordion").panels;
var cc=$(_2);
if(_3.fit==true){
var p=cc.parent();
_3.width=p.width();
_3.height=p.height();
}
if(_3.width>0){
cc.width($.boxModel==true?(_3.width-(cc.outerWidth()-cc.width())):_3.width);
}
var _5="auto";
if(_3.height>0){
cc.height($.boxModel==true?(_3.height-(cc.outerHeight()-cc.height())):_3.height);
var _6=_4[0].panel("header").css("height",null).outerHeight();
var _5=cc.height()-(_4.length-1)*_6;
}
for(var i=0;i<_4.length;i++){
var _7=_4[i];
var _8=_7.panel("header");
_8.height($.boxModel==true?(_6-(_8.outerHeight()-_8.height())):_6);
_7.panel("resize",{width:cc.width(),height:_5});
}
};
function _9(_a){
var _b=$.data(_a,"accordion").panels;
for(var i=0;i<_b.length;i++){
var _c=_b[i];
if(_c.panel("options").collapsed==false){
return _c;
}
}
return null;
};
function _d(_e){
var cc=$(_e);
cc.addClass("accordion");
if(cc.attr("border")=="false"){
cc.addClass("accordion-noborder");
}else{
cc.removeClass("accordion-noborder");
}
var _f=[];
if(cc.find(">div[selected=true]").length==0){
cc.find(">div:first").attr("selected","true");
}
cc.find(">div").each(function(){
var pp=$(this);
_f.push(pp);
pp.panel({collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:pp.attr("selected")!="true",onBeforeExpand:function(){
var _10=_9(_e);
if(_10){
var _11=$(_10).panel("header");
_11.removeClass("accordion-header-selected");
_11.find(".panel-tool-collapse").triggerHandler("click");
}
pp.panel("header").addClass("accordion-header-selected");
},onExpand:function(){
if($.parser){
$.parser.parse(pp.panel("body"));
}
pp.panel("body").find(">div").triggerHandler("_resize");
},onBeforeCollapse:function(){
pp.panel("header").removeClass("accordion-header-selected");
}});
pp.panel("body").addClass("accordion-body");
pp.panel("header").addClass("accordion-header").click(function(){
$(this).find(".panel-tool-collapse").triggerHandler("click");
return false;
});
});
cc.bind("_resize",function(){
var _12=$.data(_e,"accordion").options;
if(_12.fit==true){
_1(_e);
}
return false;
});
return {accordion:cc,panels:_f};
};
function _13(_14,_15){
var _16=$.data(_14,"accordion").panels;
var _17=_9(_14);
if(_17&&_18(_17)==_15){
return;
}
for(var i=0;i<_16.length;i++){
var _19=_16[i];
if(_18(_19)==_15){
$(_19).panel("header").triggerHandler("click");
return;
}
}
_17=_9(_14);
_17.panel("header").addClass("accordion-header-selected");
function _18(_1a){
return $(_1a).panel("options").title;
};
};
$.fn.accordion=function(_1b,_1c){
if(typeof _1b=="string"){
switch(_1b){
case "select":
return this.each(function(){
_13(this,_1c);
});
}
}
_1b=_1b||{};
return this.each(function(){
var _1d=$.data(this,"accordion");
var _1e;
if(_1d){
_1e=$.extend(_1d.options,_1b);
_1d.opts=_1e;
}else{
var t=$(this);
_1e=$.extend({},$.fn.accordion.defaults,{width:(parseInt(t.css("width"))||undefined),height:(parseInt(t.css("height"))||undefined),fit:(t.attr("fit")?t.attr("fit")=="true":undefined),border:(t.attr("border")?t.attr("border")=="true":undefined)},_1b);
var r=_d(this);
$.data(this,"accordion",{options:_1e,accordion:r.accordion,panels:r.panels});
}
_1(this);
_13(this);
});
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true};
})(jQuery);

