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
_3=_3||{};
if(_3.onSubmit){
if(_3.onSubmit.call(_2)==false){
return;
}
}
var _4=$(_2);
if(_3.url){
_4.attr("action",_3.url);
}
var _5="easyui_frame_"+(new Date().getTime());
var _6=$("<iframe id="+_5+" name="+_5+"></iframe>").attr("src",window.ActiveXObject?"javascript:false":"about:blank").css({position:"absolute",top:-1000,left:-1000});
var t=_4.attr("target"),a=_4.attr("action");
_4.attr("target",_5);
try{
_6.appendTo("body");
_6.bind("load",cb);
_4[0].submit();
}
finally{
_4.attr("action",a);
t?_4.attr("target",t):_4.removeAttr("target");
}
var _7=10;
function cb(){
_6.unbind();
var _8=$("#"+_5).contents().find("body");
var _9=_8.html();
if(_9==""){
if(--_7){
setTimeout(cb,100);
return;
}
return;
}
var ta=_8.find(">textarea");
if(ta.length){
_9=ta.val();
}else{
var _a=_8.find(">pre");
if(_a.length){
_9=_a.html();
}
}
if(_3.success){
_3.success(_9);
}
setTimeout(function(){
_6.unbind();
_6.remove();
},100);
};
};
function _b(_c,_d){
if(typeof _d=="string"){
$.ajax({url:_d,dataType:"json",success:function(_e){
_f(_e);
}});
}else{
_f(_d);
}
function _f(_10){
var _11=$(_c);
for(var _12 in _10){
var val=_10[_12];
$("input[name="+_12+"]",_11).val(val);
$("textarea[name="+_12+"]",_11).val(val);
$("select[name="+_12+"]",_11).val(val);
if($.fn.combobox){
$("select[comboboxName="+_12+"]",_11).combobox("setValue",val);
}
if($.fn.combotree){
$("select[combotreeName="+_12+"]",_11).combotree("setValue",val);
}
}
};
};
function _13(_14){
$("input,select,textarea",_14).each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
});
if($.fn.combobox){
$("select[comboboxName]",_14).combobox("clear");
}
if($.fn.combotree){
$("select[combotreeName]",_14).combotree("clear");
}
};
function _15(_16){
var _17=$.data(_16,"form").options;
var _18=$(_16);
_18.unbind(".form").bind("submit.form",function(){
setTimeout(function(){
_1(_16,_17);
},0);
return false;
});
};
function _19(_1a){
if($.fn.validatebox){
var box=$(".validatebox-text",_1a);
if(box.length){
box.validatebox("validate");
box.trigger("blur");
var _1b=$(".validatebox-invalid:first",_1a).focus();
return _1b.length==0;
}
}
return true;
};
$.fn.form=function(_1c,_1d){
if(typeof _1c=="string"){
switch(_1c){
case "submit":
return this.each(function(){
_1(this,$.extend({},$.fn.form.defaults,_1d||{}));
});
case "load":
return this.each(function(){
_b(this,_1d);
});
case "clear":
return this.each(function(){
_13(this);
});
case "validate":
return _19(this[0]);
}
}
_1c=_1c||{};
return this.each(function(){
if(!$.data(this,"form")){
$.data(this,"form",{options:$.extend({},$.fn.form.defaults,_1c)});
}
_15(this);
});
};
$.fn.form.defaults={url:null,onSubmit:function(){
},success:function(_1e){
}};
})(jQuery);

