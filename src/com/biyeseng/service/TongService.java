package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Tong;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface TongService	
{	
    public void save(Tong tong);	
		
	public void update(Tong tong);	
		
	public void delete(Tong tong);	
		
	public Tong getTong(Tong tong);	
		
	public Tong getTong(Long id);	
	
	public List<Tong> findPageInfoTong(Tong tong,PageBean pageBean);	
		
	public Integer getCount(Tong tong);	
		
	public List<Tong> findPageInfoTong1(Tong tong,PageBean pageBean);	
		
	public Integer getCount1(Tong tong);	
		
	public List<Tong> getAllTong();	
}	
