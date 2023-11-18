package com.biyeseng.dao;

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Admin;	
	
import java.util.List;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface AdminDAO	
{	
	
	public void save(Admin admin);	
		
	public void update(Admin admin);	
		
	public void delete(Admin admin);	
		
	public Admin getAdmin(Admin admin);	
		
	public Admin getAdmin(Long id);	
	/**	
	 * 获得Admin的分页列表	
	 * @param pageBean	
	 * @return	
	 */	
	public List<Admin> findPageInfoAdmin(Admin admin,PageBean pageBean);	
		
	public Integer getCount(Admin admin);	
		
	public List<Admin> findPageInfoAdmin1(Admin admin,PageBean pageBean);	
		
	public Integer getCount1(Admin admin);	
		
	public List<Admin> getAllAdmin() ;	
}
