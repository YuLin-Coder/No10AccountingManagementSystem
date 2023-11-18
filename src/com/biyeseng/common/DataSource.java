package com.biyeseng.common;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * 静态变量
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class DataSource {
	 
	
	
	//用户类型
	public static Map<String,String>  YHLX = new LinkedHashMap<String,String>();
	
	 
	
	//性别
	public static Map<String,String>  XB  = new LinkedHashMap<String,String>();
	
	public static Map<String,String>  TYPE  = new LinkedHashMap<String,String>();
	public static Map<String,String>  KIND  = new LinkedHashMap<String,String>();

	 
	
	
	
	static{
		
		
	 
		
		
		YHLX.put("管理员","管理员");
		YHLX.put("超级管理员","超级管理员");
		
		TYPE.put("出账","出账");
		TYPE.put("入账","入账");
		
		KIND.put("公费","公费");
		KIND.put("自费","自费");
		
		
		
		 
	 
		
		 
		
		
		
	}
}
