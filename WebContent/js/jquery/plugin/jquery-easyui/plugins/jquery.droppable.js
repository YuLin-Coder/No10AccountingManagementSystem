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
$(_2).addClass("droppable");
$(_2).bind("_dragenter",function(e,_3){
$.data(_2,"droppable").options.onDragEnter.apply(_2,[e,_3]);
});
$(_2).bind("_dragleave",function(e,_4){
$.data(_2,"droppable").options.onDragLeave.apply(_2,[e,_4]);
});
$(_2).bind("_dragover",function(e,_5){
$.data(_2,"droppable").options.onDragOver.apply(_2,[e,_5]);
});
$(_2).bind("_drop",function(e,_6){
$.data(_2,"droppable").options.onDrop.apply(_2,[e,_6]);
});
};
$.fn.droppable=function(_7){
_7=_7||{};
return this.each(function(){
var _8=$.data(this,"droppable");
if(_8){
$.extend(_8.options,_7);
}else{
_1(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,_7)});
}
});
};
$.fn.droppable.defaults={accept:null,onDragEnter:function(e,_9){
},onDragOver:function(e,_a){
},onDragLeave:function(e,_b){
},onDrop:function(e,_c){
}};
})(jQuery);

