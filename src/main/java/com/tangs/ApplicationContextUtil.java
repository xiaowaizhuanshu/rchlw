
package com.tangs;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/** 
 * @classname:
 *
 * @description
 *
 * @author 
 * 蓝生 
 * @date：
 * 2011-6-1 下午05:27:31 
 */

public class ApplicationContextUtil {
	
	public static final String[] strs = {"applicationContext-newsModule-services.xml","applicationContext-newsModule-daos.xml","applicationContext-base.xml"};
	public static final ApplicationContext ctx =  new ClassPathXmlApplicationContext(strs);

}
