package com.biyeseng.common;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;
import java.sql.Clob;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.PropertyUtils;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.metadata.ClassMetadata;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.util.Assert;
import org.springframework.util.ReflectionUtils;

/**
 *
 * @author biyeseng
 * @company www.baidu.com
 *
 */
@SuppressWarnings("unchecked")
public abstract class HibernateGenericDao<T> extends HibernateDaoSupport {
	protected Class<T> entityClass;

	private JdbcTemplate jdbcTemplate;

	public HibernateGenericDao() {
		entityClass = GenericsUtils.getSuperClassGenricType(getClass());
	}


	protected Class<T> getEntityClass() {
		return entityClass;
	}


	public T get(Serializable id) {
		return (T) getHibernateTemplate().get(entityClass, id);
	}


	public Object get(Serializable id,Class clazz) {
		return getHibernateTemplate().get(clazz, id);
	}


	public List<T> getAll() {
		return getHibernateTemplate().loadAll(entityClass);
	}


	public List<T> getAll(String orderBy, boolean isAsc) {
		Assert.hasText(orderBy);
		if(isAsc){
            return getHibernateTemplate().findByCriteria(DetachedCriteria.forClass(entityClass).addOrder(Order.asc(orderBy)));

        }
			else{
            return getHibernateTemplate().findByCriteria(DetachedCriteria.forClass(entityClass).addOrder(Order.desc(orderBy)));

        }
				}


	public List<T> getByExample(Object o) {
		List<T> results = getHibernateTemplate().findByExample(o);
		return results;
	}


