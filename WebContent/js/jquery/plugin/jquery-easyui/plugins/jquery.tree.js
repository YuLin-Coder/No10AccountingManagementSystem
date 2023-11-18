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
_3.addClass("tree");
return _3;
};
function _4(_5){
var _6=[];
_7(_6,$(_5));
function _7(aa,_8){
_8.find(">li").each(function(){
var _9={};
_9.text=$(this).find(">span").html();
if(!_9.text){
_9.text=$(this).html();
}
var _a=$(this).find(">ul");
if(_a.length){
_9.children=[];
_7(_9.children,_a);
}
aa.push(_9);
});
};
return _6;
};
function _b(_c){
var _d=$.data(_c,"tree").options;
var _e=$.data(_c,"tree").tree;
$("div.tree-node",_e).unbind(".tree").bind("dblclick.tree",function(){
$("div.tree-node-selected",_e).removeClass("tree-node-selected");
$(this).addClass("tree-node-selected");
if(_d.onDblClick){
var _f=this;
var _10=$.data(this,"tree-node");
_d.onDblClick.call(this,{id:_10.id,text:_10.text,checked:$(this).find(".tree-checkbox").hasClass("tree-checkbox1"),attributes:_10.attributes,target:_f});
}
}).bind("click.tree",function(){
$("div.tree-node-selected",_e).removeClass("tree-node-selected");
$(this).addClass("tree-node-selected");
if(_d.onClick){
var _11=this;
var _12=$.data(this,"tree-node");
_d.onClick.call(this,{id:_12.id,text:_12.text,checked:$(this).find(".tree-checkbox").hasClass("tree-checkbox1"),attributes:_12.attributes,target:_11});
}
}).bind("mouseenter.tree",function(){
$(this).addClass("tree-node-hover");
return false;
}).bind("mouseleave.tree",function(){
$(this).removeClass("tree-node-hover");
return false;
});
$("span.tree-hit",_e).unbind(".tree").bind("click.tree",function(){
var _13=$(this).parent();
_36(_c,_13);
return false;
}).bind("mouseenter.tree",function(){
if($(this).hasClass("tree-expanded")){
$(this).addClass("tree-expanded-hover");
}else{
$(this).addClass("tree-collapsed-hover");
}
}).bind("mouseleave.tree",function(){
if($(this).hasClass("tree-expanded")){
$(this).removeClass("tree-expanded-hover");
}else{
$(this).removeClass("tree-collapsed-hover");
}
});
$("span.tree-checkbox",_e).unbind(".tree").bind("click.tree",function(){
if($(this).hasClass("tree-checkbox0")){
$(this).removeClass("tree-checkbox0").addClass("tree-checkbox1");
}else{
if($(this).hasClass("tree-checkbox1")){
$(this).removeClass("tree-checkbox1").addClass("tree-checkbox0");
}else{
if($(this).hasClass("tree-checkbox2")){
$(this).removeClass("tree-checkbox2").addClass("tree-checkbox1");
}
}
}
_14($(this).parent());
_15($(this).parent());
return false;
});
function _15(_16){
var _17=_16.next().find(".tree-checkbox");
_17.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
if(_16.find(".tree-checkbox").hasClass("tree-checkbox1")){
_17.addClass("tree-checkbox1");
}else{
_17.addClass("tree-checkbox0");
}
};
function _14(_18){
var _19=_4c(_c,_18[0]);
if(_19){
var ck=$(_19.target).find(".tree-checkbox");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
if(_1a(_18)){
ck.addClass("tree-checkbox1");
}else{
if(_1b(_18)){
ck.addClass("tree-checkbox0");
}else{
ck.addClass("tree-checkbox2");
}
}
_14($(_19.target));
}
function _1a(n){
var ck=n.find(".tree-checkbox");
if(ck.hasClass("tree-checkbox0")||ck.hasClass("tree-checkbox2")){
return false;
}
var b=true;
n.parent().siblings().each(function(){
if(!$(this).find(">div.tree-node .tree-checkbox").hasClass("tree-checkbox1")){
b=false;
}
});
return b;
};
function _1b(n){
var ck=n.find(".tree-checkbox");
if(ck.hasClass("tree-checkbox1")||ck.hasClass("tree-checkbox2")){
return false;
}
var b=true;
n.parent().siblings().each(function(){
if(!$(this).find(">div.tree-node .tree-checkbox").hasClass("tree-checkbox0")){
b=false;
}
});
return b;
};
};
};
function _1c(_1d,ul,_1e){
if(_1d==ul){
$(_1d).empty();
}
var _1f=$.data(_1d,"tree").options;
function _20(ul,_21,_22){
for(var i=0;i<_21.length;i++){
var li=$("<li></li>").appendTo(ul);
var _23=_21[i];
if(_23.state!="open"&&_23.state!="closed"){
_23.state="open";
}
var _24=$("<div class=\"tree-node\"></div>").appendTo(li);
_24.attr("node-id",_23.id);
$.data(_24[0],"tree-node",{id:_23.id,text:_23.text,iconCls:_23.iconCls,attributes:_23.attributes});
$("<span class=\"tree-title\"></span>").html(_23.text).appendTo(_24);
if(_1f.checkbox){
if(_23.checked){
$("<span class=\"tree-checkbox tree-checkbox1\"></span>").prependTo(_24);
}else{
$("<span class=\"tree-checkbox tree-checkbox0\"></span>").prependTo(_24);
}
}
if(_23.children){
var _25=$("<ul></ul>").appendTo(li);
if(_23.state=="open"){
$("<span class=\"tree-icon tree-folder tree-folder-open\"></span>").addClass(_23.iconCls).prependTo(_24);
$("<span class=\"tree-hit tree-expanded\"></span>").prependTo(_24);
}else{
$("<span class=\"tree-icon tree-folder\"></span>").addClass(_23.iconCls).prependTo(_24);
$("<span class=\"tree-hit tree-collapsed\"></span>").prependTo(_24);
_25.css("display","none");
}
_20(_25,_23.children,_22+1);
}else{
if(_23.state=="closed"){
$("<span class=\"tree-folder\"></span>").addClass(_23.iconCls).prependTo(_24);
$("<span class=\"tree-hit tree-collapsed\"></span>").prependTo(_24);
}else{
$("<span class=\"tree-icon tree-file\"></span>").addClass(_23.iconCls).prependTo(_24);
$("<span class=\"tree-indent\"></span>").prependTo(_24);
}
}
for(var j=0;j<_22;j++){
$("<span class=\"tree-indent\"></span>").prependTo(_24);
}
}
};
var _26=$(ul).prev().find(">span.tree-indent,>span.tree-hit").length;
_20(ul,_1e,_26);
};
function _27(_28,ul,_29){
var _2a=$.data(_28,"tree").options;
if(!_2a.url){
return;
}
_29=_29||{};
var _2b=$(ul).prev().find(">span.tree-folder");
_2b.addClass("tree-loading");
$.ajax({type:"post",url:_2a.url,data:_29,dataType:"json",success:function(_2c){
_2b.removeClass("tree-loading");
_1c(_28,ul,_2c);
_b(_28);
if(_2a.onLoadSuccess){
_2a.onLoadSuccess.apply(this,arguments);
}
},error:function(){
_2b.removeClass("tree-loading");
if(_2a.onLoadError){
_2a.onLoadError.apply(this,arguments);
}
}});
};
function _2d(_2e,_2f){
var _30=$.data(_2e,"tree").options;
var hit=$(">span.tree-hit",_2f);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_2f).next();
if(ul.length){
if(_30.animate){
ul.slideDown();
}else{
ul.css("display","block");
}
}else{
var id=$.data($(_2f)[0],"tree-node").id;
var _31=$("<ul></ul>").insertAfter(_2f);
_27(_2e,_31,{id:id});
}
}
};
function _32(_33,_34){
var _35=$.data(_33,"tree").options;
var hit=$(">span.tree-hit",_34);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
if(_35.animate){
$(_34).next().slideUp();
}else{
$(_34).next().css("display","none");
}
}
};
function _36(_37,_38){
var hit=$(">span.tree-hit",_38);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_32(_37,_38);
}else{
_2d(_37,_38);
}
};
function _39(_3a){
var _3b=_3c(_3a);
for(var i=0;i<_3b.length;i++){
_2d(_3a,_3b[i].target);
var _3d=_3e(_3a,_3b[i].target);
for(var j=0;j<_3d.length;j++){
_2d(_3a,_3d[j].target);
}
}
};
function _3f(_40){
var _41=_3c(_40);
for(var i=0;i<_41.length;i++){
_32(_40,_41[i].target);
var _42=_3e(_40,_41[i].target);
for(var j=0;j<_42.length;j++){
_32(_40,_42[j].target);
}
}
};
function _43(_44){
var _45=_3c(_44);
if(_45.length){
return _45[0];
}else{
return null;
}
};
function _3c(_46){
var _47=[];
$(_46).find(">li").each(function(){
var _48=$(this).find(">div.tree-node");
_47.push($.extend({},$.data(_48[0],"tree-node"),{target:_48[0],checked:_48.find(".tree-checkbox").hasClass("tree-checkbox1")}));
});
return _47;
};
function _3e(_49,_4a){
var _4b=[];
$(_4a).next().find("div.tree-node").each(function(){
_4b.push($.extend({},$.data(this,"tree-node"),{target:this,checked:$(this).find(".tree-checkbox").hasClass("tree-checkbox1")}));
});
return _4b;
};
function _4c(_4d,_4e){
var _4f=$(_4e).parent().parent().prev();
if(_4f.length){
return $.extend({},$.data(_4f[0],"tree-node"),{target:_4f[0],checked:_4f.find(".tree-checkbox").hasClass("tree-checkbox1")});
}else{
return null;
}
};
function _50(_51){
var _52=[];
$(_51).find(".tree-checkbox1").each(function(){
var _53=$(this).parent();
_52.push($.extend({},$.data(_53[0],"tree-node"),{target:_53[0],checked:_53.find(".tree-checkbox").hasClass("tree-checkbox1")}));
});
return _52;
};
function _54(_55){
var _56=$(_55).find("div.tree-node-selected");
if(_56.length){
return $.extend({},$.data(_56[0],"tree-node"),{target:_56[0],checked:_56.find(".tree-checkbox").hasClass("tree-checkbox1")});
}else{
return null;
}
};
function _57(_58,_59){
var _5a=$(_59.parent);
var ul=_5a.next();
if(ul.length==0){
ul=$("<ul></ul>").insertAfter(_5a);
}
if(_59.data&&_59.data.length){
var _5b=_5a.find("span.tree-icon");
if(_5b.hasClass("tree-file")){
_5b.removeClass("tree-file").addClass("tree-folder");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_5b);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_1c(_58,ul,_59.data);
_b(_58);
};
function _5c(_5d,_5e){
var _5f=$(_5e);
var li=_5f.parent();
var ul=li.parent();
li.remove();
if(ul.find(">li").length==0){
var _5f=ul.prev();
_5f.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
_5f.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(_5f);
if(ul[0]!=_5d){
ul.remove();
}
}
};
function _60(_61,_62){
var _63=$(_62.target);
var _64=$.data(_62.target,"tree-node");
if(_64.iconCls){
_63.find(".tree-icon").removeClass(_64.iconCls);
}
$.extend(_64,_62);
$.data(_62.target,"tree-node",_64);
_63.attr("node-id",_64.id);
_63.find(".tree-title").html(_64.text);
if(_64.iconCls){
_63.find(".tree-icon").addClass(_64.iconCls);
}
var ck=_63.find(".tree-checkbox");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
if(_64.checked){
ck.addClass("tree-checkbox1");
}else{
ck.addClass("tree-checkbox0");
}
};
function _65(_66,_67){
$("div.tree-node-selected",_66).removeClass("tree-node-selected");
$(_67).addClass("tree-node-selected");
};
function _68(_69,_6a){
var _6b=$(_6a);
var hit=$(">span.tree-hit",_6b);
return hit.length==0;
};
$.fn.tree=function(_6c,_6d){
if(typeof _6c=="string"){
switch(_6c){
case "options":
return $.data(this[0],"tree").options;
case "loadData":
return this.each(function(){
_1c(this,this,_6d);
_b(this);
});
case "reload":
return this.each(function(){
$(this).empty();
_27(this,this);
});
case "getRoot":
return _43(this[0]);
case "getRoots":
return _3c(this[0]);
case "getParent":
return _4c(this[0],_6d);
case "getChildren":
return _3e(this[0],_6d);
case "getChecked":
return _50(this[0]);
case "getSelected":
return _54(this[0]);
case "isLeaf":
return _68(this[0],_6d);
case "select":
return this.each(function(){
_65(this,_6d);
});
case "collapse":
return this.each(function(){
_32(this,$(_6d));
});
case "expand":
return this.each(function(){
_2d(this,$(_6d));
});
case "collapseAll":
return this.each(function(){
_3f(this);
});
case "expandAll":
return this.each(function(){
_39(this);
});
case "toggle":
return this.each(function(){
_36(this,$(_6d));
});
case "append":
return this.each(function(){
_57(this,_6d);
});
case "remove":
return this.each(function(){
_5c(this,_6d);
});
case "update":
return this.each(function(){
_60(this,_6d);
});
}
}
var _6c=_6c||{};
return this.each(function(){
var _6e=$.data(this,"tree");
var _6f;
if(_6e){
_6f=$.extend(_6e.options,_6c);
_6e.options=_6f;
}else{
_6f=$.extend({},$.fn.tree.defaults,{url:$(this).attr("url"),checkbox:($(this).attr("checkbox")?$(this).attr("checkbox")=="true":undefined),animate:($(this).attr("animate")?$(this).attr("animate")=="true":undefined)},_6c);
$.data(this,"tree",{options:_6f,tree:_1(this)});
var _70=_4(this);
_1c(this,this,_70);
}
if(_6f.url){
_27(this,this);
}
_b(this);
});
};
$.fn.tree.defaults={url:null,animate:false,checkbox:false,onLoadSuccess:function(){
},onLoadError:function(){
},onClick:function(_71){
},onDblClick:function(_72){
}};
})(jQuery);

