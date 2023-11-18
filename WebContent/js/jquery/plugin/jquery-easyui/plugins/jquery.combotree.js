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
var _4=$.data(_2,"combotree").options;
var _5=$.data(_2,"combotree").combotree;
var _6=$.data(_2,"combotree").content;
if(_3){
_4.width=_3;
}
if(isNaN(_4.width)){
_4.width=_5.find("input.combotree-text").outerWidth();
}
var _7=_5.find(".combotree-arrow").outerWidth();
var _3=_4.width-_7-(_5.outerWidth()-_5.width());
_5.find("input.combotree-text").width(_3);
if(_4.treeWidth){
_6.width(_4.treeWidth);
}else{
_6.width($.boxModel==true?_5.outerWidth()-(_6.outerWidth()-_6.width()):_5.outerWidth());
}
if(_4.treeHeight){
_6.height(_4.treeHeight);
}
};
function _8(_9){
$(_9).hide();
var _a=$("<span class=\"combotree\"></span>").insertAfter(_9);
$("<input type=\"hidden\" class=\"combotree-value\"></input>").appendTo(_a);
$("<input class=\"combotree-text\" readonly=\"true\"></input>").appendTo(_a);
$("<span><span class=\"combotree-arrow\"></span></span>").appendTo(_a);
var _b=$("<div class=\"combotree-content\"><ul></ul></div>").appendTo("body");
var _c=$(_9).attr("name");
if(_c){
_a.find("input.combotree-value").attr("name",_c);
$(_9).removeAttr("name").attr("combotreeName",_c);
}
return {combotree:_a,content:_b};
};
function _d(_e){
$.data(_e,"combotree").content.remove();
$.data(_e,"combotree").combotree.remove();
$(_e).remove();
};
function _f(_10){
var _11=$.data(_10,"combotree").options;
var _12=$.data(_10,"combotree").combotree;
var _13=$.data(_10,"combotree").content;
var _14=_12.find(".combotree-arrow");
$(document).unbind(".combotree");
_12.unbind(".combotree");
_13.unbind(".combotree");
_14.unbind(".combotree");
if(!_11.disabled){
$(document).bind("mousedown.combotree",function(){
$("body>div.combotree-content").hide();
});
_13.bind("mousedown.combotree",function(){
return false;
});
_12.bind("click.combotree",function(){
_15();
return false;
});
_14.bind("mouseenter.combotree",function(){
$(this).addClass("combotree-arrow-hover");
}).bind("mouseleave.combotree",function(){
$(this).removeClass("combotree-arrow-hover");
});
}
function _15(){
_13.show();
if($.fn.window){
_13.css("z-index",$.fn.window.defaults.zIndex++);
}
(function(){
if(_13.is(":visible")){
_13.css({display:"block",left:_12.offset().left,top:_12.offset().top+_12.outerHeight()});
setTimeout(arguments.callee,200);
}
})();
};
};
function _16(_17){
var _18=$.data(_17,"combotree").options;
var _19=$.data(_17,"combotree").combotree;
var _1a=$.data(_17,"combotree").content;
_1a.find(">ul").tree({onClick:function(_1b){
if(_18.onBeforeSelect.call(_17,_1b)==false){
return;
}
var _1c=_19.find("input.combotree-value").val();
_19.find("input.combotree-value").val(_1b.id);
_19.find("input.combotree-text").val(_1b.text);
_1a.hide();
_1d(_17,true);
_18.onSelect.call(_17,_1b);
if(_1c!=_1b.id){
_18.onChange.call(_17,_1b.id,_1c);
}
}});
};
function _1e(_1f){
var _20=$.data(_1f,"combotree").combotree;
_20.find("input.combotree-value").val("");
_20.find("input.combotree-text").val("");
};
function _21(_22,_23){
var _24=$.data(_22,"combotree").options;
var _25=$.data(_22,"combotree").combotree;
var _26=$.data(_22,"combotree").content.find(">ul");
var _27,_28;
var _29=_25.find("input.combotree-value").val();
if(typeof _23=="object"){
_27=_23.id;
_28=_23.text;
}else{
_27=_23;
}
var _2a=_26.find("div.tree-node[node-id="+_27+"]")[0];
_26.tree("select",_2a);
var _2b=_26.tree("getSelected");
if(_2b){
_27=_2b.id;
_28=_2b.text;
}
if(_28==undefined){
_28=_27;
}
_25.find("input.combotree-value").val(_27);
_25.find("input.combotree-text").val(_28);
_1d(_22,true);
if(_29!=_27){
_24.onChange.call(_22,_27,_29);
}
};
function _2c(_2d){
var _2e=$.data(_2d,"combotree").combotree;
return _2e.find("input.combotree-value").val();
};
function _2f(_30){
var _31=$.data(_30,"combotree").combotree;
return _31.find("input.combotree-text").val();
};
function _32(_33,_34){
var _35=$.data(_33,"combotree").content;
_35.find(">ul").tree("loadData",_34);
};
function _36(_37,url){
var _38=$.data(_37,"combotree").options;
var _39=$.data(_37,"combotree").content;
if(url){
_38.url=url;
}
_39.find(">ul").tree({url:_38.url}).tree("reload");
};
function _1d(_3a,_3b){
if($.fn.validatebox){
var _3c=$.data(_3a,"combotree").options;
var _3d=$.data(_3a,"combotree").combotree.find("input.combotree-text");
_3d.validatebox(_3c);
if(_3b){
_3d.validatebox("validate");
_3d.trigger("mouseleave");
}
}
};
function _3e(_3f){
var _40=$.data(_3f,"combotree").content;
return _40.find(">ul.tree");
};
function _41(_42,_43){
var _44=$.data(_42,"combotree").options;
var _45=$.data(_42,"combotree").combotree;
if(_43){
_44.disabled=true;
$(_42).attr("disabled",true);
_45.find("input.combotree-value").attr("disabled",true);
_45.find("input.combotree-text").attr("disabled",true);
}else{
_44.disabled=false;
$(_42).removeAttr("disabled");
_45.find("input.combotree-value").removeAttr("disabled");
_45.find("input.combotree-text").removeAttr("disabled");
}
};
$.fn.combotree=function(_46,_47){
if(typeof _46=="string"){
switch(_46){
case "destroy":
return this.each(function(){
_d(this);
});
case "resize":
return this.each(function(){
_1(this,_47);
});
case "tree":
return _3e(this[0]);
case "clear":
return this.each(function(){
_1e(this);
});
case "setValue":
return this.each(function(){
_21(this,_47);
});
case "getValue":
return _2c(this[0]);
case "getText":
return _2f(this[0]);
case "loadData":
return this.each(function(){
_32(this,_47);
});
case "reload":
return this.each(function(){
_36(this,_47);
});
case "disable":
return this.each(function(){
_41(this,true);
_f(this);
});
case "enable":
return this.each(function(){
_41(this,false);
_f(this);
});
}
}
_46=_46||{};
return this.each(function(){
var _48=$.data(this,"combotree");
if(_48){
$.extend(_48.options,_46);
}else{
var r=_8(this);
var t=$(this);
_48=$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,{width:(parseInt(t.css("width"))||undefined),treeWidth:t.attr("treeWidth"),treeHeight:t.attr("treeHeight"),url:t.attr("url"),disabled:(t.attr("disabled")?true:undefined),required:(t.attr("required")?(t.attr("required")=="true"||t.attr("required")==true):undefined),missingMessage:(t.attr("missingMessage")||undefined)},_46),combotree:r.combotree,content:r.content});
t.removeAttr("disabled");
}
_16(this);
if(_48.options.data){
_32(this,_48.options.data);
}
if(_48.options.url){
_36(this,_48.options.url);
}
_41(this,_48.options.disabled);
_f(this);
_1(this);
_1d(this);
});
};
$.fn.combotree.defaults={width:"auto",treeWidth:null,treeHeight:200,url:null,data:null,disabled:false,required:false,missingMessage:"This field is required.",onBeforeSelect:function(_49){
},onSelect:function(_4a){
},onChange:function(_4b,_4c){
}};
})(jQuery);