	public void save(Object o) {
		Session session = null;
		try {
			session = getSession();
			session.save(o);
			session.flush();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
	}


	public void update(Object o) {
		Session session = null;
		try {
			session = getSession();
			session.merge(o);
			session.flush();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
	}

	public void saveOrUpdate(Object o) {
		Session session = null;
		try {
			session = getSession();
			session.saveOrUpdate(o);
			session.flush();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
	}


	public void remove(Object o) {
		Session session = null;
		try {
			session = getSession();
			session.delete(o);
			session.flush();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
		// getHibernateTemplate().delete(o);
	}

	public void removeById(Serializable id) {
		remove(get(id));
	}

	public void flush() {
		getHibernateTemplate().flush();
	}

	public void clear() {
		getHibernateTemplate().clear();
	}


	public Query createQuery(Session session, String hql, Object... values) {
		Assert.hasText(hql);
		Query query = session.createQuery(hql);
		for(int i = 0; i < values.length; i++) {
			query.setParameter(i, values[i]);
		}
		return query;
	}


	public Criteria createCriteria(Session session, Criterion... criterions) {
		Criteria criteria = session.createCriteria(entityClass);

		for(Criterion c : criterions) {
			criteria.add(c);
		}
		return criteria;
	}


	public Criteria createCriteria(Session session, String orderBy, boolean isAsc, Criterion... criterions) {
		Assert.hasText(orderBy);

		Criteria criteria = createCriteria(session, criterions);

		if(isAsc) {
            criteria.addOrder(Order.asc(orderBy));
        }
		else{
            criteria.addOrder(Order.desc(orderBy));
        }


		return criteria;
	}


	public List find(String hql, Object... values) {
		Assert.hasText(hql);
		return getHibernateTemplate().find(hql, values);
	}

	public List<T> findBy(String propertyName, Object value) throws RuntimeException {
		Assert.hasText(propertyName);
		Session session = null;
		List<T> ll = new ArrayList<T>();
		try {
			session = getSession();
			ll = createCriteria(session, Restrictions.eq(propertyName, value)).list();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
		return ll;
	}


	public List<T> findBy(String propertyName, Object value, String orderBy, boolean isAsc) {
		Assert.hasText(propertyName);
		Assert.hasText(orderBy);
		Session session = null;
		List<T> ll = new ArrayList<T>();
		try {
			session = getSession();
			ll = createCriteria(session, orderBy, isAsc, Restrictions.eq(propertyName, value)).list();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
		return ll;
	}


	public List<T> findByValues(String propertyName, Collection values) {
		Assert.hasText(propertyName);
		Session session = null;
		List<T> ll = new ArrayList<T>();
		try {
			session = getSession();
			ll = createCriteria(session, Restrictions.in(propertyName, values)).list();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
		return ll;

	}


	public List<T> findByNamesAndValues(List<String> propertyNames, List values) {
		List<T> ll = new ArrayList<T>();
		Session session = getSession();
		try {
			Criteria criteria = session.createCriteria(entityClass);
			for(int i = 0; i < propertyNames.size(); i++) {
				String propertyName = propertyNames.get(i);
				Object value = values.get(i);
				if(value != null) {
					criteria.add(Restrictions.eq(propertyName, value));
				} else {
					criteria.add(Restrictions.isNull(propertyName));
				}
			}
			ll = criteria.list();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				releaseSession(session);
			}
		}
		return ll;
	}


	public T findUniqueBy(String propertyName, Object value) {
		Assert.hasText(propertyName);
		Session session = null;
		Object obj = new Object();
		try {
			session = getSession();
			obj = createCriteria(session, Restrictions.eq(propertyName, value)).uniqueResult();
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
		return (T) obj;
	}


	public boolean isUnique(Object entity, String uniquePropertyNames) {
		Assert.hasText(uniquePropertyNames);
		Session session = null;
		String[] nameList = uniquePropertyNames.split(",");
		session = getSession();
		Criteria criteria = createCriteria(session).setProjection(Projections.rowCount());
		try {
			for(String name : nameList) {
				criteria.add(Restrictions.eq(name, PropertyUtils.getProperty(entity, name)));
			}
			String idName = getIdName(entityClass);
			Serializable id = getId(entity);
			if(id != null) {
                criteria.add(Restrictions.not(Restrictions.eq(idName, id)));
            }
		}
		catch(Exception e) {
			ReflectionUtils.handleReflectionException(e);
		}
		boolean result = false;
		try {
			result = (Integer) criteria.uniqueResult() == 0;
		}
		catch(RuntimeException e) {
			throw e;
		}
		finally {
			if(session != null) {
				this.releaseSession(session);
			}
		}
		return result;
	}


	public Serializable getId(Object entity) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
		Assert.notNull(entity);
		Assert.notNull(entityClass);
		return (Serializable) PropertyUtils.getProperty(entity, getIdName(entityClass));
	}


	public String getIdName(Class clazz) {
		Assert.notNull(clazz);
		ClassMetadata meta = getSessionFactory().getClassMetadata(clazz);
		Assert.notNull(meta, "Class " + clazz + " not define in hibernate session factory.");
		String idName = meta.getIdentifierPropertyName();
		Assert.hasText(idName, clazz.getSimpleName() + " has no identifier property define.");
		return idName;
	}


	public void evit(Object entity) {
		getHibernateTemplate().evict(entity);
	}


	public void updateOrDelete(String hql) throws Exception {
		Session session = null;
		try {
			session = getSession();
			session.createQuery(hql).executeUpdate();
		}
		catch(Exception e) {
			throw e;
		}
		finally {
			if(session != null) {
				releaseSession(session);
			}
		}
	}


	public List findBySQL(String sql,List args) throws Exception {
		List list = new ArrayList();
		Session session = null;
		try {
			session = getSession();
			Query query = session.createSQLQuery(sql).setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);
			setParameter(query,args);
			list = query.list();

		}
		catch(Exception e) {
			throw e;
		}
		finally {
			super.releaseSession(session);
		}
		return list;
	}


	public List queryByHql(String hql,List args) throws Exception {
		List list = new ArrayList();
		Session session = null;
		try {
			session = getSession();
			Query query = session.createQuery(hql);
			setParameter(query,args);
			list = query.list();
		}
		catch(Exception e) {
			throw e;
		}
		finally {
			if(session != null) {
				releaseSession(session);
			}
		}
		return list;
	}


	public List queryByHqlAll(String hql, List args) {
		return getHibernateTemplate().find(hql, args.toArray());
	}


	public List<T> queryBySQLAll(String sql, List args) {
		List<T> res = null;
		try {
			if(args == null){
				args = new ArrayList();
			}
			List<Map<String, Object>> listMap = jdbcTemplate.queryForList(sql, args.toArray());
			if(listMap != null && listMap.size() > 0) {
				res = new ArrayList();
				for(Map map : listMap) {
					T t = entityClass.newInstance();
					Iterator it = map.entrySet().iterator();
					while (it.hasNext()) {
						Map.Entry<String, Object> me = (Entry) it.next();
						String key = me.getKey().toLowerCase();
						key = StringUtils.getNameFromDB(key, false);
						Object value = me.getValue();
						if(value == null){
							continue;
						}
						if(value instanceof Timestamp){
							Date dateValue = DateUtils.parseTimestamp(value.toString());
							BeanUtils.setProperty(t, key, dateValue);
							continue;
						}
						BeanUtils.setProperty(t, key, value);
					}
					res.add(t);
				}
			}
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
		return res;

	}

	public List<T> getPageInfo(PageBean pageBean,String sql,List list) {
		List<T> res = null;
		Session session = this.getSession();
		try {
			Query query = session.createSQLQuery(sql.toString()).setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP);


			if(pageBean != null) {
				// 设置开始页
				query.setFirstResult(pageBean.getPageSize() * (pageBean.getPageIndex() - 1));
				// 设置结束页
				query.setMaxResults(pageBean.getPageSize());
			}
			setParameter(query,list);
			query.list();
			List<Map> listMap = query.list();

			if(listMap != null && listMap.size() > 0) {
				res = new ArrayList();
				for(Map map : listMap) {
					T t = entityClass.newInstance();
					Iterator it = map.entrySet().iterator();
					while (it.hasNext()) {
						Map.Entry<String, Object> me = (Entry) it.next();
						String key = StringUtils.getNameFromDB(me.getKey(), false);
						Object value = me.getValue();
						if(value == null){
							continue;
						}
						if(value instanceof Timestamp){
							Date dateValue = DateUtils.parseTimestamp(value.toString());
							BeanUtils.setProperty(t, key, dateValue);
							continue;
						}
						if(value instanceof Date){
							Date dateValue = DateUtils.parseDate(value.toString());
							BeanUtils.setProperty(t, key, dateValue);
							continue;
						}
						if(value instanceof Clob){
							if(value != null){
								Clob clob = (Clob) value;
								String dateValue = clob.getSubString(1, (int) clob.length());
								BeanUtils.setProperty(t, key, dateValue);
								continue;
							}
						}
						BeanUtils.setProperty(t, key, value);
					}
					res.add(t);
				}
			}
		}
		catch(Exception re) {
			re.printStackTrace();
			logger.error("getPageInfo failed");
			return null;
		}
		finally {
			if(session != null) {
				releaseSession(session);
			}
		}
		return res;

	}


	public void setParameter(Query query,List args){
		if(null != args && args.size()>0){
			for(int i=0;i<args.size();i++){
				query.setParameter(i, args.get(i));
			}
		}
	}

	public Integer getCount(String sql, Object[] args) {
		return jdbcTemplate.queryForObject(sql, args,Integer.class);
	}


	public List select(String sql, Object[] args, RowMapper rowMapper) {
		return jdbcTemplate.query(sql, args, rowMapper);
	}

	public List select(String sql) {
		return jdbcTemplate.queryForList(sql);
	}

	public void execute(String sql){
		jdbcTemplate.execute(sql);
	}
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

}