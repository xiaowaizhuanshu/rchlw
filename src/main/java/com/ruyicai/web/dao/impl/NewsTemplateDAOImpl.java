package com.ruyicai.web.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.NewsTemplateDAO;
import com.ruyicai.web.pojo.NewsTemplate;

/**
 * @classname: NewsTemplateDAOImpl
 * @description 新闻模板dao实现类
 * @author 蓝生
 * @date： 2011-1-18 下午05:00:21
 */

public class NewsTemplateDAOImpl implements NewsTemplateDAO {

	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(
			SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}

	public Long insert(NewsTemplate record) {
		return Long.parseLong(String.valueOf(sqlMapClientTemplate.insert(
				"NewsTemplate.ibatorgenerated_insertNewsTemplate", record)));

	}

	public NewsTemplate selectNewsTemplateById(NewsTemplate record) {
		return (NewsTemplate) this.sqlMapClientTemplate.queryForObject(
				"NewsTemplate.ibatorgenerated_selectByPrimaryKey", record);
	}
	public NewsTemplate selectByName(String name){
		return (NewsTemplate) this.sqlMapClientTemplate.queryForObject(
				"NewsTemplate.selectByName", name);
	}


	public int deleteNewsTemplate(String name) {
		Map map = new HashMap();
		map.put("name", name);
		return sqlMapClientTemplate.delete("NewsTemplate.deleteNewsTemplate",
				map);
	}

	public int delete(Long id) {
		return sqlMapClientTemplate.delete(
				"NewsTemplate.deleteNewsTemplateById", id);
	}

	public int update(NewsTemplate record) {
		return this.sqlMapClientTemplate.update(
				"NewsTemplate.updateNewsTemplate", record);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<NewsTemplate> selectNewsTemplateByType(NewsTemplate record) {

		return this.sqlMapClientTemplate.queryForList(
				"NewsTemplate.selcetNewsTemplatesByType", record);
	}
}
