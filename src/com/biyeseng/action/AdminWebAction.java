package com.biyeseng.action;	
	
import com.biyeseng.common.Constants;
import com.biyeseng.common.PageBean;
import com.biyeseng.service.AdminService;
import com.biyeseng.vo.Admin;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
	

/**
 * 管理员
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class AdminWebAction extends ActionSupport {	
	
	/**	
	 * Service层实例	
	 */	
	private AdminService adminService;	
	
	/**	
	 * 日志	
	 */	
	private Logger log = Logger.getLogger(this.getClass());	
	
	private Admin admin = new Admin();	
	
	private Long id;	
	
	@SuppressWarnings("unchecked")	
	public String queryAdmin() {	
		log.debug("queryAdmin" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		initSelect(request);	
	
		int resultSize = 0;	
		PageBean pageBean = null;	
			
//		Loginuser user = (Loginuser) request.getSession().getAttribute("currentUser");	
			
		resultSize = adminService.getCount(admin);
		
		pageBean = PageBean.getPageBean("admin",	
				resultSize, request);	
		
		pageBean.setPageSize(10);
		List list = adminService.findPageInfoAdmin(admin, pageBean);	
		request.setAttribute("admin_list", list);	
		log.debug("queryAdmin" + "结束");	
		return Constants.LIST;	
	}	
		
 	
		
	
	/**	
	 * 	
	 * 进入增加界面	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String toAddAdmin() {	
		log.debug("toAddAdmin" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		initSelect(request);	
		Date date = new Date();	
	 	
			
		log.debug("toAddAdmin" + "结束");	
		return Constants.ADD;	
	}	
	
	/**	
	 * 	
	 * 增加	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String addAdmin() {	
		log.debug("addAdmin" + "开始");	
		try {	
			Admin admins=new Admin();
			admins.setName(admin.getName());
			List list = adminService.findPageInfoAdmin(admins, null);
			if (list != null && list.size() > 0) {
				HttpServletRequest request = ServletActionContext.getRequest();
				request.setAttribute("messageInfo", "用户名已经存在！");
				return toAddAdmin();
			}
				
			adminService.save(admin);	
				
			admin = new Admin();	
		} catch (Exception e) {	
			e.printStackTrace();	
			log.error("addAdmin failed" + admin.toString());	
		}	
		log.debug("addAdmin" + "结束");	
		return queryAdmin();	
	}	
	
	/**	
	 * 	
	 * 删除	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String delAdmin() {	
		log.debug("delAdmin" + "开始");	
		try {	
			admin.setId(id);	
			adminService.delete(admin);	
			admin = new Admin();	
		} catch (Exception e) {	
			log.error("delAdmin failed" + admin.toString());	
		}	
		log.debug("delAdmin" + "结束");	
		return queryAdmin();	
	}	
	
	/**	
	 * 	
	 * 进入编辑界面	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String toEditAdmin() {	
		log.debug("toEditAdmin" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		admin = adminService.getAdmin(id);	
		initSelect(request);	
		log.debug("toEditAdmin" + "结束");	
		return Constants.EDIT;	
	}	
		
	/**	
	 * 	
	 * 进入调整访问周期界面	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String tomodifyZQ() {	
		log.debug("tomodifyZQ" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		admin = adminService.getAdmin(id);	
		initSelect(request);	
		log.debug("tomodifyZQ" + "结束");	
		return "tomodifyZQ";	
	}	
	
	/**	
	 * 	
	 * 查看信息	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String viewAdmin() {	
		log.debug("viewAdmin" + "开始");	
		admin = adminService.getAdmin(id);	
		log.debug("viewAdmin" + "结束");	
		return Constants.VIEW;	
	}	
	
	/**	
	 * 	
	 * 编辑	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String editAdmin() {	
		log.debug("editAdmin" + "开始");	
		try {	
			
			
			adminService.update(admin);	
			admin = new Admin();	
			
		} catch (Exception e) {	
			log.error("editAdmin failed" + admin.toString());	
		}	
		log.debug("editAdmin" + "结束");	
		return queryAdmin();	
	}	
	
	
	public String editMyAdmin() {	
		log.debug("editMyAdmin" + "开始");	
		try {	
			
			HttpServletRequest request = ServletActionContext.getRequest();
			
			adminService.update(admin);	
			request.getSession().setAttribute("currentUser", admin);
			admin = new Admin();	
			
			request.setAttribute("messageInfo", "修改成功！");
			
		} catch (Exception e) {	
			log.error("editMyAdmin failed" + admin.toString());	
		}	
		log.debug("editMyAdmin" + "结束");	
		return "my";	
	}	
	
		
		
	/**	
	 * @param AdminService	
	 *            the AdminService to set	
	 */	
	public void setAdminService(AdminService adminService) {	
		this.adminService = adminService;	
	}	
	
	public Admin getAdmin() {	
		return admin;	
	}	
	
	public void setAdmin(Admin admin) {	
		this.admin = admin;	
	}	
	
	public Long getId() {	
		return id;	
	}	
	
	public void setId(Long id) {	
		this.id = id;	
	}	
	
	public void initSelect(HttpServletRequest request) {	
			
 	
	}	
	
}	
