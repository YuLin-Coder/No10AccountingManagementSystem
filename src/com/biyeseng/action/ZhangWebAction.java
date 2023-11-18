package com.biyeseng.action;	
	


import java.util.Calendar;	
import java.util.Date;	
import java.util.List;	
	
import javax.servlet.http.HttpServletRequest;	
	
import org.apache.commons.lang.StringUtils;	
import org.apache.log4j.Logger;	
import org.apache.struts2.ServletActionContext;	
	
import com.biyeseng.common.Constants;	
import com.biyeseng.common.DataSource;
	
import com.biyeseng.common.PageBean;	
	
import com.biyeseng.service.TongService;
import com.biyeseng.service.ZhangService;	
import com.biyeseng.vo.User;
import com.biyeseng.vo.Tong;
import com.biyeseng.vo.Zhang;	
	
import com.opensymphony.xwork2.ActionSupport;	
	
/**
 * 记账Action
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class ZhangWebAction extends ActionSupport {	
	
	/**	
	 * Service层实例	
	 */	
	private ZhangService zhangService;	
	
	private TongService tongService;	
	
	/**	
	 * 日志	
	 */	
	private Logger log = Logger.getLogger(this.getClass());	
	
	private Zhang zhang = new Zhang();	
	
	private Long id;	
	
	private String qmonth;
	
	private String qyear;
	
	@SuppressWarnings("unchecked")	
	public String queryZhang() {	
		log.debug("queryZhang" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		initSelect(request);	
	
		int resultSize = 0;	
		PageBean pageBean = null;	
			

			
		resultSize = zhangService.getCount(zhang);	
		pageBean = PageBean.getPageBean("zhang",	
				resultSize, request);	
		pageBean.setPageSize(10);	
		List list = zhangService.findPageInfoZhang(zhang, pageBean);	
		request.setAttribute("zhang_list", list);	
		log.debug("queryZhang" + "结束");	
		return Constants.LIST;	
	}	
		
 	
		
	
	/**	
	 * 	
	 * 进入增加界面	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String toAddZhang() {	
		log.debug("toAddZhang" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		initSelect(request);	
		Date date = new Date();	
	 	
			
		log.debug("toAddZhang" + "结束");	
		return Constants.ADD;	
	}	
	
	/**	
	 * 	
	 * 增加	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String addZhang() {	
		log.debug("addZhang" + "开始");	
		try {	
			HttpServletRequest request = ServletActionContext.getRequest();	
			User user=(User) request.getSession().getAttribute("currentUser");
			zhang.setUser(user.getName());
			zhang.setRname(user.getRname());
			zhangService.save(zhang);	
			
			Tong tongs=new Tong();
			tongs.setUser(user.getName());
			String date=zhang.getDate();
			String year=date.split("-")[0];
			String month=date.split("-")[1];
			tongs.setYear(year);
			tongs.setMonth(month);
			List<Tong> list=tongService.findPageInfoTong(tongs, null);
			if(list!=null && list.size()>0){
				Tong to=list.get(0);
				if(zhang.getType().equals("出账")){
					to.setZhi(to.getZhi()+zhang.getCount());
				}else{
					to.setShou(to.getShou()+zhang.getCount());
				}
				tongService.update(to);
			}else{
				Tong to=new Tong();
				to.setDate(zhang.getDate());
				to.setKind(zhang.getKind());
				to.setMonth(month);
				to.setYear(year);
				to.setType(zhang.getType());
				to.setUser(user.getName());
				
				if(zhang.getType().equals("出账")){
					to.setZhi(zhang.getCount());
					to.setShou(0.0f);
				}else{
					to.setShou(zhang.getCount());
					to.setZhi(0.0f);
				}
				tongService.save(to);
			}
				
			zhang = new Zhang();	
		} catch (Exception e) {	
			e.printStackTrace();	
			log.error("addZhang failed" + zhang.toString());	
		}	
		log.debug("addZhang" + "结束");	
		return queryZhang();	
	}	
	
	/**	
	 * 	
	 * 删除	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String delZhang() {	
		log.debug("delZhang" + "开始");	
		try {	
			zhang.setId(id);	
			zhangService.delete(zhang);	
			zhang = new Zhang();	
		} catch (Exception e) {	
			log.error("delZhang failed" + zhang.toString());	
		}	
		log.debug("delZhang" + "结束");	
		return queryZhang();	
	}	
	
	/**	
	 * 	
	 * 进入编辑界面	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String toEditZhang() {	
		log.debug("toEditZhang" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		zhang = zhangService.getZhang(id);	
		initSelect(request);	
		log.debug("toEditZhang" + "结束");	
		return Constants.EDIT;	
	}	
		
	/**	
	 * 	
	 * 进入调整访问周期界面	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String tomodifyZQ() {	
		log.debug("tomodifyZQ" + "开始");	
		HttpServletRequest request = ServletActionContext.getRequest();	
		zhang = zhangService.getZhang(id);	
		initSelect(request);	
		log.debug("tomodifyZQ" + "结束");	
		return "tomodifyZQ";	
	}	
	
	/**	
	 * 	
	 * 查看信息	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String viewZhang() {	
		log.debug("viewZhang" + "开始");	
		zhang = zhangService.getZhang(id);	
		log.debug("viewZhang" + "结束");	
		return Constants.VIEW;	
	}	
	
	/**	
	 * 	
	 * 编辑	
	 * 	
	 * @param mapping	
	 * @param form	
	 * @param request	
	 * @param response	
	 * @return	
	 * @throws Exception	
	 */	
	public String editZhang() {	
		log.debug("editZhang" + "开始");	
		try {	
				
			zhangService.update(zhang);	
			zhang = new Zhang();	
		} catch (Exception e) {	
			log.error("editZhang failed" + zhang.toString());	
		}	
		log.debug("editZhang" + "结束");	
		return queryZhang();	
	}	
	
	
	public String queryYue(){
		HttpServletRequest request = ServletActionContext.getRequest();	
		//request.setAttribute("messageInfo", "用户名或密码错误！");
		Calendar cal = Calendar.getInstance();// 使用日历类
		String year = cal.get(Calendar.YEAR)+"";
		User user=(User) request.getSession().getAttribute("currentUser");
		String userName=user.getName();
		
		Tong tong=new Tong();
		tong.setYear(year);
		tong.setMonth(qmonth);
		tong.setUser(userName);
		
		List<Tong> list=tongService.findPageInfoTong(tong, null);
		if(list!=null&&list.size()>0){
			Tong t=list.get(0);
			String info="<set name='出账' value='"+t.getZhi()+"' /><set name='入账' value='"+t.getShou()+"' />";
			request.setAttribute("data", info);
		}else{
			request.setAttribute("messageInfo", year+"-"+qmonth+"月没有数据！");
			request.setAttribute("data", "");
		}
		
		return "qylist";
	}
	
	public String queryYear(){
		HttpServletRequest request = ServletActionContext.getRequest();	
		//request.setAttribute("messageInfo", "用户名或密码错误！");
		 
		User user=(User) request.getSession().getAttribute("currentUser");
		String userName=user.getName();
		
		Tong tong=new Tong();
		if(qyear==null||qyear.trim().length()==0){
			Calendar cal = Calendar.getInstance();// 使用日历类
			String year = cal.get(Calendar.YEAR)+"";
			tong.setYear(year);
		}else{
			tong.setYear(qyear);
		 
		}
		
		
		tong.setUser(userName);
		
		List<Tong> list=tongService.findPageInfoTong(tong, null);
		if(list!=null&&list.size()>0){
			String category="";
			String setchu="";
			String setru="";
			for(Tong t:list){
				category=category+"<category label='"+t.getMonth()+"月' />";
				setchu=setchu+"<set value='"+t.getZhi()+"' />";
				setru=setru+"<set value='"+t.getShou()+"' />";
			}
			String xmls= "<categories>"+category+"</categories>"
				+ "<dataset seriesName='出账'>"+setchu+"</dataset>"
				+ "<dataset seriesName='入账'>"+setru+"</dataset>";
			request.setAttribute("data", xmls);
		}else{
			request.setAttribute("messageInfo", qyear+"年没有数据！");
			request.setAttribute("data", "");
		}
		
		return "qnlist";
	}
	
		
		
	/**	
	 * @param ZhangService	
	 *            the ZhangService to set	
	 */	
	public void setZhangService(ZhangService zhangService) {	
		this.zhangService = zhangService;	
	}	
	
	public Zhang getZhang() {	
		return zhang;	
	}	
	
	public void setZhang(Zhang zhang) {	
		this.zhang = zhang;	
	}	
	
	public Long getId() {	
		return id;	
	}	
	
	public void setId(Long id) {	
		this.id = id;	
	}	
	
	
	
	public TongService getTongService() {
		return tongService;
	}




	public void setTongService(TongService tongService) {
		this.tongService = tongService;
	}




	public void initSelect(HttpServletRequest request) {	
		request.setAttribute("ztype", DataSource.TYPE);
		request.setAttribute("zkind", DataSource.KIND);
		System.out.println("---------------");
	}




	public String getQmonth() {
		return qmonth;
	}




	public void setQmonth(String qmonth) {
		this.qmonth = qmonth;
	}




	public String getQyear() {
		return qyear;
	}




	public void setQyear(String qyear) {
		this.qyear = qyear;
	}	
	
	
	
}	
