<%@include file="/common/sub_header.jsp"%>
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

		<link href="<%=path%>/css/list.css" rel="stylesheet" type="text/css" />

	</head>
	<body leftMargin=0 topMargin=0 marginwidth="0" marginheight="0">

		<br />


		<form id="form1" name="form1" method="post" action="?act=save">
			 <input type="hidden" name="messageInfo" id="messageInfo" value="${messageInfo}" />
			 <input type="hidden" name="admin.id" value="${admin.id}" />	
			<table cellpadding='3' cellspacing='1' border='0' class='tableBorder'
				align=center>
				<tr>
					<th class='tableHeaderText' colspan=2 height=25>
						管理员管理
					</th>
					<tr>
						<td width="15%" height=23 class='forumRow'>
							姓名：
						</td>
						<td class='forumRow'>
							 ${admin.name} 
							&nbsp;
						</td>
					</tr>
					<tr>
						<td class='forumRowHighLight' height=23>
							密码
						</td>
						<td class='forumRowHighLight'>
							 ${admin.pass} 
							&nbsp;
						</td>
					</tr>
					 

					<tr>
						<td height="50" colspan=2 class='forumRow'>
							<div align="center">
								<input type="button" name="Submit2" value="返回" class="button"	
						onclick="window.history.go(-1);" />	
							</div>
						</td>
					</tr>
			</table>
		</form>
	</body>
</html>

