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
var _4=$.data(_2,"combobox").options;
var _5=$.data(_2,"combobox").combobox;
var _6=$.data(_2,"combobox").content;
if(_3){
_4.width=_3;
}
if(isNaN(_4.width)){
_4.width=_5.find("input.combobox-text").outerWidth();
}
var _7=_5.find(".combobox-arrow").outerWidth();
var _3=_4.width-_7-(_5.outerWidth()-_5.width());
_5.find("input.combobox-text").width(_3);
if(_4.listWidth){
_6.width(_4.listWidth);
}else{
_6.width($.boxModel==true?_5.outerWidth()-(_6.outerWidth()-_6.width()):_5.outerWidth());
}
if(_4.listHeight){
_6.height(_4.listHeight);
}
};
function _8(_9){
$(_9).hide();
var _a=$("<span class=\"combobox\"></span>").insertAfter(_9);
$("<input type=\"hidden\" class=\"combobox-value\"></input>").appendTo(_a);
var _b=$("<input type=\"text\" class=\"combobox-text\"></input>").appendTo(_a);
$("<span><span class=\"combobox-arrow\"></span></span>").appendTo(_a);
var _c=$("<div class=\"combobox-content\"></div>").appendTo("body");
var _d=$(_9).attr("name");
if(_d){
_a.find("input.combobox-value").attr("name",_d);
$(_9).removeAttr("name").attr("comboboxName",_d);
}
_b.attr("autocomplete","off");
return {combobox:_a,content:_c};
};
function _e(_f){
$.data(_f,"combobox").content.remove();
$.data(_f,"combobox").combobox.remove();
$(_f).remove();
};
function _10(_11){
var _12=$.data(_11,"combobox").options;
var _13=$.data(_11,"combobox").combobox;
var _14=$.data(_11,"combobox").content;
var _15=_13.find(".combobox-text");
var _16=_13.find(".combobox-arrow");
$(document).unbind(".combobox");
_14.unbind(".combobox");
_15.unbind(".combobox");
_16.unbind(".combobox");
if(!_12.disabled){
$(document).bind("mousedown.combobox",function(){
$("body>div.combobox-content").hide();
});
_14.bind("mousedown.combobox",function(){
return false;
});
_15.bind("focus.combobox",function(){
_45(_11,"");
}).bind("keyup.combobox",function(e){
var _17=_14.find("div.combobox-item-selected");
switch(e.keyCode){
case 38:
var _18=_17.prev();
if(_18.length){
_17.removeClass("combobox-item-selected");
_18.addClass("combobox-item-selected");
}
break;
case 40:
var _19=_17.next();
if(_19.length){
_17.removeClass("combobox-item-selected");
_19.addClass("combobox-item-selected");
}
break;
case 13:
_1a(_11,_17.attr("value"));
_14.hide();
break;
case 27:
_14.hide();
break;
default:
_45(_11,$(this).val());
}
return false;
});
_16.bind("click.combobox",function(){
_15.focus();
}).bind("mouseenter.combobox",function(){
$(this).addClass("combobox-arrow-hover");
}).bind("mouseleave.combobox",function(){
$(this).removeClass("combobox-arrow-hover");
});
}
};
function _1a(_1b,_1c){
var _1d=$.data(_1b,"combobox").data;
var _1e=$.data(_1b,"combobox").options;
var _1f=$.data(_1b,"combobox").combobox;
var _20=$.data(_1b,"combobox").content;
_20.find("div.combobox-item-selected").removeClass("combobox-item-selected");
for(var i=0;i<_1d.length;i++){
var rec=_1d[i];
if(rec[_1e.valueField]==_1c){
var _21=_1f.find("input.combobox-value").val();
_1f.find("input.combobox-value").val(rec[_1e.valueField]);
_1f.find("input.combobox-text").val(rec[_1e.textField]);
_20.find("div.combobox-item[value="+_1c+"]").addClass("combobox-item-selected");
_1e.onSelect.call(_1b,rec);
if(_21!=_1c){
_1e.onChange.call(_1b,_1c,_21);
}
_22(_1b,true);
return;
}
}
};
function _23(_24){
var _25=$.data(_24,"combobox").combobox;
_25.find("input.combobox-value").val("");
_25.find("input.combobox-text").val("");
};
function _26(_27,_28){
var _29=$.data(_27,"combobox").combobox;
var _2a=$.data(_27,"combobox").options;
var _2b=$.data(_27,"combobox").data;
var _2c,_2d;
var _2e=_29.find("input.combobox-value").val();
if(typeof _28=="object"){
_2c=_28[_2a.valueField];
_2d=_28[_2a.textField];
}else{
_2c=_28;
for(var i=0;i<_2b.length;i++){
if(_2b[i][_2a.valueField]==_2c){
_2d=_2b[i][_2a.textField];
break;
}
}
}
if(_2d==undefined){
_2d=_2c;
}
_29.find("input.combobox-value").val(_2c);
_29.find("input.combobox-text").val(_2d);
_22(_27,true);
if(_2e!=_2c){
_2a.onChange.call(_27,_2c,_2e);
}
};
function _2f(_30){
var _31=$.data(_30,"combobox").combobox;
return _31.find("input.combobox-value").val();
};
function _32(_33){
var _34=$.data(_33,"combobox").combobox;
return _34.find("input.combobox-text").val();
};
function _35(_36){
var _37=$.data(_36,"combobox").options;
var _38=[];
$(">option",_36).each(function(){
var _39={};
_39[_37.valueField]=$(this).attr("value")||$(this).html();
_39[_37.textField]=$(this).html();
_39["selected"]=$(this).attr("selected");
_38.push(_39);
});
return _38;
};
function _3a(_3b,_3c){
$.data(_3b,"combobox").data=_3c;
var _3d=$.data(_3b,"combobox").options;
var _3e=$.data(_3b,"combobox").content;
var _3f=null;
_3e.empty();
for(var i=0;i<_3c.length;i++){
var _40=$("<div class=\"combobox-item\"></div>").appendTo(_3e);
_40.attr("value",_3c[i][_3d.valueField]);
_40.html(_3c[i][_3d.textField]);
if(_3c[i]["selected"]){
_3f=_3c[i];
}
}
if(_3f){
_26(_3b,_3f);
}
$(".combobox-item",_3e).hover(function(){
$(this).addClass("combobox-item-hover");
},function(){
$(this).removeClass("combobox-item-hover");
}).click(function(){
_3e.hide();
_1a(_3b,$(this).attr("value"));
});
};
function _41(_42,url){
var _43=$.data(_42,"combobox").options;
if(url){
_43.url=url;
}
if(!_43.url){
return;
}
$.ajax({url:_43.url,dataType:"json",success:function(_44){
_3a(_42,_44);
_43.onLoadSuccess.apply(this,arguments);
},error:function(){
_43.onLoadError.apply(this,arguments);
}});
};
function _45(_46,_47){
_47=_47||"";
var _48=$.data(_46,"combobox").combobox;
var _49=$.data(_46,"combobox").content;
var _4a=_48.find("input.combobox-text").val();
_49.find("div.combobox-item-selected").removeClass("combobox-item-selected");
_49.find("div.combobox-item").each(function(){
var _4b=$(this);
if(_4b.text().indexOf(_47)==0){
_4b.show();
if(_4b.text()==_4a){
_4b.addClass("combobox-item-selected");
}
}else{
_4b.hide();
}
});
_49.show();
if($.fn.window){
_49.css("z-index",$.fn.window.defaults.zIndex++);
}
(function(){
if(_49.is(":visible")){
_49.css({display:"block",left:_48.offset().left,top:_48.offset().top+_48.outerHeight()});
setTimeout(arguments.callee,200);
}
})();
if(_49.find("div.combobox-item-selected").length==0){
_49.find("div.combobox-item:visible:first").addClass("combobox-item-selected");
}
};
function _22(_4c,_4d){
if($.fn.validatebox){
var _4e=$.data(_4c,"combobox").options;
var _4f=$.data(_4c,"combobox").combobox.find("input.combobox-text");
_4f.validatebox(_4e);
if(_4d){
_4f.validatebox("validate");
_4f.trigger("mouseleave");
}
}
};
function _50(_51,_52){
var _53=$.data(_51,"combobox").options;
var _54=$.data(_51,"combobox").combobox;
if(_52){
_53.disabled=true;
$(_51).attr("disabled",true);
_54.find(".combobox-value").attr("disabled",true);
_54.find(".combobox-text").attr("disabled",true);
}else{
_53.disabled=false;
$(_51).removeAttr("disabled");
_54.find(".combobox-value").removeAttr("disabled");
_54.find(".combobox-text").removeAttr("disabled");
}
};
$.fn.combobox=function(_55,_56){
if(typeof _55=="string"){
switch(_55){
case "destroy":
return this.each(function(){
_e(this);
});
case "resize":
return this.each(function(){
_1(this,_56);
});
case "select":
return this.each(function(){
_1a(this,_56);
});
case "clear":
return this.each(function(){
_23(this);
});
case "setValue":
return this.each(function(){
_26(this,_56);
});
case "getValue":
return _2f(this[0]);
case "getText":
return _32(this[0]);
case "loadData":
return this.each(function(){
_3a(this,_56);
});
case "reload":
return this.each(function(){
_41(this,_56);
});
case "disable":
return this.each(function(){
_50(this,true);
_10(this);
});
case "enable":
return this.each(function(){
_50(this,false);
_10(this);
});
}
}
_55=_55||{};
return this.each(function(){
var _57=$.data(this,"combobox");
if(_57){
$.extend(_57.options,_55);
}else{
var r=_8(this);
var t=$(this);
_57=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,{width:(parseInt(t.css("width"))||undefined),listWidth:t.attr("listWidth"),listHeight:t.attr("listHeight"),valueField:t.attr("valueField"),textField:t.attr("textField"),editable:(t.attr("editable")?t.attr("editable")=="true":undefined),disabled:(t.attr("disabled")?true:undefined),url:t.attr("url"),required:(t.attr("required")?(t.attr("required")=="true"||t.attr("required")==true):undefined),missingMessage:(t.attr("missingMessage")||undefined)},_55),combobox:r.combobox,content:r.content});
t.removeAttr("disabled");
_3a(this,_35(this));
}
$("input.combobox-text",_57.combobox).attr("readonly",!_57.options.editable);
if(_57.options.data){
_3a(this,_57.options.data);
}
_41(this);
_50(this,_57.options.disabled);
_10(this);
_1(this);
_22(this);
});
};
$.fn.combobox.defaults={width:"auto",listWidth:null,listHeight:null,valueField:"value",textField:"text",editable:true,disabled:false,url:null,data:null,required:false,missingMessage:"This field is required.",onLoadSuccess:function(){
},onLoadError:function(){
},onSelect:function(_58){
},onChange:function(_59,_5a){
}};
})(jQuery);

