package com.biyeseng.common;


/**
 * 字符串操作类
 * @author biyeseng
 * @company www.baidu.com
 *
 */
public class StringUtils 
{
	// digit: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ., E
	// reverse comparison
	public static boolean[] digitalAndDotPool = new boolean[256];
    static {
        for (int i = 0 ; i < digitalAndDotPool.length; i ++)
        {
        	digitalAndDotPool[i] = true;
        }
        digitalAndDotPool['0'] = false;
        digitalAndDotPool['1'] = false;
        digitalAndDotPool['2'] = false;
        digitalAndDotPool['3'] = false;
        digitalAndDotPool['4'] = false;
        digitalAndDotPool['5'] = false;
        digitalAndDotPool['6'] = false;
        digitalAndDotPool['7'] = false;
        digitalAndDotPool['8'] = false;
        digitalAndDotPool['9'] = false;
        digitalAndDotPool['.'] = false;
        digitalAndDotPool['E'] = false;
    }	
	
	private static char[] XML_SPECIAL_CHAR = 
		new char[]{'&', '\\', '<', '>', '\r', '\n', '"'};
	private static String[] XML_CHAR = 
		new String[]{"&amp;", "&quot;", "&lt;", "&gt;", "&#10;", "&#13;", "&quot;"};
	
	/**
	 * HTML special char
	 */
	private static final char[] HTML_SPECIAL_CHAR = new char[] {'<', '>', '&',
		'"', '\''};

	/**
	 * HTML char
	 */
	private static final String[] HTML_CHAR = new String[] { "&lt;", "&gt;",
		"&amp;", "&quot;", "&#39;"};
	
