package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Admin;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface AdminService	
{	
    public void save(Admin admin);	
		
	public void update(Admin admin);	
		
	public void delete(Admin admin);	
		
	public Admin getAdmin(Admin admin);	
		
	public Admin getAdmin(Long id);	
	
	public List<Admin> findPageInfoAdmin(Admin admin,PageBean pageBean);	
		
	public Integer getCount(Admin admin);	
		
	public List<Admin> findPageInfoAdmin1(Admin admin,PageBean pageBean);	
		
	public Integer getCount1(Admin admin);	
		
	public List<Admin> getAllAdmin();	
}	
