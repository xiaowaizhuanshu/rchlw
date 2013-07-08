package com.ruyicai.web.service;

import com.ruyicai.web.pojo.PhoneInfo;


/**
 * @author Lenovo
 */
public interface PhoneInfoService {

	/**
	 * 手机信息添加
	 */
	String add(PhoneInfo phoneInfo);
	/**
	 * 查询该手机请求的次数
	 */
	public int queryPhoneInfoCount(PhoneInfo phoneInfo);
	/**
	 * 查询该邮箱请求的次数
	 */
	public int queryPhoneInfoCountByEmail(PhoneInfo phoneInfo);
	
	/**
	 * 查询该邮箱请求的次数
	 */
	public int queryInfoCountByEmail(PhoneInfo phoneInfo);
	
	/**
	 * @param check
	 * @return 查询是链接否有效
	 */
	public Integer queryCheck(String check);
	
	/**
	 * @param check
	 * @return 查询链接是否被点击过
	 */
	public Integer queryRemark(String check);
	
	/**
	 * @param check
	 * 
	 * @return更改链接标志位
	 */
	public String editeRemark(String check);
}
