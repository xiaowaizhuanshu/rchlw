
package com.ruyicai.util;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/** 
 * @classname:
 *
 * @description
 *
 * @author 
 * 蓝生 
 * @date：
 * 2011-4-13 上午12:31:34 
 */

public class UtilGetEmailUrl {
     /**
      * 获取邮件登录url的方法
      * @param mailLocal 邮件主机地址 如lansheng@163.com 中的163.com
      * @return 返回访问地址
      */
	public static String getEmailUrl(String mailLocal){
		String emailUrl = "mail.163.com";
		HttpURLConnection con = null;
		URL url;
		Integer state = 0;
		boolean blaen = true;
	
		if("gmail.com".equals(mailLocal)){
			emailUrl = "mail.google.com";
			blaen = false;
		}
		try {
			url = new URL("http://mail."+mailLocal);
			con = (HttpURLConnection) url.openConnection();
			state = con.getResponseCode();
			if (con != null) {
				con.disconnect();
			}
			if( blaen && state<400){
				emailUrl = "mail."+mailLocal;
				blaen = false;
			}
			
		} catch (MalformedURLException e) {
//			e.printStackTrace();
		} catch (IOException e) {
			//e.printStackTrace();
			
		}
		if(blaen){
			try {
				url = new URL("http://"+mailLocal);
				con = (HttpURLConnection) url.openConnection();
				state = con.getResponseCode();
				if (con != null) {
					con.disconnect();
				}
				if(state<400){
					emailUrl = mailLocal;
					blaen = false;
				}
			} catch (MalformedURLException e) {
	//			e.printStackTrace();
			} catch (IOException e) {
				//e.printStackTrace();
			}
		}
		if(blaen){
			try {
				url = new URL("http://www."+mailLocal);
				con = (HttpURLConnection) url.openConnection();
				state = con.getResponseCode();
				if (con != null) {
					con.disconnect();
				}
				if(state<400){
					emailUrl = "www."+mailLocal;
				}
			} catch (MalformedURLException e) {

			} catch (IOException e) {
				
			}
		}
		return emailUrl;
	}
	
}
