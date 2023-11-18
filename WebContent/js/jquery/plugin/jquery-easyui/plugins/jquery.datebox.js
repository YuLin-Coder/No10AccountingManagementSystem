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
var _3=$(_2);
var _4=$("<div class=\"datebox-calendar\">"+"<div class=\"datebox-calendar-inner\">"+"<div></div>"+"</div>"+"<div class=\"datebox-button\"></div>"+"</div>").appendTo("body");
_4.find("div.datebox-calendar-inner>div").calendar({fit:true,border:false,onSelect:function(_5){
var _6=$.data(_2,"datebox").options;
var v=_6.formatter(_5);
$(_2).val(v);
_4.hide();
_1b(_2,true);
_6.onSelect.call(_2,_5);
}});
_4.hide().mousedown(function(){
return false;
});
return _4;
};
function _7(_8){
var _9=$(_8);
$(document).unbind(".datebox");
_9.unbind(".datebox");
$.data(_8,"datebox").calendar.remove();
_9.remove();
};
function _a(_b){
var _c=$.data(_b,"datebox").options;
var _d=$(_b);
$(document).unbind(".datebox");
_d.unbind(".datebox");
if(!_c.disabled){
$(document).bind("mousedown.datebox",function(){
$("body>div.datebox-calendar").hide();
});
_d.bind("focus.datebox",function(){
_e(_b);
}).bind("click.datebox",function(){
_e(_b);
});
}
};
function _f(_10){
var _11=$.data(_10,"datebox").options;
var _12=$.data(_10,"datebox").calendar;
var _13=_12.find("div.datebox-button");
_13.empty();
$("<a href=\"javascript:void(0)\" class=\"datebox-current\"></a>").html(_11.currentText).appendTo(_13);
$("<a href=\"javascript:void(0)\" class=\"datebox-close\"></a>").html(_11.closeText).appendTo(_13);
_13.find(".datebox-current,.datebox-close").hover(function(){
$(this).addClass("datebox-button-hover");
},function(){
$(this).removeClass("datebox-button-hover");
});
_13.find(".datebox-current").click(function(){
_12.find("div.datebox-calendar-inner>div").calendar({year:new Date().getFullYear(),month:new Date().getMonth()+1,current:new Date()});
});
_13.find(".datebox-close").click(function(){
_12.hide();
});
};
function _e(_14){
var _15=$.data(_14,"datebox").options;
var _16=$.data(_14,"datebox").calendar;
_16.show();
if($.fn.window){
_16.css("z-index",$.fn.window.defaults.zIndex++);
}
(function(){
if(_16.is(":visible")){
_16.css({display:"block",left:$(_14).offset().left,top:$(_14).offset().top+$(_14).outerHeight()});
setTimeout(arguments.callee,200);
}
})();
var _17=_15.parser($(_14).val());
_16.find("div.datebox-calendar-inner>div").calendar({year:_17.getFullYear(),month:_17.getMonth()+1,current:_17});
};
function _18(_19){
var _1a=$.data(_19,"datebox").calendar;
_1a.hide();
};
function _1b(_1c,_1d){
if($.fn.validatebox){
var _1e=$.data(_1c,"datebox").options;
$(_1c).validatebox(_1e);
if(_1d){
$(_1c).validatebox("validate");
$(_1c).trigger("mouseleave");
}
}
};
function _1f(_20,_21){
var _22=$.data(_20,"datebox").options;
if(_21){
_22.disabled=true;
$(_20).attr("disabled",true);
}else{
_22.disabled=false;
$(_20).removeAttr("disabled");
}
};
$.fn.datebox=function(_23){
if(typeof _23=="string"){
switch(_23){
case "destroy":
return this.each(function(){
_7(this);
});
case "disable":
return this.each(function(){
_1f(this,true);
_a(this);
});
case "enable":
return this.each(function(){
_1f(this,false);
_a(this);
});
}
}
_23=_23||{};
return this.each(function(){
var _24=$.data(this,"datebox");
if(_24){
$.extend(_24.options,_23);
}else{
var _25=_1(this);
var t=$(this);
_24=$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,{disabled:(t.attr("disabled")?true:undefined),required:(t.attr("required")?(t.attr("required")=="true"||t.attr("required")==true):undefined),missingMessage:(t.attr("missingMessage")||undefined)},_23),calendar:_25});
t.removeAttr("disabled");
}
_f(this);
_1f(this,_24.options.disabled);
_a(this);
_1b(this);
});
};
$.fn.datebox.defaults={currentText:"Today",closeText:"Close",disabled:false,required:false,missingMessage:"This field is required.",formatter:function(_26){
var y=_26.getFullYear();
var m=_26.getMonth()+1;
var d=_26.getDate();
return m+"/"+d+"/"+y;
},parser:function(s){
var t=Date.parse(s);
if(!isNaN(t)){
return new Date(t);
}else{
return new Date();
}
},onSelect:function(_27){
}};
})(jQuery);

