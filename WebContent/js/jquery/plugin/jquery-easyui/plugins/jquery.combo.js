/**
 * jQuery EasyUI 1.2.1
 * 
 * Licensed under the GPL:
 *   http://www.gnu.org/licenses/gpl.txt
 *
 * Copyright 2010 stworthy [ stworthy@gmail.com ] 
 * 
 */
(function($){
function _1(_2,_3){
var _4=$.data(_2,"combo").options;
var _5=$.data(_2,"combo").combo;
var _6=$.data(_2,"combo").panel;
if(_3){
_4.width=_3;
}
_5.appendTo("body");
if(isNaN(_4.width)){
_4.width=_5.find("input.combo-text").outerWidth();
}
var _7=_5.find(".combo-arrow").outerWidth();
var _3=_4.width-_7;
if($.boxModel==true){
_3-=_5.outerWidth()-_5.width();
}
_5.find("input.combo-text").width(_3);
_6.panel("resize",{width:(_4.panelWidth?_4.panelWidth:_5.outerWidth()),height:_4.panelHeight});
_5.insertAfter(_2);
};
function _8(_9){
$(_9).addClass("combo-f").hide();
var _a=$("<span class=\"combo\"></span>").insertAfter(_9);
var _b=$("<input type=\"text\" class=\"combo-text\">").appendTo(_a);
$("<span><span class=\"combo-arrow\"></span></span>").appendTo(_a);
$("<input type=\"hidden\" class=\"combo-value\">").appendTo(_a);
var _c=$("<div class=\"combo-panel\"></div>").appendTo("body");
_c.panel({doSize:false,closed:true,style:{position:"absolute",zIndex:10},onOpen:function(){
$(this).panel("resize");
}});
var _d=$(_9).attr("name");
if(_d){
_a.find("input.combo-value").attr("name",_d);
$(_9).removeAttr("name").attr("comboName",_d);
}
_b.attr("autocomplete","off");
return {combo:_a,panel:_c};
};
function _e(_f){
var _10=$.data(_f,"combo").combo.find("input.combo-text");
_10.validatebox("destroy");
$.data(_f,"combo").panel.panel("destroy");
$.data(_f,"combo").combo.remove();
$(_f).remove();
};
function _11(_12){
var _13=$.data(_12,"combo").options;
var _14=$.data(_12,"combo").combo;
var _15=$.data(_12,"combo").panel;
var _16=_14.find(".combo-text");
var _17=_14.find(".combo-arrow");
$(document).unbind(".combo");
_14.unbind(".combo");
_15.unbind(".combo");
_16.unbind(".combo");
_17.unbind(".combo");
if(!_13.disabled){
$(document).bind("mousedown.combo",function(e){
$("div.combo-panel").panel("close");
});
_15.bind("mousedown.combo",function(e){
return false;
});
_16.bind("mousedown.combo",function(e){
e.stopPropagation();
}).bind("keydown.combo",function(e){
switch(e.keyCode){
case 38:
_13.keyHandler.up.call(_12);
break;
case 40:
_13.keyHandler.down.call(_12);
break;
case 13:
e.preventDefault();
_13.keyHandler.enter.call(_12);
return false;
case 9:
case 27:
_1e(_12);
break;
default:
if(_13.editable){
setTimeout(function(){
var q=_16.val();
if($.data(_12,"combo").previousValue!=q){
$.data(_12,"combo").previousValue=q;
_18(_12);
_13.keyHandler.query.call(_12,_16.val());
_22(_12,true);
}
},10);
}
}
});
_17.bind("click.combo",function(){
_16.focus();
_18(_12);
}).bind("mouseenter.combo",function(){
$(this).addClass("combo-arrow-hover");
}).bind("mouseleave.combo",function(){
$(this).removeClass("combo-arrow-hover");
});
}
};
function _18(_19){
var _1a=$.data(_19,"combo").options;
var _1b=$.data(_19,"combo").combo;
var _1c=$.data(_19,"combo").panel;
if($.fn.window){
_1c.panel("panel").css("z-index",$.fn.window.defaults.zIndex++);
}
_1c.panel("move",{left:_1b.offset().left,top:_1d()});
_1c.panel("open");
_1a.onShowPanel.call(_19);
(function(){
if(_1c.is(":visible")){
_1c.panel("move",{left:_1b.offset().left,top:_1d()});
setTimeout(arguments.callee,200);
}
})();
function _1d(){
var top=_1b.offset().top+_1b.outerHeight();
if(top+_1c.outerHeight()>$(window).height()+$(document).scrollTop()){
top=_1b.offset().top-_1c.outerHeight();
}
if(top<$(document).scrollTop()){
top=_1b.offset().top+_1b.outerHeight();
}
return top;
};
};
function _1e(_1f){
var _20=$.data(_1f,"combo").options;
var _21=$.data(_1f,"combo").panel;
_21.panel("close");
_20.onHidePanel.call(_1f);
};
function _22(_23,_24){
var _25=$.data(_23,"combo").options;
var _26=$.data(_23,"combo").combo.find("input.combo-text");
_26.validatebox(_25);
if(_24){
_26.validatebox("validate");
_26.trigger("mouseleave");
}
};
function _27(_28,_29){
var _2a=$.data(_28,"combo").options;
var _2b=$.data(_28,"combo").combo;
if(_29){
_2a.disabled=true;
$(_28).attr("disabled",true);
_2b.find(".combo-value").attr("disabled",true);
_2b.find(".combo-text").attr("disabled",true);
}else{
_2a.disabled=false;
$(_28).removeAttr("disabled");
_2b.find(".combo-value").removeAttr("disabled");
_2b.find(".combo-text").removeAttr("disabled");
}
};
function _2c(_2d){
var _2e=$.data(_2d,"combo").options;
var _2f=$.data(_2d,"combo").combo;
if(_2e.multiple){
_2f.find("input.combo-value").remove();
}else{
_2f.find("input.combo-value").val("");
}
_2f.find("input.combo-text").val("");
};
function _30(_31){
var _32=$.data(_31,"combo").combo;
return _32.find("input.combo-text").val();
};
function _33(_34,_35){
var _36=$.data(_34,"combo").combo;
_36.find("input.combo-text").val(_35);
_22(_34,true);
$.data(_34,"combo").previousValue=_35;
};
function _37(_38){
var _39=[];
var _3a=$.data(_38,"combo").combo;
_3a.find("input.combo-value").each(function(){
_39.push($(this).val());
});
return _39;
};
function _3b(_3c,_3d){
var _3e=$.data(_3c,"combo").options;
var _3f=_37(_3c);
var _40=$.data(_3c,"combo").combo;
_40.find("input.combo-value").remove();
var _41=$(_3c).attr("comboName");
for(var i=0;i<_3d.length;i++){
var _42=$("<input type=\"hidden\" class=\"combo-value\">").appendTo(_40);
if(_41){
_42.attr("name",_41);
}
_42.val(_3d[i]);
}
var tmp=[];
for(var i=0;i<_3f.length;i++){
tmp[i]=_3f[i];
}
var aa=[];
for(var i=0;i<_3d.length;i++){
for(var j=0;j<tmp.length;j++){
if(_3d[i]==tmp[j]){
aa.push(_3d[i]);
tmp.splice(j,1);
break;
}
}
}
if(aa.length!=_3d.length||_3d.length!=_3f.length){
if(_3e.multiple){
_3e.onChange.call(_3c,_3d,_3f);
}else{
_3e.onChange.call(_3c,_3d[0],_3f[0]);
}
}
};
function _43(_44){
var _45=_37(_44);
return _45[0];
};
function _46(_47,_48){
_3b(_47,[_48]);
};
function _49(_4a){
var _4b=$.data(_4a,"combo").options;
if(_4b.multiple){
if(_4b.value){
if(typeof _4b.value=="object"){
_3b(_4a,_4b.value);
}else{
_46(_4a,_4b.value);
}
}else{
_3b(_4a,[]);
}
}else{
_46(_4a,_4b.value);
}
};
$.fn.combo=function(_4c,_4d){
if(typeof _4c=="string"){
return $.fn.combo.methods[_4c](this,_4d);
}
_4c=_4c||{};
return this.each(function(){
var _4e=$.data(this,"combo");
if(_4e){
$.extend(_4e.options,_4c);
}else{
var r=_8(this);
_4e=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_4c),combo:r.combo,panel:r.panel,previousValue:null});
$(this).removeAttr("disabled");
}
$("input.combo-text",_4e.combo).attr("readonly",!_4e.options.editable);
_27(this,_4e.options.disabled);
_1(this);
_11(this);
_22(this);
_49(this);
});
};
$.fn.combo.methods={options:function(jq){
return $.data(jq[0],"combo").options;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},textbox:function(jq){
return $.data(jq[0],"combo").combo.find("input.combo-text");
},destroy:function(jq){
return jq.each(function(){
_e(this);
});
},resize:function(jq,_4f){
return jq.each(function(){
_1(this,_4f);
});
},showPanel:function(jq){
return jq.each(function(){
_18(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_1e(this);
});
},disable:function(jq){
return jq.each(function(){
_27(this,true);
_11(this);
});
},enable:function(jq){
return jq.each(function(){
_27(this,false);
_11(this);
});
},validate:function(jq){
return jq.each(function(){
_22(this,true);
});
},isValid:function(jq){
var _50=$.data(jq[0],"combo").combo.find("input.combo-text");
return _50.validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
_2c(this);
});
},getText:function(jq){
return _30(jq[0]);
},setText:function(jq,_51){
return jq.each(function(){
_33(this,_51);
});
},getValues:function(jq){
return _37(jq[0]);
},setValues:function(jq,_52){
return jq.each(function(){
_3b(this,_52);
});
},getValue:function(jq){
return _43(jq[0]);
},setValue:function(jq,_53){
return jq.each(function(){
_46(this,_53);
});
}};
$.fn.combo.parseOptions=function(_54){
var t=$(_54);
return $.extend({},$.fn.validatebox.parseOptions(_54),{width:(parseInt(_54.style.width)||undefined),panelWidth:(parseInt(t.attr("panelWidth"))||undefined),panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),separator:(t.attr("separator")||undefined),multiple:(t.attr("multiple")?(t.attr("multiple")=="true"||t.attr("multiple")==true):undefined),editable:(t.attr("editable")?t.attr("editable")=="true":undefined),disabled:(t.attr("disabled")?true:undefined),value:(t.val()||undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",panelWidth:null,panelHeight:200,multiple:false,separator:",",editable:true,disabled:false,value:"",keyHandler:{up:function(){
},down:function(){
},enter:function(){
},query:function(q){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_55,_56){
}});
})(jQuery);

