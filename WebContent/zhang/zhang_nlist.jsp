<%@include file="/common/sub_header.jsp"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>



<script language="JavaScript">
<!--	
function ask(msg) {	
	if( msg=='' ) {	
		msg='警告：是否删除？';	
	}	
	if (confirm(msg)) {	
		return true;	
	} else {	
		return false;	
	}	
}	
function query() {		
	var action = "<%=path%>/zhang!queryYear.action";		
	document.forms[0].action = action;		
	document.forms[0].submit();		
}		
//-->	
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link href="<%=path%>/css/list.css" rel="stylesheet" type="text/css" />
		<script language="JavaScript"
			src="<%=path%>/FusionCharts/JS/FusionCharts.js">
		</script>
	</HEAD>
	<BODY leftMargin=0 topMargin=0 marginwidth="0" marginheight="0">

		<br />


		<table cellpadding='3' cellspacing='1' border='0' class='tableBorder'
			align=center>
			<tr>
				<th width="100%" height=25 class='tableHeaderText'>
					年收支查询
				</th>

				<tr>
					<td height="400" valign="top" class='forumRow'>
						<br>
						<table width="95%" border="0" align="center" cellpadding="0"
							cellspacing="0">
							<tr>
								<td height="25" class='forumRowHighLight'>
									&nbsp;
								</td>
							</tr>
							<tr>
								<td height="30"></td>
							</tr>
						</table>


						<table width="95%" border="0" align="center" cellpadding="0"
							cellspacing="2">





							<tr>
								<td height="35" colspan="8">
									<div align="center">
										<table width='100%'>
											<tr>
												<td align='center'>
													<div align="center" id="chartdiv1">

													</div>

												</td>
											</tr>
										</table>
									</div>
								</td>
							</tr>
						</table>
						<table width="95%" border="0" align="center" cellpadding="0"
							cellspacing="0">
							<tr>
								<td height="20" class='forumRow'>
									&nbsp;
								</td>
							</tr>
							<tr>
								<td height="25" class='forumRowHighLight'>
									&nbsp;| 搜索${request.data}
								</td>
							</tr>
							<tr>
								<td height="70">
									<form name="form1" action="zhang!queryYear.action"
										method="post">
										<input type="hidden" id="messageInfo"
											value="${requestScope.messageInfo}" />
										<div align="center">
											&nbsp;
											<label>
											</label>
											<label>
												年份:
												<select name="qyear">
													<option value="2010">
														2010
													</option>
													<option value="2011">
														2011
													</option>
													<option value="2012">
														2012
													</option>
													<option value="2013">
														2013
													</option>
													<option value="2014">
														2014
													</option>
													<option value="2015">
														2015
													</option>
													<option value="2016">
														2016
													</option>
												</select>
											</label>

											<label>
												&nbsp;
												<input name="Submit" onclick="query();" type="button"
													value="查 询" />
											</label>
										</div>
									</form>
								</td>
							</tr>
						</table>
						<br>
					</td>
				</tr>
		</table>

		<script type="text/javascript">
var myChart = new FusionCharts("<%=path%>/FusionCharts/Charts/MSColumn3D.swf",
		"MSColumn3D", "600", "400");

var chartXMLData = "<chart caption=\"年收支情况\" XAxisName=\"\" palette=\"2\" animation=\"1\" formatNumberScale=\"0\" numberPrefix=\"\" showValues=\"0\" numDivLines=\"4\" legendPosition=\"BOTTOM\">${request.data}\"<styles><definition><style type=\"font\" name=\"CaptionFont\" color=\"666666\" size=\"15\" /><style type=\"font\" name=\"SubCaptionFont\" bold=\"0\" /></definition><application><apply toObject=\"caption\" styles=\"CaptionFont\" /><apply toObject=\"SubCaption\" styles=\"SubCaptionFont\" /></application></styles></chart>";

myChart.setDataXML(chartXMLData);

myChart.render("chartdiv1");

$(document).ready(function() {
	var $messageInfo = $("#messageInfo").val();
	if ($messageInfo != null && $messageInfo != "") {
		$.messager.show( {
			title : '提示',
			msg : $messageInfo,
			timeout : 2000,
			showType : 'slide'
		});
		$("#messageInfo").val("");
	}
});
</script>