	/**
	 * Check to see if string type data is empty, its length is zero.
	 * @param str
	 * @return
	 */
	public static boolean isNull(String str)
	{
		if (str == null || str.trim().length() == 0)
		{
			return true;
		}
		return false;
	}
	/**
	 * Check to see if string type data is empty, its length is zero.
	 * @param str
	 * @return
	 */
	public static boolean isString(Object p_obj)
	{
		if (p_obj == null)
		{
			return false;
		}
		if (p_obj instanceof String)
		{
			return true;
		}
		return false;
	}
	/**
	 * <pre>
	 * Convert string to specified charset.
	 * 
	 * For example,
	 * 	//Convert string to UTF-8
	 * 	convert("English中文".getBytes(), "UTF-8")
	 * 
	 * @param data
	 * @param targetEncoding
	 * @return
	 * </pre>
	 */
	public static byte[] convert(byte[] data, String targetEncoding)
	{
		if (data == null || data.length == 0)
		{
			return null;
		}
		try
		{
			return (new String(data)).getBytes(targetEncoding);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * Replace char with char in String.
	 * oldChar = new char[] {'?', '|', '/'};
	 * newChar = new char[] {'=', '=', '='};
	 * 
	 * @param source
	 * @param oldChar
	 * @param newChar
	 * @return
	 */
	public static char[] replaceWithCharByChar(char[] source, char[] oldChar, char[] newChar)
	{
		for(int i = 0; i < source.length; i++)
		{
			for(int j = 0; j < oldChar.length; j++)
			{
				if (source[i] == oldChar[j])
				{
					source[i] = newChar[j];
					break;
				}
			}
		}
		return source;
	}
	/**
	 * Replace char with string in long string.
	 * oldChar = new char[] {'&', '\', '<', '>'};
	 * newString = new String[] {"&amp;", "&quot;", "&lt;", "&gt;"};
	 * 
	 * @param source
	 * @param oldChar
	 * @param newChar
	 * @return
	 */
	public static String replaceWithCharByString(
			String srcString, 
			char[] oldChar, 
			String[] newChar)
	{
		if (srcString == null || srcString.length() == 0 || oldChar == null)
		{
			return srcString;
		}
		StringBuffer result = null;
		String filtered = null;
		for(int i = 0; i < srcString.length(); i++)
		{
			filtered = null;
			for(int j = 0; j < oldChar.length; j++)
			{
				if (srcString.charAt(i) == oldChar[j])
				{
					filtered = newChar[j];
					break;
				}
			}
            if (result == null) {
                if (filtered != null) {
                    result = new StringBuffer(srcString.length() + 50);
                    if (i > 0) {
                        result.append(srcString.substring(0, i));
                    }
                    result.append(filtered);
                }
            }
            else
            {
                if (filtered == null) {
                    result.append(srcString.charAt(i));
                } else {
                    result.append(filtered);
                }
            }
		}
		return result == null ? srcString : result.toString();
	}
	/**
	 * Enode string following XML specification.
	 * @param s
	 * @return
	 */
	public static String encodeXML(String xml)
	{
		if (xml == null || xml.length() == 0)
		{
			return "";
		}
		return replaceWithCharByString(xml, XML_SPECIAL_CHAR, XML_CHAR);
	}
	
	/**
	 * Enode string following XML specification.
	 * 
	 * @param html HTML snippt
	 * @return
	 */
	public static String encodeHTML(String html)
	{
		if (html == null || html.length() == 0)
		{
			return "";
		}
		return replaceWithCharByString(html, HTML_SPECIAL_CHAR, HTML_CHAR);
	}
	
	/**
	 * Provide the String replace operation for the lower JDK version (eg: JDK 1.4)
	 * @param source
	 * @param target
	 * @param replacement
	 * @return
	 */
    public static String replace(String source, String target, String replacement) {
    	if (source == null)
    	{
    		return null;
    	}
        if (source.indexOf(target) > -1) {
        	StringBuffer retu = new StringBuffer();
            do {
                retu.append(source.substring(0, source.indexOf(target)));
                retu.append(replacement);
                source = source.substring(source.indexOf(target) + target.length());
            } while (source.indexOf(target) > -1);
            retu.append(source);
            return retu.toString();
        }
        return source;
    }
    /**
     * 	Return <code>true</code> if the context-relative request path
     *  matches the requirements of the specified URL pattern;
     *  otherwise, return <code>null</code>.
     *  
     * @param urlPattern
     * @param requestPath
     * @return
     */
    public static boolean matchUrl(String urlPattern, String requestPath)
    {
        if (requestPath == null)
            return (false);

        // Match on context relative request path
        if (urlPattern == null)
            return (false);

        // Case 1 - Exact Match
        if (urlPattern.equals(requestPath))
            return (true);

        // Case 2 - Path Match ("/.../*")
        if (urlPattern.equals("/*"))
            return (true);
        if (urlPattern.endsWith("/*")) {
            if (urlPattern.regionMatches(0, requestPath, 0, 
            		urlPattern.length() - 2)) {
                if (requestPath.length() == (urlPattern.length() - 2)) {
                    return (true);
                } else if ('/' == requestPath.charAt(urlPattern.length() - 2)) {
                    return (true);
                }
            }
            return (false);
        }

        // Case 3 - Extension Match
        if (urlPattern.startsWith("*.")) {
            int slash = requestPath.lastIndexOf('/');
            int period = requestPath.lastIndexOf('.');
            if ((slash >= 0) && (period > slash) 
                && (period != requestPath.length() - 1)
                && ((requestPath.length() - period) 
                    == (urlPattern.length() - 1))) {
                return (urlPattern.regionMatches(2, requestPath, period + 1,
                		urlPattern.length() - 2));
            }
        }

        // Case 4 - "Default" Match
        return (false); // NOTE - Not relevant for selecting filters
    }
    
    public static boolean isDigitalAndDot(String str)
    {
    	for (int i = 0; i < str.length(); i++)
    	{
    		if (str.charAt(i) > 255 || digitalAndDotPool[str.charAt(i)])
    		{
    			return false;
    		}
    	}
    	return true;
    }
    
    public static String getNameFromDB(String dbName,boolean firstLetterUpper) {
		if((dbName == null) || (dbName.trim().equals(""))) {
			return null;
		}
		String result = "";
		boolean flag = false;
		for(int i = 0; i < dbName.length(); ++i) {
			String temp = dbName.substring(i, i + 1);
			if(!(temp.equals("_"))) {
				if(flag) {
					result = result + temp.toUpperCase();
				} else {
					result = result + temp.toLowerCase();
				}
			}

			if(temp.equals("_")) {
				flag = true;
			} else {
				flag = false;
			}
		}

		if(firstLetterUpper) {
			if(result.trim().length() == 1) {
				return result.trim().toUpperCase();
			}

			if(result.trim().length() > 1) {
				return result.substring(0, 1).toUpperCase() + result.substring(1, result.length());
			}
		}

		return result;
	}
    
    public static String replace(String str,String remove){
    	return org.apache.commons.lang.StringUtils.remove(str, remove);
    }
	
}
