if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Bladsy';
	$.fn.pagination.defaults.afterPageText = 'Van {pages}';
	$.fn.pagination.defaults.displayMsg = 'Wys (from) tot (to) van (total) items';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Verwerking, wag asseblief ...';
}
if ($.messager){
	$.messager.defaults.ok = 'Ok';
	$.messager.defaults.cancel = 'Die styl';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = "Die veld is verpligtend.";
	$.fn.validatebox.defaults.rules.email.message = "Gee 'n geldige e-pos adres.";
	$.fn.validatebox.defaults.rules.url.message = "Gee 'n geldige URL nie.";
	$.fn.validatebox.defaults.rules.length.message = "Voer 'n waarde tussen {0} en {1}.";
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'Die veld is verpligtend.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'Die veld is verpligtend.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'Die veld is verpligtend.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Vandag';
	$.fn.datebox.defaults.closeText = 'Sluit';
	$.fn.datebox.defaults.missingMessage = 'Die veld is verpligtend.';
}
