package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.User;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface UserService	
{	
    public void save(User user);	
		
	public void update(User user);	
		
	public void delete(User user);	
		
	public User getUser(User user);	
		
	public User getUser(Long id);	
	
	public List<User> findPageInfoUser(User user,PageBean pageBean);	
		
	public Integer getCount(User user);	
		
	public List<User> findPageInfoUser1(User user,PageBean pageBean);	
		
	public Integer getCount1(User user);	
		
	public List<User> getAllUser();	
	public List<User> findPageInfoUserInXie(Long userid);
}
