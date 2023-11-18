package com.biyeseng.dao;

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Tong;	
	
import java.util.List;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface TongDAO	
{	
	
	public void save(Tong tong);	
		
	public void update(Tong tong);	
		
	public void delete(Tong tong);	
		
	public Tong getTong(Tong tong);	
		
	public Tong getTong(Long id);	
	/**	
	 * 获得Tong的分页列表	
	 * @param pageBean	
	 * @return	
	 */	
	public List<Tong> findPageInfoTong(Tong tong,PageBean pageBean);	
		
	public Integer getCount(Tong tong);	
		
	public List<Tong> findPageInfoTong1(Tong tong,PageBean pageBean);	
		
	public Integer getCount1(Tong tong);	
		
	public List<Tong> getAllTong() ;	
}
