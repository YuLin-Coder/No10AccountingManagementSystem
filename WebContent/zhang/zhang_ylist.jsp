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
	var action = "<%=path%>/zhang!queryYue.action";		
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
					月收支查询
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
									&nbsp;| 搜索
								</td>
							</tr>
							<tr>
								<td height="70">
									<form name="form1" action="zhang!queryYue.action"
										method="post">
										<input type="hidden" id="messageInfo"
							value="${requestScope.messageInfo}" />
										<div align="center">
											&nbsp;
											<label>
											</label>
											<label>
												月份:
												<select name="qmonth">
													<option value="01">
														01
													</option>
													<option value="02">
														02
													</option>
													<option value="03">
														03
													</option>
													<option value="04">
														04
													</option>
													<option value="05">
														05
													</option>
													<option value="06">
														06
													</option>
													<option value="07">
														07
													</option>
													<option value="08">
														08
													</option>
													<option value="09">
														09
													</option>
													<option value="10">
														10
													</option>
													<option value="11">
														11
													</option>
													<option value="12">
														12
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
var myChart = new FusionCharts("<%=path%>/FusionCharts/Charts/Pie3D.swf", "myChartId",
		"600", "400");
var strXML = "<chart caption='收入一览'>${request.data}</chart>";
myChart.setDataXML(strXML);

myChart.render("chartdiv1");

$(document).ready(function(){
	 var $messageInfo = $("#messageInfo").val();
	 if($messageInfo != null && $messageInfo != ""){
		 $.messager.show({
			title:'提示',
			msg:$messageInfo,
			timeout:2000,
			showType:'slide'
		 });
		 $("#messageInfo").val("");
	 }
  });
  
</script>