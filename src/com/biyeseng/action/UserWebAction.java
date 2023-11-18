package com.biyeseng.action;	
	

import java.util.Date;	
import java.util.List;	
	
import javax.servlet.http.HttpServletRequest;	

import org.apache.log4j.Logger;	
import org.apache.struts2.ServletActionContext;	
	
import com.biyeseng.common.Constants;	
	
import com.biyeseng.common.PageBean;	
	
import com.biyeseng.service.UserService;	
import com.biyeseng.vo.User;	
	
import com.opensymphony.xwork2.ActionSupport;	
	

/**
 * 用户操作
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class UserWebAction extends ActionSupport {	
	
	/**	
	 * Service层实例	
	 */	
	private UserService userService;	
	
	/**	
	 * 日志	
	 */	
	private Logger log = Logger.getLogger(this.getClass());	
	
	private User user = new User();	
	
	private Long id;	
	
	@SuppressWarnings("unchecked")	
	public String queryUser() {	
		log.debug("queryUser" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		initSelect(request);	
	
		int resultSize = 0;	
		PageBean pageBean = null;	
			
//		Loginuser user = (Loginuser) request.getSession().getAttribute("currentUser");	
			
		resultSize = userService.getCount(user);	
		pageBean = PageBean.getPageBean("user",	
				resultSize, request);	
		pageBean.setPageSize(10);	
		List list = userService.findPageInfoUser(user, pageBean);	
		request.setAttribute("user_list", list);	
		log.debug("queryUser" + "结束");	
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
	public String toAddUser() {	
		log.debug("toAddUser" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		initSelect(request);	
		Date date = new Date();	
	 	
			
		log.debug("toAddUser" + "结束");	
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
	public String addUser() {	
		log.debug("addUser" + "开始");	
		try {	
			user.setAdddate(new Date().toLocaleString());	
			userService.save(user);	
				
			user = new User();	
		} catch (Exception e) {	
			e.printStackTrace();	
			log.error("addUser failed" + user.toString());	
		}	
		log.debug("addUser" + "结束");	
		return queryUser();	
	}	
	
	public String regUser() {	
		log.debug("addUser" + "开始");	
		try {	
				
			user.setAdddate(new Date().toLocaleString());
			userService.save(user);	
				
			user = new User();
			HttpServletRequest request = ServletActionContext.getRequest();
			request.setAttribute("messageInfo", "用户注册成功，请登录！");
		} catch (Exception e) {	
			e.printStackTrace();	
			log.error("addUser failed" + user.toString());	
		}	
		log.debug("addUser" + "结束");	
		return "login";	
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
	public String delUser() {	
		log.debug("delUser" + "开始");	
		try {	
			user.setId(id);	
			userService.delete(user);	
			user = new User();	
		} catch (Exception e) {	
			log.error("delUser failed" + user.toString());	
		}	
		log.debug("delUser" + "结束");	
		return queryUser();	
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
	public String toEditUser() {	
		log.debug("toEditUser" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		user = userService.getUser(id);	
		initSelect(request);	
		log.debug("toEditUser" + "结束");	
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
		user = userService.getUser(id);	
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
	public String viewUser() {	
		log.debug("viewUser" + "开始");	
		user = userService.getUser(id);	
		log.debug("viewUser" + "结束");	
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
	public String editUser() {	
		log.debug("editUser" + "开始");	
		try {	
				
			userService.update(user);	
			HttpServletRequest request = ServletActionContext.getRequest();
			request.getSession().setAttribute("currentUser", user);
			user = new User();	
			request.setAttribute("messageInfo", "更新成功！");
		} catch (Exception e) {	
			log.error("editUser failed" + user.toString());	
		}	
		log.debug("editUser" + "结束");	
		return "editsc";	
	}	
	
		
		
	/**	
	 * @param UserService	
	 *            the UserService to set	
	 */	
	public void setUserService(UserService userService) {	
		this.userService = userService;	
	}	
	
	public User getUser() {	
		return user;	
	}	
	
	public void setUser(User user) {	
		this.user = user;	
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
