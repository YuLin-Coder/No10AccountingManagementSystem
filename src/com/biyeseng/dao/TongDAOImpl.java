package com.biyeseng.dao;

import java.util.ArrayList;	
import java.util.List;	
	
import org.apache.commons.lang.StringUtils;	
	
import com.biyeseng.common.HibernateGenericDao;	
import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.Tong;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class TongDAOImpl extends HibernateGenericDao<Tong> implements	
		TongDAO {	
	
	public void save(Tong tong) {	
		super.save(tong);	
	}	
	
	public void update(Tong tong) {	
		super.update(tong);	
	}	
	
	public void delete(Tong tong) {	
		super.remove(tong);	
	}	
	
	public Tong getTong(Tong tong) {	
		return get(tong.getId());	
	}	
	
	public Tong getTong(Long id) {	
		return get(id);	
	}	
	
	public List<Tong> getAllTong() {	
	
		return getAll();	
	}	
	
	public List<Tong> findPageInfoTong(Tong tong, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM tong WHERE 1=1 ");	
		sql = getStringBuffer(tong, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public List<Tong> findPageInfoTong1(Tong tong, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM tong WHERE  NAME<>'admin' ");	
		sql = getStringBuffer(tong, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public Integer getCount1(Tong tong) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM tong WHERE NAME<>'admin'  ");	
		sql = getStringBuffer(tong, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	public Integer getCount(Tong tong) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM tong WHERE 1=1 ");	
		sql = getStringBuffer(tong, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	/**	
	 * 构造查询条件	
	 * 	
	 * @param tong	
	 * @param buf3	
	 * @param args	
	 * @return	
	 * @author Alex 10/28/2011 create	
	 */	
	private StringBuffer getStringBuffer(Tong tong, StringBuffer buf,	
			List args) {	
		/*	
		 * 需要加入查询条件时封装	
		 */	
	
		if (StringUtils.isNotBlank(tong.getUser())) {	
			buf.append(" and user = ? ");	
			args.add(tong.getUser().trim());	
		}	
		if (StringUtils.isNotBlank(tong.getMonth())) {	
			buf.append(" and month = ? ");	
			args.add(tong.getMonth().trim());	
		}
		if (StringUtils.isNotBlank(tong.getYear())) {	
			buf.append(" and year = ? ");	
			args.add(tong.getYear().trim());	
		}
	
		return buf;	
	}	
}
