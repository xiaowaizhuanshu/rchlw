package com.ruyicai.web.service;

import java.util.List;
import java.util.Map;

import com.ruyicai.web.model.CustomMD;
import com.ruyicai.web.pojo.Custom;


/** 
 * @classname: CustomService
 * @description
 * 客户留言 业务操作接口
 * @author 李媛媛
 */
public interface CustomService {
	/**
	 * @description 创建客户信息
	 * @param user
	 * @return 返回码
	 */
	public String addCustom(Custom user);
	
	
	/**
	 * 根据客户ID获取客户留言指定的一条记录 
	 * @param id 客户ID
	 * @return
	 */
	CustomMD queryCustomByIdForObject(Long id);
	
	/**
	 * 按用户名 查询所有客户留言信息
	 * @param username 用户名
	 * @return 所有同一用户的留言的list
	 */
	List<Custom> queryCustomListByUserName(String username);
	/**
	 * 按留言发表时间 查询所有客户留言信息
	 * @param createtime 发表留言时间
	 * @return 符合时间的留言信息的list
	 */
	List<Custom> queryCustomListByCreateTime(String createtime);
	/**
	 * 获取符合查询条件的客户留言记录列表
	 * @param cmd 条件对象 model
	 * @return
	 */
	List<CustomMD> query(CustomMD cmd);
	
	/**
	 * 获取符合查询条件的客户留言记录的总数，用于分页
	 * @param nmd 条件对象 model
	 * @return
	 */
	Integer queryForIntThisPage(CustomMD cmd);
	
	/**
	 * 假删除指定客户id数组的客户信息
	 * @param ids 是客户信息ID的数组 逗号分割
	 * @return
	 */
	String remove(String ids);
	
	/**
	 * 修改审核状态，识别当前客户留言是未审批 已审批 或者需要修改
	 * @param auditingMap
	 * @return
	 */
	String editAuditing(Map auditingMap);
	
	/**
	 * 更新客户信息
	 * @param n 客户信息对象
	 * @return 返回影响行数
	 */
	String edit(Custom user);
	
	/**
	 * 根据用户名、发表留言时间查询客户留言信息；
	 * @param username
	 * @param createtime
	 * @return
	 */
	List<Custom> queryCustomListByUsernameAndCreatetime(String username,String createtime);

}
