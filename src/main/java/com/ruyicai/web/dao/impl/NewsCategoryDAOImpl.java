package com.ruyicai.web.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.NewsCategoryDAO;
import com.ruyicai.web.model.NewsCategoryMD;
import com.ruyicai.web.pojo.NewsCategory;


/**
 * 
 * @classname: NewsCategoryDAOImpl
 * @description: 实现新闻分类的业务方法
 * @author 蓝生
 * @date： 2011-1-12 下午01:04:45
 * 
 */
public class NewsCategoryDAOImpl implements NewsCategoryDAO {

	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(
			SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}

	@SuppressWarnings("unchecked")
	@Override
	public NewsCategory selectObjByCn(String categoryCn,Long  website_id) {
		Map map = new HashMap();
		map.put("categoryCn", categoryCn);
		map.put("website_id", website_id);
		return (NewsCategory) sqlMapClientTemplate.queryForObject(
				"NewsCategory.selectByNameCn", map);
	}
	public List selectByNameCnForList(Map map){
		return sqlMapClientTemplate.queryForList("NewsCategory.selectByName",
				map);
		
	}
	public List selectByCnForList(Map map){
		return sqlMapClientTemplate.queryForList("NewsCategory.selectByCn",
				map);
		
	}
	public Long insert(NewsCategoryMD ncmd) {
		return Long.parseLong(String.valueOf(sqlMapClientTemplate.insert(
				"NewsCategory.insert", ncmd)));
	}
	public Long insertByCopy(NewsCategory nc) {
		return Long.parseLong(String.valueOf(sqlMapClientTemplate.insert(
				"NewsCategory.insertByCopy", nc)));
	}

	public NewsCategory selectByPrimaryKey(Long code) {
		return (NewsCategory) sqlMapClientTemplate.queryForObject(
				"NewsCategory.selectByPrimaryKey", code);
	}

	public List selectAll(Long website_id) {
		return sqlMapClientTemplate.queryForList("NewsCategory.selectAll",
				website_id);
	}

	public void deleteById(Long code) {
		sqlMapClientTemplate.delete("NewsCategory.deleteById", code);
	}

	public int update(NewsCategoryMD ncmd) {
		return this.sqlMapClientTemplate.update("NewsCategory.update", ncmd);
	}
	public int updateByCopy(NewsCategory nc) {
		return this.sqlMapClientTemplate.update("NewsCategory.updateByCopy", nc);
	}

	public List<NewsCategoryMD> selectByPcode(NewsCategory newsCategory) {
		return this.sqlMapClientTemplate.queryForList(
				"NewsCategory.selectByPcode", newsCategory);
	}

	public Integer selectName_zhKey(NewsCategoryMD ncmd) {
		return Integer.valueOf(String.valueOf(sqlMapClientTemplate
				.queryForObject("NewsCategory.selectName_zhCount", ncmd)));
	}

	public List<NewsCategory> selectList() {
		@SuppressWarnings("unchecked")
		List<NewsCategory> newsCategoryproList = this.sqlMapClientTemplate
				.queryForList("NewsCategory.selectAllInit");
		return newsCategoryproList;
	}


	public List selectNewsTemplateNamesByType(int type) {

		return this.sqlMapClientTemplate.queryForList(
				"NewsCategory.selectNameByType", type);
	}

	@Override
	public Integer selectName_cnKey(NewsCategoryMD ncmd) {
		return Integer.valueOf(String.valueOf(sqlMapClientTemplate
				.queryForObject("NewsCategory.selectName_cnCount", ncmd)));
	}

	@Override
	public Integer selectCNName(NewsCategoryMD ncmd) {

		return (Integer) this.sqlMapClientTemplate.queryForObject(
				"NewsCategory.selectName_cn", ncmd);
	}


	@SuppressWarnings("unchecked")
	@Override
	public NewsCategory selectObjectByNameZh(Long website_id, String name) {
		@SuppressWarnings("rawtypes")
		Map map = new HashMap();
		map.put("website_id", website_id);
		map.put("name_zh", name);
		return (NewsCategory) sqlMapClientTemplate.queryForObject("NewsCategory.selectByNameZh", map);
	}


	

}