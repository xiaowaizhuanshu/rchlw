package com.ruyicai.web.dao.impl;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.PhoneInfoDAO;
import com.ruyicai.web.pojo.PhoneInfo;

public class PhoneInfoDAOImpl implements PhoneInfoDAO {

	private SqlMapClientTemplate sqlMapClientTemplate;
	public SqlMapClientTemplate getSqlMapClientTemplate() {
		return sqlMapClientTemplate;
	}
	public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}
	public void insert(PhoneInfo phoneInfo) {
		this.sqlMapClientTemplate.insert(
				"PhoneInfo.insertPhoneInfo", phoneInfo);
	}

	public int selectPhoneInfoCount(PhoneInfo phoneInfo) {
		return (Integer)sqlMapClientTemplate.queryForObject("PhoneInfo.selectPhoneInfoCount", phoneInfo);
	}
	
	public int selectPhoneInfoCountByEmail(PhoneInfo phoneInfo) {
		return (Integer)sqlMapClientTemplate.queryForObject("PhoneInfo.selectPhoneInfoCountByEmail", phoneInfo);
	}
	public int selectInfoCountByEmail(PhoneInfo phoneInfo) {
		return (Integer)sqlMapClientTemplate.queryForObject("PhoneInfo.selectinfoByEmail", phoneInfo);
	}

	@Override
	public Integer selectPhoneByCheck(PhoneInfo phoneInfo) {
		
		return (Integer) sqlMapClientTemplate.queryForObject("PhoneInfo.selectPhoneInfoCountByCheck",phoneInfo);
	}

	@Override
	public Integer selectPhoneByRemark(PhoneInfo phoneInfo) {
		
		return (Integer) sqlMapClientTemplate.queryForObject("PhoneInfo.selectPhoneInfoCountByRemark", phoneInfo);
	}

	@Override
	public Integer updatePhoneByChecked(PhoneInfo phoneInfo) {
		
		return sqlMapClientTemplate.update("PhoneInfo.updateBychecked", phoneInfo);
	}

}
