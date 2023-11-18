package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.dao.TongDAO;	
import com.biyeseng.vo.Tong;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class TongServiceImpl implements TongService {	
	private TongDAO tongDAO;	
	
	public void save(Tong tong) {	
		tongDAO.save(tong);	
	}	
	
	public void update(Tong tong) {	
		tongDAO.update(tong);	
	}	
	
	public Tong getTong(Tong tong) {	
		return tongDAO.getTong(tong);	
	}	
	
	public Tong getTong(Long id) {	
		return tongDAO.getTong(id);	
	}	
	
	public void delete(Tong tong) {	
		tongDAO.delete(tong);	
	}	
	
	public List<Tong> findPageInfoTong(Tong tong, PageBean pageBean) {	
		return tongDAO.findPageInfoTong(tong, pageBean);	
	}	
	
	public Integer getCount(Tong tong) {	
		return tongDAO.getCount(tong);	
	}	
	
	public void setTongDAO(TongDAO tongDAO) {	
		this.tongDAO = tongDAO;	
	}	
	
	public List<Tong> findPageInfoTong1(Tong tong, PageBean pageBean) {	
	
		return tongDAO.findPageInfoTong1(tong, pageBean);	
	}	
	
	public Integer getCount1(Tong tong) {	
	
		return tongDAO.getCount1(tong);	
	}	
	
	public List<Tong> getAllTong() {	
	
		return tongDAO.getAllTong();	
	}	
}
