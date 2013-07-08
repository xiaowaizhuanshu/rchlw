
package com.ruyicai.util;
/** 
 * @classname:
 * FinalVar
 * @description
 * 常量汇总
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-20 下午04:35:36 
 */

public class FinalVar {
	public static final String INSERT_SUCCESS = "100000";//插入数据库成功
	public static final String INSERT_FAIL = "100001";//插入数据库失败
	public static final String INSERT_THERE = "100002";//数据库中已经存在指定关键字的数据
	public static final String UPDATE_SUCCESS = "100003";//数据库更新成功
	public static final String UPDATE_FAIL = "100004";//数据库更新失败
	public static final String UPDATE_THERE = "100005";//数据库中找不到要修改的内容
	public static final String DELETE_SUCCESS = "100006";//数据库数据删除成功
	public static final String DELETE_FAIL = "100007";//数据库数据删除失败
	public static final String DELETE_THERE = "100008";//数据库中找不到要删除的的内容
	//#####################  Json返回码--开始  #################################################################
	public static final String JSON_SUCCESS="000000";//成功
	public static final String JSON_FAILURE="000001";//失败
	public static final String JSON_NULL_VALUE="000002";//没有记录
	public static final String JSON_ERROR="000500";//出现异常
	public static final String JSON_DATA_ERROR="000503";//出现数据异常
	public static final String JSON_CHANGE_ENCODING_ERROR = "000504";//字符串转码出现异常
	public static final String JSON_CONSTRUCT_JSON_OBJECT_ERROR = "000505";//构造JSON对象失败
	public static final String JSON_NULL="000400";//返回的记录为NULL
	public static final String JSON_ERR_PARAMETER="000403";//传入参数不正确
	public static final int PAGESIZE = 5;
	
	
	
	public static final String UNRAR_CODE="C:\\Program Files\\WinRAR\\UnRar.exe x -o+ -ad ";//解压命令
	
	//#####################  外部接口调用返回码--开始  #################################################################
	public static final String INTERFACE_KEY="ruyicaiwebgood";//接口交互密钥
	public static final String INTERFACE_OK="0";//接口调用成功
	public static final String INTERFACE_STATE_NO_PROPERTY="1";//参数不正确
	public static final String INTERFACE_STATE_NO_MD5="2";//验证MD5校验失败
	public static final String INTERFACE_ERROR = "500";//接口调用发生异常
	
	public static final String INTERFACE_TYPE_SMS="001";//短信接口类型代码
	public static final String INTERFACE_TYPE_ACTIVITY_FIRST_REGISTR_GIFT_3="002";//基于手机号的活动接口
	//###########################分页###############################################
	public static final String limitCount = "20";
	
	
}
