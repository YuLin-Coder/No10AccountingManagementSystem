package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.dao.AdminDAO;	
import com.biyeseng.vo.Admin;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class AdminServiceImpl implements AdminService {	
	private AdminDAO adminDAO;	
	
	public void save(Admin admin) {	
		adminDAO.save(admin);	
	}	
	
	public void update(Admin admin) {	
		adminDAO.update(admin);	
	}	
	
	public Admin getAdmin(Admin admin) {	
		return adminDAO.getAdmin(admin);	
	}	
	
	public Admin getAdmin(Long id) {	
		return adminDAO.getAdmin(id);	
	}	
	
	public void delete(Admin admin) {	
		adminDAO.delete(admin);	
	}	
	
	public List<Admin> findPageInfoAdmin(Admin admin, PageBean pageBean) {	
		return adminDAO.findPageInfoAdmin(admin, pageBean);	
	}	
	
	public Integer getCount(Admin admin) {	
		return adminDAO.getCount(admin);	
	}	
	
	public void setAdminDAO(AdminDAO adminDAO) {	
		this.adminDAO = adminDAO;	
	}	
	
	public List<Admin> findPageInfoAdmin1(Admin admin, PageBean pageBean) {	
	
		return adminDAO.findPageInfoAdmin1(admin, pageBean);	
	}	
	
	public Integer getCount1(Admin admin) {	
	
		return adminDAO.getCount1(admin);	
	}	
	
	public List<Admin> getAllAdmin() {	
	
		return adminDAO.getAllAdmin();	
	}	
}	
