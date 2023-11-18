package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.dao.UserDAO;	
import com.biyeseng.vo.User;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class UserServiceImpl implements UserService {	
	private UserDAO userDAO;	
	
	public void save(User user) {	
		userDAO.save(user);	
	}	
	
	public void update(User user) {	
		userDAO.update(user);	
	}	
	
	public User getUser(User user) {	
		return userDAO.getUser(user);	
	}	
	
	public User getUser(Long id) {	
		return userDAO.getUser(id);	
	}	
	
	public void delete(User user) {	
		userDAO.delete(user);	
	}	
	
	public List<User> findPageInfoUser(User user, PageBean pageBean) {	
		return userDAO.findPageInfoUser(user, pageBean);	
	}	
	
	public Integer getCount(User user) {	
		return userDAO.getCount(user);	
	}	
	
	public void setUserDAO(UserDAO userDAO) {	
		this.userDAO = userDAO;	
	}	
	
	public List<User> findPageInfoUser1(User user, PageBean pageBean) {	
	
		return userDAO.findPageInfoUser1(user, pageBean);	
	}	
	
	public Integer getCount1(User user) {	
	
		return userDAO.getCount1(user);	
	}	
	
	public List<User> getAllUser() {	
	
		return userDAO.getAllUser();	
	}
	
	public List<User> findPageInfoUserInXie(Long userid){
		return userDAO.findPageInfoUserInXie( userid);	
	}
}
