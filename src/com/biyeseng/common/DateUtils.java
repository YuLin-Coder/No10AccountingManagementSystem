package com.biyeseng.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 日期工具类
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class DateUtils {
	public static Date parseTimestamp(String dateStr){
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = null;
		try {
			date = dateFormat.parse(dateStr);
		}
		catch(ParseException e) {
			e.printStackTrace();
		}
		return date;
	}
	
	public static Date parseDate(String dateStr){
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = dateFormat.parse(dateStr);
		}
		catch(ParseException e) {
			e.printStackTrace();
		}
		return date;
	}
	
	public static String parseDate(Date date){
		String dateStr = "";
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			dateStr = dateFormat.format(date);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return dateStr;
	}
}
