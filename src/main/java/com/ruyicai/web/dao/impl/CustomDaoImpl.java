package com.ruyicai.web.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.CustomDao;
import com.ruyicai.web.model.CustomMD;
import com.ruyicai.web.pojo.Custom;

/**
 * @classname: CustomDAOImpl
 * @description 客户留言 操作实现类
 * @author 李媛媛
 */

public class CustomDaoImpl implements CustomDao {
	private SqlMapClientTemplate sqlMapClientTemplate;
	
	public void setSqlMapClientTemplate(
			SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}

	@Override
	public void insertCustom(Custom user) {
		this.sqlMapClientTemplate.insert("Custom.insertCustom", user);
	}
	
	@SuppressWarnings("unchecked")
	public List<Custom> selectCustomListByUserName(String username){
		return (List<Custom>) sqlMapClientTemplate.queryForList(
				"Custom.selectCustomListByUserName", username);
		
	}
	
	@SuppressWarnings("unchecked")
	public List<Custom> selectCustomListByCreateTime(String createtime){
		return (List<Custom>) sqlMapClientTemplate.queryForList(
				"Custom.selectCustomListByCreateTime", createtime);
		
	}
	
	@SuppressWarnings("unchecked")
	public List<CustomMD> select(CustomMD cmd) {
		List<CustomMD> cmdList = sqlMapClientTemplate.queryForList("Custom.select",
				cmd);
		return cmdList;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Custom> selectCustomListByUsernameAndCreatetime(String username,String createtime) {
		@SuppressWarnings("rawtypes")
		Map map = new HashMap();
		map.put("username", username);
		map.put("createtime", createtime);
		return sqlMapClientTemplate.queryForList("Custom.selectByUsernameAndCreatetime", map);
	}

	@Override
	public Integer delete(String ids) {
		Integer delCount = (Integer) sqlMapClientTemplate.update("Custom.delete",
				ids);
		return delCount;
	}

	@Override
	public Integer updateAuditing(Map auditingMap) {
		Integer updateCount = (Integer) sqlMapClientTemplate.update(
				"Custom.updateAuditing", auditingMap);
		return updateCount;
	}

	@Override
	public Integer update(Custom user) {
		Integer updateCount = (Integer) sqlMapClientTemplate.update(
				"Custom.updateCustom", user);
		return updateCount;
	}

	@Override
	public Integer selectForIntThisPage(CustomMD cmd) {
		Integer maxLine = (Integer) sqlMapClientTemplate.queryForObject(
				"Custom.selectForIntThisPage", cmd);
		return maxLine;
	}

	@Override
	public CustomMD selectCustomMDByIdForObject(Long id) {
		return (CustomMD) sqlMapClientTemplate.queryForObject(
				"Custom.selectCustomByIdForObject", id);
	}

}
