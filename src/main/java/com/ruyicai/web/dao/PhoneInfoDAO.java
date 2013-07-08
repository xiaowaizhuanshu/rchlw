package com.ruyicai.web.dao;

import com.ruyicai.web.pojo.PhoneInfo;


/** 
 * @classname:
 * PhoneInfoDao
 * @description
 * 手机号 DAO
 * @author 
 * 章俊虎 
 * @date：
 * 2011-4-7 下午01:46:33 
 */
public interface PhoneInfoDAO {

	/**
	 * @description 添加手机信息
	 * @param 添加手机信息对象
	 */
	void insert(PhoneInfo phoneInfo);
	/**
	 * @description 查询所有手机信息
	 * @return 
	 */
	int selectPhoneInfoCount(PhoneInfo phoneInfo);
	/**
	 * @description 查询邮箱信息
	 * @return 
	 */
	int selectPhoneInfoCountByEmail(PhoneInfo phoneInfo);
	/**
	 * @description 查询邮箱信息
	 * @return 
	 */
	int selectInfoCountByEmail(PhoneInfo phoneInfo);
	
	/**
	 * @param phoneInfo
	 * @return 查询
	 */
	Integer selectPhoneByCheck(PhoneInfo phoneInfo);
	
	/**
	 * @param phoneInfo
	 * 查询链接是否被点击过
	 * @return
	 */
	Integer selectPhoneByRemark(PhoneInfo phoneInfo);
	
	/**
	 * @param phoneInfo
	 * 更改点击后链接状态
	 * @return
	 */
	Integer updatePhoneByChecked(PhoneInfo phoneInfo);
	
}
