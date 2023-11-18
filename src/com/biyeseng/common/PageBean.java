package com.biyeseng.common;


import java.util.ArrayList;
import java.util.List; 
import javax.servlet.http.HttpServletRequest; 
import org.apache.commons.validator.GenericValidator; 

/**
 * 分页Bean
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class PageBean { 
	
	/**
	 * 空构造方法
	 */
	private PageBean(){	
	}
	
	//用hibnate分页时储存查询条件sql字符串
	public StringBuffer stringBuffer;
	
	//页面自身对象
	private static PageBean pageBean;
 
	//列表Id
	private static String displayId ;
	
	//每页显示的记录数
	private static int pageSize = 10;
	
	//当前页
	private static int pageIndex;
	
	//记录总数
	private String resultSize;
	
	//页数的参数名
	private static String pageIndexName;
	
	/**
	 * 页面参数名的取得
	 * @return 页面参数名 pageIndexName
	 */
	public String getPageIndexName() {
		return pageIndexName;
	}
	/**
	 * 页面参数名的设置
	 * @param pageIndexName 页面参数
	 */
	@SuppressWarnings("static-access")
	public void setPageIndexName(String pageIndexName) {
		this.pageIndexName = pageIndexName;
	}

	/**
	 * 表格Id的取得
	 * @return diaplayId 表格Id
	 */
	public String getDisplayId() {
		return displayId;
	}
	/**
	 * 表格Id的设定
	 * @param displayId 表格ID
	 */

	@SuppressWarnings("static-access")
	public void setDisplayId(String displayId) {
		this.displayId = displayId;
	} 
	
	/**
	 * 当前页的取得
	 * @return 当前页 pageIndex
	 */
	public int getPageIndex() {
		return pageIndex;
	}
	/**
	 * 当前页的设定
	 * @param pageIndex 当前页
	 */ 
	@SuppressWarnings("static-access")
	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}  

	/**
	 * 每页显示的记录数的取得
	 * @return pageSize 页面记录数
	 */
	public int getPageSize() {
		return pageSize;
	}
	
	/**
	 * 每页显示的记录数的设定
	 * @param pageSize 每页显示的记录数
	 */ 
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	/**
	 * 每页显示的记录数的大小
	 * @return resultSize 每页显示的记录数 
	 */
	public String getResultSize() {
		return resultSize;
	}

	/**
	 * 分页总记录大小的设定
	 * @param resultSize 分页总记录
	 */
	public void setResultSize(String resultSize) {
		this.resultSize = resultSize;
	}
	
	/**
	 * 初始化pageBean 记录超过10万条的分页效率高的方法
	 * @param displayId 页面Id
	 * @param resultSize 分页结果及总数
	 * @param request 
	 * @return 实例化后的pageBean
	 */ 
	@SuppressWarnings("static-access")
	public static PageBean  getPageBean(String displayId,int resultSize,HttpServletRequest request){
		
		//判断Bean实例是否存在
		if(pageBean == null){
			
			pageBean = new PageBean();
			
		}
		//设置页面的ID
		pageBean.setDisplayId(displayId); 
		
		//对Bean进行初始化的操作
		pageBean.pageProcess(pageBean, request); 
		
		//总页数
		int totalPage = (resultSize+pageSize-1)/pageSize;
		
		request.setAttribute("totalPage",totalPage);
		

		String isMorePage = (String) (request.getAttribute("MorePage")==null?"N":request.getAttribute("MorePage"));
		
		if("N".equals(isMorePage)){
			//设置记录数到attribute中
			request.setAttribute("resultSize", resultSize);
		}else{
			request.setAttribute(isMorePage, resultSize);
		}
		
 		return pageBean;
	}
	
	/**
	 *  根据总记录进行分页，适用与记录小于10万条以内的分页
	 * @param pageSize  每页显示的记录数
	 * @param displayId 页面Id
	 * @param list 总记录
	 * @param request
	 * @return List 分页后页面显示的记录数
	 */
	@SuppressWarnings("unchecked")
	public static List  setPageList(int pageSize,String tableName, List list,HttpServletRequest request){
		
		 //页数的参数名 
		pageIndexName  =   new  org.displaytag.util.ParamEncoder
										(tableName).encodeParameterName
										(org.displaytag.tags.TableTagParameters.PARAMETER_PAGE);  
		// 当前页
		pageIndex  =  GenericValidator.isBlankOrNull(request.getParameter(pageIndexName)) ? 1 :(Integer.parseInt(request.getParameter(pageIndexName)));
		//页面显示List
		List pageList = new ArrayList(); 
 		
		//当前页的开始记录标识
 		int startResult = (pageIndex-1)*pageSize;
 		
 		//当前页的结束标识
 		int endResult = pageIndex*pageSize;
 		
 		//比较当前算法最大记录数与数据库记录数大小，选择最小的作为记录结尾数！
 		if(endResult>list.size()){
 			
 			endResult = list.size();
 		}
 		
 		//循环装载当前显示的list
		for(int i = startResult;i<endResult;i++){ 
			
 			pageList.add(list.get(i));
 			
 		}
 
		//设置页面的list到attribute中每页显示的记录数
		request.setAttribute(tableName+"List", pageList);
		
		//设置页面的大小到attribute中每页显示的记录数
		request.setAttribute("resultSize", list.size());
		
		return pageList;
	}
	
	/**
	 * 根据条件进行分页
	 * @param pageBean 初始化后的pageBean
	 * @param request
	 * @return 设置后的PageBean
	 */
	private static PageBean pageProcess(PageBean pageBean,HttpServletRequest request){

        //页数的参数名 
		pageIndexName  =   new  org.displaytag.util.ParamEncoder
										(displayId).encodeParameterName
										(org.displaytag.tags.TableTagParameters.PARAMETER_PAGE); 
		pageBean.setPageIndexName(pageIndexName);
		// 当前页    
		pageIndex  =  GenericValidator.isBlankOrNull(request.getParameter(pageIndexName)) ? 1 :(Integer.parseInt(request.getParameter(pageIndexName)));
		pageBean.setPageIndex(pageIndex); 
		
	
		return pageBean;
	}
	/**
	 * 查询条件sql字符串
	 * @return stringBuffer 查询条件sql字符串
	 */
	public StringBuffer getStringBuffer() {
		return stringBuffer;
	}
	/**
	 * 查询条件sql字符串
	 * @param stringBuffer 查询条件sql字符串
	 */
	public void setStringBuffer(StringBuffer stringBuffer) {
		this.stringBuffer = stringBuffer;
	}  
}
