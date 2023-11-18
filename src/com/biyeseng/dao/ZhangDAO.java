package com.biyeseng.dao;

import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Zhang;	
	
import java.util.List;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public interface ZhangDAO	
{	
	
	public void save(Zhang zhang);	
		
	public void update(Zhang zhang);	
		
	public void delete(Zhang zhang);	
		
	public Zhang getZhang(Zhang zhang);	
		
	public Zhang getZhang(Long id);	
	/**	
	 * 获得Zhang的分页列表	
	 * @param pageBean	
	 * @return	
	 */	
	public List<Zhang> findPageInfoZhang(Zhang zhang,PageBean pageBean);	
		
	public Integer getCount(Zhang zhang);	
		
	public List<Zhang> findPageInfoZhang1(Zhang zhang,PageBean pageBean);	
		
	public Integer getCount1(Zhang zhang);	
		
	public List<Zhang> getAllZhang() ;	
}
