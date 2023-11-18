package com.biyeseng.service;

import java.util.List;	

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Zhang;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface ZhangService	
{	
    public void save(Zhang zhang);	
		
	public void update(Zhang zhang);	
		
	public void delete(Zhang zhang);	
		
	public Zhang getZhang(Zhang zhang);	
		
	public Zhang getZhang(Long id);	
	
	public List<Zhang> findPageInfoZhang(Zhang zhang,PageBean pageBean);	
		
	public Integer getCount(Zhang zhang);	
		
	public List<Zhang> findPageInfoZhang1(Zhang zhang,PageBean pageBean);	
		
	public Integer getCount1(Zhang zhang);	
		
	public List<Zhang> getAllZhang();	
}	
