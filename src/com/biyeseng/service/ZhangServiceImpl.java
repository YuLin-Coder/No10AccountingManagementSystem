package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.dao.ZhangDAO;	
import com.biyeseng.vo.Zhang;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class ZhangServiceImpl implements ZhangService {	
	private ZhangDAO zhangDAO;	
	
	public void save(Zhang zhang) {	
		zhangDAO.save(zhang);	
	}	
	
	public void update(Zhang zhang) {	
		zhangDAO.update(zhang);	
	}	
	
	public Zhang getZhang(Zhang zhang) {	
		return zhangDAO.getZhang(zhang);	
	}	
	
	public Zhang getZhang(Long id) {	
		return zhangDAO.getZhang(id);	
	}	
	
	public void delete(Zhang zhang) {	
		zhangDAO.delete(zhang);	
	}	
	
	public List<Zhang> findPageInfoZhang(Zhang zhang, PageBean pageBean) {	
		return zhangDAO.findPageInfoZhang(zhang, pageBean);	
	}	
	
	public Integer getCount(Zhang zhang) {	
		return zhangDAO.getCount(zhang);	
	}	
	
	public void setZhangDAO(ZhangDAO zhangDAO) {	
		this.zhangDAO = zhangDAO;	
	}	
	
	public List<Zhang> findPageInfoZhang1(Zhang zhang, PageBean pageBean) {	
	
		return zhangDAO.findPageInfoZhang1(zhang, pageBean);	
	}	
	
	public Integer getCount1(Zhang zhang) {	
	
		return zhangDAO.getCount1(zhang);	
	}	
	
	public List<Zhang> getAllZhang() {	
	
		return zhangDAO.getAllZhang();	
	}	
}