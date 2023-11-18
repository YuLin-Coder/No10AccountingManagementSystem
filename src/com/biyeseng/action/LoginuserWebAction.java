package com.biyeseng.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;


import com.biyeseng.common.DataSource;

import com.biyeseng.service.AdminService;
import com.biyeseng.service.UserService;
 
import com.biyeseng.vo.Admin;
import com.biyeseng.vo.User;
 

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * 登录操作
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class LoginuserWebAction extends ActionSupport {

	 

	private AdminService adminService;
	
	private UserService userService;	
	
	 

 

	/**
	 * 日志
	 */
	private Logger log = Logger.getLogger(this.getClass());

 

	private Long id;

	private String type;

	private String name;

	private String password;
	
	private String randomCode;

	/**
	 * 用户注册
	 * 
	 * @return
	 */
	public String register() {
		log.debug("register" + "开始");
		HttpServletRequest request = ServletActionContext.getRequest();
		initSelect(request);
		log.debug("register" + "结束");
		return "register";
	}

	 

	public String logon() {
		log.debug("logon" + "开始");
		System.out.println(type + "-----------");
		List list = null;
		HttpServletRequest request = ServletActionContext.getRequest();
		String radncode=request.getSession().getAttribute("RANDOMVALIDATECODEKEY").toString();
		if(!this.randomCode.equalsIgnoreCase(radncode)){
			 request.setAttribute("messageInfo", "验证码错误！");
			 if (type.equals("管理员")) {
				 return "adminfail";
			 }else{
				 return "fail"; 
			 }
		}
		if (type.equals("管理员")) {
			Admin admin = new Admin();
			admin.setName(name);
			admin.setPass(password);
			list = adminService.findPageInfoAdmin(admin, null);
			if (list == null) {
				request.setAttribute("messageInfo", "用户名或密码错误！");
				return "adminfail";
			} else {
				admin = (Admin) list.get(0);
				admin.setRname(admin.getName());
				request.getSession().setAttribute("currentUser", admin);
				request.getSession().setAttribute("currentType", "管理员");
			}
		}
		if (type.equals("用户")) {
			User user = new User();
			user.setName(name);
			user.setPass(password);
			list = userService.findPageInfoUser(user, null);
			if (list == null) {
				request.setAttribute("messageInfo", "用户名或密码错误！");
				return "fail";
			} else {
				user = (User) list.get(0);
				request.getSession().setAttribute("currentUser", user);
				request.getSession().setAttribute("currentType", "用户");
			}
		}
		
		 

		 

		log.debug("logon" + "结束");

		return "success";
	}

	/**
	 * 退出
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String logonOut() {
		log.debug("logonOut" + "开始");
		HttpServletRequest request = ServletActionContext.getRequest();
		request.getSession().invalidate();
		return "fail";
	}

	 

	public AdminService getAdminService() {
		return adminService;
	}

	public void setAdminService(AdminService adminService) {
		this.adminService = adminService;
	}

	 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void initSelect(HttpServletRequest request) {
		request.setAttribute("yhlx", DataSource.YHLX);

	}



	public UserService getUserService() {
		return userService;
	}



	public void setUserService(UserService userService) {
		this.userService = userService;
	}



	 



	public String getRandomCode() {
		return randomCode;
	}



	public void setRandomCode(String randomCode) {
		this.randomCode = randomCode;
	}

	 

}
