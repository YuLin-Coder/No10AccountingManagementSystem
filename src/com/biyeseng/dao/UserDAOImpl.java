package com.biyeseng.dao;

import java.util.ArrayList;	
import java.util.List;	
	
import org.apache.commons.lang.StringUtils;	
	
import com.biyeseng.common.HibernateGenericDao;	
import com.biyeseng.common.PageBean;	
import com.biyeseng.vo.User;	

	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class UserDAOImpl extends HibernateGenericDao<User> implements	
		UserDAO {	
	
	public void save(User user) {	
		super.save(user);	
	}	
	
	public void update(User user) {	
		super.update(user);	
	}	
	
	public void delete(User user) {	
		super.remove(user);	
	}	
	
	public User getUser(User user) {	
		return get(user.getId());	
	}	
	
	public User getUser(Long id) {	
		return get(id);	
	}	
	
	public List<User> getAllUser() {	
	
		return getAll();	
	}	
	
	public List<User> findPageInfoUser(User user, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM user WHERE 1=1 ");	
		sql = getStringBuffer(user, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public List<User> findPageInfoUser1(User user, PageBean pageBean) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT * FROM user WHERE  NAME<>'admin' ");	
		sql = getStringBuffer(user, sql, args);	
		return getPageInfo(pageBean, sql.toString(), args);	
	}	
	
	public Integer getCount1(User user) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM user WHERE NAME<>'admin'  ");	
		sql = getStringBuffer(user, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	public Integer getCount(User user) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append(" SELECT COUNT(0) FROM user WHERE 1=1 ");	
		sql = getStringBuffer(user, sql, args);	
		return super.getCount(sql.toString(), args.toArray());	
	}	
	
	/**	
	 * 构造查询条件	
	 * 	
	 * @param user	
	 * @param buf3	
	 * @param args	
	 * @return	
	 * @author Alex 10/28/2011 create	
	 */	
	private StringBuffer getStringBuffer(User user, StringBuffer buf,	
			List args) {	
		/*	
		 * 需要加入查询条件时封装	
		 */	
	
		if (StringUtils.isNotBlank(user.getName())) {	
			buf.append(" and name = ? ");	
			args.add(user.getName().trim());	
		}	
		
		if (StringUtils.isNotBlank(user.getPass())) {	
			buf.append(" and pass = ? ");	
			args.add(user.getPass().trim());	
		}	
	
		return buf;	
	}	
	
	public List<User> findPageInfoUserInXie(Long userid) {	
		List args = new ArrayList();	
		StringBuffer sql = new StringBuffer();	
		sql.append("select distinct st.id,st.name,st.rname,st.sex,st.age,st.zuanye,st.nianji,st.tel from user st,userxie sx,xie xi where st.id=sx.userid and sx.xieid =xi.id  and xi.id="+userid);	
		
		return getPageInfo(null, sql.toString(), args);	
	}
}	
