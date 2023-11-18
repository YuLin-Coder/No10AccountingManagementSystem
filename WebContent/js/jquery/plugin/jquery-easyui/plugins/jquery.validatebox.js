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
$(_2).addClass("validatebox-text");
};
function _3(_4){
var _5=$.data(_4,"validatebox").tip;
if(_5){
_5.remove();
}
$(_4).unbind(".validatebox");
$(_4).remove();
};
function _6(_7){
var _8=$(_7);
var _9=$.data(_7,"validatebox");
_9.validating=false;
_8.unbind(".validatebox").bind("focus.validatebox",function(){
_9.validating=true;
(function(){
if(_9.validating){
_11(_7);
setTimeout(arguments.callee,200);
}
})();
}).bind("blur.validatebox",function(){
_9.validating=false;
_a(_7);
}).bind("mouseenter.validatebox",function(){
if(_8.hasClass("validatebox-invalid")){
_b(_7);
}
}).bind("mouseleave.validatebox",function(){
_a(_7);
});
};
function _b(_c){
var _d=$(_c);
var _e=$.data(_c,"validatebox").message;
var _f=$.data(_c,"validatebox").tip;
if(!_f){
_f=$("<div class=\"validatebox-tip\">"+"<span class=\"validatebox-tip-content\">"+"</span>"+"<span class=\"validatebox-tip-pointer\">"+"</span>"+"</div>").appendTo("body");
$.data(_c,"validatebox").tip=_f;
}
_f.find(".validatebox-tip-content").html(_e);
_f.css({display:"block",left:_d.offset().left+_d.outerWidth(),top:_d.offset().top});
};
function _a(_10){
var tip=$.data(_10,"validatebox").tip;
if(tip){
tip.remove();
$.data(_10,"validatebox").tip=null;
}
};
function _11(_12){
var _13=$.data(_12,"validatebox").options;
var tip=$.data(_12,"validatebox").tip;
var box=$(_12);
var _14=box.val();
function _15(msg){
$.data(_12,"validatebox").message=msg;
};
var _16=box.attr("disabled");
if(_16==true||_16=="true"){
return true;
}
if(_13.required){
if(_14==""){
box.addClass("validatebox-invalid");
_15(_13.missingMessage);
_b(_12);
return false;
}
}
if(_13.validType){
var _17=/([a-zA-Z_]+)(.*)/.exec(_13.validType);
var _18=_13.rules[_17[1]];
if(_14&&_18){
var _19=eval(_17[2]);
if(!_18["validator"](_14,_19)){
box.addClass("validatebox-invalid");
var _1a=_18["message"];
if(_19){
for(var i=0;i<_19.length;i++){
_1a=_1a.replace(new RegExp("\\{"+i+"\\}","g"),_19[i]);
}
}
_15(_13.invalidMessage||_1a);
_b(_12);
return false;
}
}
}
box.removeClass("validatebox-invalid");
_a(_12);
return true;
};
$.fn.validatebox=function(_1b){
if(typeof _1b=="string"){
switch(_1b){
case "destroy":
return this.each(function(){
_3(this);
});
case "validate":
return this.each(function(){
_11(this);
});
case "isValid":
return _11(this[0]);
}
}
_1b=_1b||{};
return this.each(function(){
var _1c=$.data(this,"validatebox");
if(_1c){
$.extend(_1c.options,_1b);
}else{
_1(this);
var t=$(this);
_1c=$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,{required:(t.attr("required")?(t.attr("required")=="true"||t.attr("required")==true):undefined),validType:(t.attr("validType")||undefined),missingMessage:(t.attr("missingMessage")||undefined),invalidMessage:(t.attr("invalidMessage")||undefined)},_1b)});
}
_6(this);
});
};
$.fn.validatebox.defaults={required:false,validType:null,missingMessage:"This field is required.",invalidMessage:null,rules:{email:{validator:function(_1d){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_1d);
},message:"Please enter a valid email address."},url:{validator:function(_1e){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_1e);
},message:"Please enter a valid URL."},length:{validator:function(_1f,_20){
var len=$.trim(_1f).length;
return len>=_20[0]&&len<=_20[1];
},message:"Please enter a value between {0} and {1}."}}};
})(jQuery);

