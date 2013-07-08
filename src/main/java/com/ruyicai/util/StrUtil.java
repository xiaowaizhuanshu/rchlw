package com.ruyicai.util;


public class StrUtil {
	public static boolean isNull(Object AObject) {
		return (AObject == null);
	}
	public static boolean isEmpty(String AStr) {
		if (StrUtil.isNull(AStr)) {
			return true;
		} else {
			return (AStr.equals(""));
		}
	}
	public static boolean isEmpty(String AStr, Boolean ACompriseNull) {
		if (ACompriseNull) {
			return isEmpty(AStr);
		} else {
			return (!StrUtil.isNull(AStr) && AStr.equals(""));
		}
	}
	public static boolean isEqual(String AFirstStr, String ASecondStr,
			Boolean AIgnoreCase) {
		if (StrUtil.isNull(AFirstStr)) {
			return StrUtil.isNull(ASecondStr);
		} else if (StrUtil.isNull(ASecondStr)) {
			return false;
		} else if (AIgnoreCase) {
			return AFirstStr.toLowerCase().equals(ASecondStr.toLowerCase());
		} else {
			return AFirstStr.equals(ASecondStr);
		}
	}
	public static boolean isEqual(String AFirstStr, String ASecondStr) {
		return isEqual(AFirstStr, ASecondStr, true);
	}
	/**
	 * 将字符串从右到左每隔三位添加一个逗号 
	 * @param progressive  要分隔的字符串
	 * @return Long
	 */
	public static String everyThreeByComma(long progressive){
		   String str1 = String.valueOf(progressive);  
	        str1 = new StringBuilder(str1).reverse().toString();
	        String str2 = "";
	        for(int i=0;i<str1.length();i++){  
	            if(i*3+3>str1.length()){  
	                str2 += str1.substring(i*3, str1.length());  
	                break;
	            }
	            str2 += str1.substring(i*3, i*3+3)+",";  
	        }  
	        if(str2.endsWith(",")){  
	            str2 = str2.substring(0, str2.length()-1);  
	        }  
	       return new StringBuilder(str2).reverse().toString();  
	}

}
