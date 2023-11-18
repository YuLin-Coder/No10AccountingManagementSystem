package com.biyeseng.dao;

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.User;	
	
import java.util.List;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface UserDAO	
{	
	
	public void save(User user);	
		
	public void update(User user);	
		
	public void delete(User user);	
		
	public User getUser(User user);	
		
	public User getUser(Long id);	
	/**	
	 * 获得User的分页列表	
	 * @param pageBean	
	 * @return	
	 */	
	public List<User> findPageInfoUser(User user,PageBean pageBean);	
		
	public Integer getCount(User user);	
		
	public List<User> findPageInfoUser1(User user,PageBean pageBean);	
		
	public Integer getCount1(User user);	
		
	public List<User> getAllUser() ;	
	
	public List<User> findPageInfoUserInXie(Long userid);
}
