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
var _1=false;
function _2(_3){
var _4=$.data(_3,"layout").options;
var _5=$.data(_3,"layout").panels;
var cc=$(_3);
if(_4.fit==true){
var p=cc.parent();
cc.width(p.width()).height(p.height());
}
var _6={top:0,left:0,width:cc.width(),height:cc.height()};
function _7(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:cc.width(),height:pp.panel("options").height,left:0,top:0});
_6.top+=pp.panel("options").height;
_6.height-=pp.panel("options").height;
};
if(_b(_5.expandNorth)){
_7(_5.expandNorth);
}else{
_7(_5.north);
}
function _8(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:cc.width(),height:pp.panel("options").height,left:0,top:cc.height()-pp.panel("options").height});
_6.height-=pp.panel("options").height;
};
if(_b(_5.expandSouth)){
_8(_5.expandSouth);
}else{
_8(_5.south);
}
function _9(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:pp.panel("options").width,height:_6.height,left:cc.width()-pp.panel("options").width,top:_6.top});
_6.width-=pp.panel("options").width;
};
if(_b(_5.expandEast)){
_9(_5.expandEast);
}else{
_9(_5.east);
}
function _a(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:pp.panel("options").width,height:_6.height,left:0,top:_6.top});
_6.left+=pp.panel("options").width;
_6.width-=pp.panel("options").width;
};
if(_b(_5.expandWest)){
_a(_5.expandWest);
}else{
_a(_5.west);
}
_5.center.panel("resize",_6);
};
function _c(_d){
var cc=$(_d);
if(cc[0].tagName=="BODY"){
$("html").css({height:"100%",overflow:"hidden"});
$("body").css({height:"100%",overflow:"hidden",border:"none"});
}
cc.addClass("layout");
cc.css({margin:0,padding:0});
function _e(_f){
var pp=$(">div[region="+_f+"]",_d).addClass("layout-body");
var _10=null;
if(_f=="north"){
_10="layout-button-up";
}else{
if(_f=="south"){
_10="layout-button-down";
}else{
if(_f=="east"){
_10="layout-button-right";
}else{
if(_f=="west"){
_10="layout-button-left";
}
}
}
}
var cls="layout-panel layout-panel-"+_f;
if(pp.attr("split")=="true"){
cls+=" layout-split-"+_f;
}
pp.panel({cls:cls,doSize:false,border:(pp.attr("border")=="false"?false:true),tools:[{iconCls:_10,handler:function(){
_1b(_d,_f);
}}]});
if(pp.attr("split")=="true"){
var _11=pp.panel("panel");
var _12="";
if(_f=="north"){
_12="s";
}
if(_f=="south"){
_12="n";
}
if(_f=="east"){
_12="w";
}
if(_f=="west"){
_12="e";
}
_11.resizable({handles:_12,onStartResize:function(e){
_1=true;
if(_f=="north"||_f=="south"){
var _13=$(">div.layout-split-proxy-v",_d);
}else{
var _13=$(">div.layout-split-proxy-h",_d);
}
var top=0,_14=0,_15=0,_16=0;
var pos={display:"block"};
if(_f=="north"){
pos.top=parseInt(_11.css("top"))+_11.outerHeight()-_13.height();
pos.left=parseInt(_11.css("left"));
pos.width=_11.outerWidth();
pos.height=_13.height();
}else{
if(_f=="south"){
pos.top=parseInt(_11.css("top"));
pos.left=parseInt(_11.css("left"));
pos.width=_11.outerWidth();
pos.height=_13.height();
}else{
if(_f=="east"){
pos.top=parseInt(_11.css("top"))||0;
pos.left=parseInt(_11.css("left"))||0;
pos.width=_13.width();
pos.height=_11.outerHeight();
}else{
if(_f=="west"){
pos.top=parseInt(_11.css("top"))||0;
pos.left=_11.outerWidth()-_13.width();
pos.width=_13.width();
pos.height=_11.outerHeight();
}
}
}
}
_13.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(_f=="north"||_f=="south"){
var _17=$(">div.layout-split-proxy-v",_d);
_17.css("top",e.pageY-$(_d).offset().top-_17.height()/2);
}else{
var _17=$(">div.layout-split-proxy-h",_d);
_17.css("left",e.pageX-$(_d).offset().left-_17.width()/2);
}
return false;
},onStopResize:function(){
$(">div.layout-split-proxy-v",_d).css("display","none");
$(">div.layout-split-proxy-h",_d).css("display","none");
var _18=pp.panel("options");
_18.width=_11.outerWidth();
_18.height=_11.outerHeight();
_18.left=_11.css("left");
_18.top=_11.css("top");
pp.panel("resize");
_2(_d);
_1=false;
cc.find(">div.layout-mask").remove();
}});
}
return pp;
};
$("<div class=\"layout-split-proxy-h\"></div>").appendTo(cc);
$("<div class=\"layout-split-proxy-v\"></div>").appendTo(cc);
var _19={center:_e("center")};
_19.north=_e("north");
_19.south=_e("south");
_19.east=_e("east");
_19.west=_e("west");
$(_d).bind("_resize",function(){
var _1a=$.data(_d,"layout").options;
if(_1a.fit==true){
_2(_d);
}
return false;
});
$(window).resize(function(){
_2(_d);
});
return _19;
};
function _1b(_1c,_1d){
var _1e=$.data(_1c,"layout").panels;
var cc=$(_1c);
function _1f(dir){
var _20;
if(dir=="east"){
_20="layout-button-left";
}else{
if(dir=="west"){
_20="layout-button-right";
}else{
if(dir=="north"){
_20="layout-button-down";
}else{
if(dir=="south"){
_20="layout-button-up";
}
}
}
}
var p=$("<div></div>").appendTo(cc).panel({cls:"layout-expand",title:"&nbsp;",closed:true,doSize:false,tools:[{iconCls:_20,handler:function(){
_21(_1c,_1d);
}}]});
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
if(_1d=="east"){
if(_1e.east.panel("options").onBeforeCollapse.call(_1e.east)==false){
return;
}
_1e.center.panel("resize",{width:_1e.center.panel("options").width+_1e.east.panel("options").width-28});
_1e.east.panel("panel").animate({left:cc.width()},function(){
_1e.east.panel("close");
_1e.expandEast.panel("open").panel("resize",{top:_1e.east.panel("options").top,left:cc.width()-28,width:28,height:_1e.east.panel("options").height});
_1e.east.panel("options").onCollapse.call(_1e.east);
});
if(!_1e.expandEast){
_1e.expandEast=_1f("east");
_1e.expandEast.panel("panel").click(function(){
_1e.east.panel("open").panel("resize",{left:cc.width()});
_1e.east.panel("panel").animate({left:cc.width()-_1e.east.panel("options").width});
return false;
});
}
}else{
if(_1d=="west"){
if(_1e.west.panel("options").onBeforeCollapse.call(_1e.west)==false){
return;
}
_1e.center.panel("resize",{width:_1e.center.panel("options").width+_1e.west.panel("options").width-28,left:28});
_1e.west.panel("panel").animate({left:-_1e.west.panel("options").width},function(){
_1e.west.panel("close");
_1e.expandWest.panel("open").panel("resize",{top:_1e.west.panel("options").top,left:0,width:28,height:_1e.west.panel("options").height});
_1e.west.panel("options").onCollapse.call(_1e.west);
});
if(!_1e.expandWest){
_1e.expandWest=_1f("west");
_1e.expandWest.panel("panel").click(function(){
_1e.west.panel("open").panel("resize",{left:-_1e.west.panel("options").width});
_1e.west.panel("panel").animate({left:0});
return false;
});
}
}else{
if(_1d=="north"){
if(_1e.north.panel("options").onBeforeCollapse.call(_1e.north)==false){
return;
}
var hh=cc.height()-28;
if(_b(_1e.expandSouth)){
hh-=_1e.expandSouth.panel("options").height;
}else{
if(_b(_1e.south)){
hh-=_1e.south.panel("options").height;
}
}
_1e.center.panel("resize",{top:28,height:hh});
_1e.east.panel("resize",{top:28,height:hh});
_1e.west.panel("resize",{top:28,height:hh});
if(_b(_1e.expandEast)){
_1e.expandEast.panel("resize",{top:28,height:hh});
}
if(_b(_1e.expandWest)){
_1e.expandWest.panel("resize",{top:28,height:hh});
}
_1e.north.panel("panel").animate({top:-_1e.north.panel("options").height},function(){
_1e.north.panel("close");
_1e.expandNorth.panel("open").panel("resize",{top:0,left:0,width:cc.width(),height:28});
_1e.north.panel("options").onCollapse.call(_1e.north);
});
if(!_1e.expandNorth){
_1e.expandNorth=_1f("north");
_1e.expandNorth.panel("panel").click(function(){
_1e.north.panel("open").panel("resize",{top:-_1e.north.panel("options").height});
_1e.north.panel("panel").animate({top:0});
return false;
});
}
}else{
if(_1d=="south"){
if(_1e.south.panel("options").onBeforeCollapse.call(_1e.south)==false){
return;
}
var hh=cc.height()-28;
if(_b(_1e.expandNorth)){
hh-=_1e.expandNorth.panel("options").height;
}else{
if(_b(_1e.north)){
hh-=_1e.north.panel("options").height;
}
}
_1e.center.panel("resize",{height:hh});
_1e.east.panel("resize",{height:hh});
_1e.west.panel("resize",{height:hh});
if(_b(_1e.expandEast)){
_1e.expandEast.panel("resize",{height:hh});
}
if(_b(_1e.expandWest)){
_1e.expandWest.panel("resize",{height:hh});
}
_1e.south.panel("panel").animate({top:cc.height()},function(){
_1e.south.panel("close");
_1e.expandSouth.panel("open").panel("resize",{top:cc.height()-28,left:0,width:cc.width(),height:28});
_1e.south.panel("options").onCollapse.call(_1e.south);
});
if(!_1e.expandSouth){
_1e.expandSouth=_1f("south");
_1e.expandSouth.panel("panel").click(function(){
_1e.south.panel("open").panel("resize",{top:cc.height()});
_1e.south.panel("panel").animate({top:cc.height()-_1e.south.panel("options").height});
return false;
});
}
}
}
}
}
};
function _21(_22,_23){
var _24=$.data(_22,"layout").panels;
var cc=$(_22);
if(_23=="east"&&_24.expandEast){
if(_24.east.panel("options").onBeforeExpand.call(_24.east)==false){
return;
}
_24.expandEast.panel("close");
_24.east.panel("panel").stop(true,true);
_24.east.panel("open").panel("resize",{left:cc.width()});
_24.east.panel("panel").animate({left:cc.width()-_24.east.panel("options").width},function(){
_2(_22);
_24.east.panel("options").onExpand.call(_24.east);
});
}else{
if(_23=="west"&&_24.expandWest){
if(_24.west.panel("options").onBeforeExpand.call(_24.west)==false){
return;
}
_24.expandWest.panel("close");
_24.west.panel("panel").stop(true,true);
_24.west.panel("open").panel("resize",{left:-_24.west.panel("options").width});
_24.west.panel("panel").animate({left:0},function(){
_2(_22);
_24.west.panel("options").onExpand.call(_24.west);
});
}else{
if(_23=="north"&&_24.expandNorth){
if(_24.north.panel("options").onBeforeExpand.call(_24.north)==false){
return;
}
_24.expandNorth.panel("close");
_24.north.panel("panel").stop(true,true);
_24.north.panel("open").panel("resize",{top:-_24.north.panel("options").height});
_24.north.panel("panel").animate({top:0},function(){
_2(_22);
_24.north.panel("options").onExpand.call(_24.north);
});
}else{
if(_23=="south"&&_24.expandSouth){
if(_24.south.panel("options").onBeforeExpand.call(_24.south)==false){
return;
}
_24.expandSouth.panel("close");
_24.south.panel("panel").stop(true,true);
_24.south.panel("open").panel("resize",{top:cc.height()});
_24.south.panel("panel").animate({top:cc.height()-_24.south.panel("options").height},function(){
_2(_22);
_24.south.panel("options").onExpand.call(_24.south);
});
}
}
}
}
};
function _25(_26){
var _27=$.data(_26,"layout").panels;
var cc=$(_26);
if(_27.east.length){
_27.east.panel("panel").bind("mouseover","east",_1b);
}
if(_27.west.length){
_27.west.panel("panel").bind("mouseover","west",_1b);
}
if(_27.north.length){
_27.north.panel("panel").bind("mouseover","north",_1b);
}
if(_27.south.length){
_27.south.panel("panel").bind("mouseover","south",_1b);
}
_27.center.panel("panel").bind("mouseover","center",_1b);
function _1b(e){
if(_1==true){
return;
}
if(e.data!="east"&&_b(_27.east)&&_b(_27.expandEast)){
_27.east.panel("panel").animate({left:cc.width()},function(){
_27.east.panel("close");
});
}
if(e.data!="west"&&_b(_27.west)&&_b(_27.expandWest)){
_27.west.panel("panel").animate({left:-_27.west.panel("options").width},function(){
_27.west.panel("close");
});
}
if(e.data!="north"&&_b(_27.north)&&_b(_27.expandNorth)){
_27.north.panel("panel").animate({top:-_27.north.panel("options").height},function(){
_27.north.panel("close");
});
}
if(e.data!="south"&&_b(_27.south)&&_b(_27.expandSouth)){
_27.south.panel("panel").animate({top:cc.height()},function(){
_27.south.panel("close");
});
}
return false;
};
};
function _b(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
$.fn.layout=function(_28,_29){
if(typeof _28=="string"){
switch(_28){
case "panel":
return $.data(this[0],"layout").panels[_29];
case "collapse":
return this.each(function(){
_1b(this,_29);
});
case "expand":
return this.each(function(){
_21(this,_29);
});
}
}
return this.each(function(){
var _2a=$.data(this,"layout");
if(!_2a){
var _2b=$.extend({},{fit:$(this).attr("fit")=="true"});
$.data(this,"layout",{options:_2b,panels:_c(this)});
_25(this);
}
_2(this);
});
};
})(jQuery);

