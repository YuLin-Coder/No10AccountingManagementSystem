package com.biyeseng.dao;

import java.util.ArrayList;	
import java.util.List;	
	
import org.apache.commons.lang.StringUtils;	
	
import com.biyeseng.common.HibernateGenericDao;	
import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Zhang;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class ZhangDAOImpl extends HibernateGenericDao<Zhang> implements	
		ZhangDAO {	
	
	public void save(Zhang zhang) {	
		super.save(zhang);	
	}	
	
	public void update(Zhang zhang) {	
		super.update(zhang);	
	}	
	
	public void delete(Zhang zhang) {	
		super.remove(zhang);	
	}	
	
	public Zhang getZhang(Zhang zhang) {	
		return get(zhang.getId());	
	}	
	
	public Zhang getZhang(Long id) {	
		return get(id);	
	}	
	
	public List<Zhang> getAllZhang() {	
	
		return getAll();	
	}	
	
	public List<Zhang> findPageInfoZhang(Zhang zhang, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM zhang WHERE 1=1 ");	
		sql = getStringBuffer(zhang, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public List<Zhang> findPageInfoZhang1(Zhang zhang, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM zhang WHERE  NAME<>'admin' ");	
		sql = getStringBuffer(zhang, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public Integer getCount1(Zhang zhang) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM zhang WHERE NAME<>'admin'  ");	
		sql = getStringBuffer(zhang, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	public Integer getCount(Zhang zhang) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM zhang WHERE 1=1 ");	
		sql = getStringBuffer(zhang, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	/**	
	 * 构造查询条件	
	 * 	
	 * @param zhang	
	 * @param buf3	
	 * @param args	
	 * @return	
	 * @author Alex 10/28/2011 create	
	 */	
	private StringBuffer getStringBuffer(Zhang zhang, StringBuffer buf,	
			List args) {	
		/*	
		 * 需要加入查询条件时封装	
		 */	
	
		if (StringUtils.isNotBlank(zhang.getName())) {	
			buf.append(" and name like '%"+zhang.getName().trim()+"%' ");	
			 
		}	
		
		if (StringUtils.isNotBlank(zhang.getType())) {	
			buf.append(" and type = ? ");	
			args.add(zhang.getType().trim());	
		}
		
		if (StringUtils.isNotBlank(zhang.getKind())) {	
			buf.append(" and kind = ? ");	
			args.add(zhang.getKind().trim());	
		}	
	
	
		return buf;	
	}	
}
