package com.biyeseng.dao;

import java.util.ArrayList;	
import java.util.List;	
	
import org.apache.commons.lang.StringUtils;	
	
import com.biyeseng.common.HibernateGenericDao;	
import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Admin;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class AdminDAOImpl extends HibernateGenericDao<Admin> implements	
		AdminDAO {	
	
	public void save(Admin admin) {	
		super.save(admin);	
	}	
	
	public void update(Admin admin) {	
		super.update(admin);	
	}	
	
	public void delete(Admin admin) {	
		super.remove(admin);	
	}	
	
	public Admin getAdmin(Admin admin) {	
		return get(admin.getId());	
	}	
	
	public Admin getAdmin(Long id) {	
		return get(id);	
	}	
	
	public List<Admin> getAllAdmin() {	
	
		return getAll();	
	}	
	
	public List<Admin> findPageInfoAdmin(Admin admin, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM admin WHERE 1=1 ");	
		sql = getStringBuffer(admin, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public List<Admin> findPageInfoAdmin1(Admin admin, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM admin WHERE  NAME<>'admin' ");	
		sql = getStringBuffer(admin, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public Integer getCount1(Admin admin) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM admin WHERE NAME<>'admin'  ");	
		sql = getStringBuffer(admin, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	public Integer getCount(Admin admin) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM admin WHERE 1=1 ");	
		sql = getStringBuffer(admin, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	/**	
	 * 构造查询条件	
	 * 	
	 * @param admin	
	 * @param buf3	
	 * @param args	
	 * @return	
	 * @author Alex 10/28/2011 create	
	 */	
	private StringBuffer getStringBuffer(Admin admin, StringBuffer buf,	
			List args) {	
		/*	
		 * 需要加入查询条件时封装	
		 */	
	
		if (StringUtils.isNotBlank(admin.getName())) {	
			buf.append(" and name = ? ");	
			args.add(admin.getName().trim());	
		}	
		
		if (StringUtils.isNotBlank(admin.getPass())) {	
			buf.append(" and pass = ? ");	
			args.add(admin.getPass().trim());	
		}	
	
		return buf;	
	}	
}
