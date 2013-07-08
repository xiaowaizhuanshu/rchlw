package com.ruyicai.web.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.NewsDAO;
import com.ruyicai.web.model.NewsMD;
import com.ruyicai.web.pojo.News;

public class NewsDAOImpl implements NewsDAO {
	Logger logger = Logger.getLogger(NewsDAOImpl.class);
	
	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(
			SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}

	public News selectNewsByIdForObject(Long id) {
		return (News) sqlMapClientTemplate.queryForObject(
				"News.selectNewsByIdForObject", id);
	}

	public NewsMD selectNewsMDByIdForObject(Long id) {
		return (NewsMD) sqlMapClientTemplate.queryForObject(
				"News.selectNewsByIdForObjectAll", id);
	}

	public List selectNewsByIdForPicName(Map map) {
		return (List) sqlMapClientTemplate.queryForList(
				"News.selectNewsByIdForPicName", map);
	}
	
	public List selectNewsByIdForPicNameList(Map map) {
		return (List) sqlMapClientTemplate.queryForList(
				"News.selectNewsByIdForPicNameList", map);
	}

	@SuppressWarnings("unchecked")
	public List<News> selectNewsInIdForList(Map where) {
		return (List<News>) sqlMapClientTemplate.queryForList(
				"News.selectNewsInIdForList", where);
	}

	@SuppressWarnings("unchecked")
	public List<News> selectNewsInNameZhForList(Map where) {
		return (List<News>) sqlMapClientTemplate.queryForList(
				"News.selectNewsInNameZhForList", where);
	}
	@SuppressWarnings("unchecked")
	public List<News> selectNewsByCnForList(Map where) {
		List<News>  list =	(List<News>) sqlMapClientTemplate.queryForList(
				"News.selectNewsByCnForList", where);
		return list;
	}

	@SuppressWarnings("unchecked")
	public List<NewsMD> selectNewsInCategoryNameZhsByChannelIdForList(Map where) {
		return (List<NewsMD>) sqlMapClientTemplate.queryForList(
				"News.selectNewsInCategoryNameZhsByChannelIdForList", where);
	}
	@Override
	public Integer selectNewsCount(Map where) {
		Integer totalCount = (Integer) sqlMapClientTemplate.queryForObject("News.selectNewsCount",where);
		return totalCount;
	}
	@Override
	public Integer selectNewsCountById(Map where) {
		Integer totalCount = (Integer) sqlMapClientTemplate.queryForObject("News.selectNewsCountById",where);
		return totalCount;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsListByCn(Map where) {
		
		return (List<News>)sqlMapClientTemplate.queryForList("News.selectNewsListByCn",where);
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsListById(Map where) {
		
		return (List<News>)sqlMapClientTemplate.queryForList("News.selectNewsListById",where);
		
	}
	@Override
	public Integer updateClickCount(Long id) {
		// TODO Auto-generated method stub
		Integer updateCount = (Integer) sqlMapClientTemplate.update(
				"News.updateNewsClickCount", id);
		return updateCount;
	}

	@Override
	public Long selsctClickCount(Long id) {
		Long count = (Long) sqlMapClientTemplate.queryForObject("News.selectNewsClickCount",id);
		return count;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsListByCnAndId(Map where) {
		// TODO Auto-generated method stub
		return (List<News>)sqlMapClientTemplate.queryForList("News.selectNewsListByCnAndId",where);
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsListByCodeAll(Map where) {
		// TODO Auto-generated method stub
		return (List<News>)sqlMapClientTemplate.queryForList("News.selectNewsListByCodeAll",where);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsListByNotNowId(Map where) {
		// TODO Auto-generated method stub
		return (List<News>)sqlMapClientTemplate.queryForList("News.selectNewsListByNotNowId",where);
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<NewsMD> selectNewsListByCns(Map where) {
		// TODO Auto-generated method stub
		return (List<NewsMD>)sqlMapClientTemplate.queryForList("News.selectNewsInCategoryNameCnsByChannelIdForList",where);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsByCategoryIdandNotnowId(Map where) {
		// TODO Auto-generated method stub
		return (List<News>)sqlMapClientTemplate.queryForList("News.selectNewsByCategoryIdandNotnowId",where);
	}
	// /////////////////////////////////后台DAO方法///////////////////////////////////////////////
	@SuppressWarnings("unchecked")
	public List<News> selectNewsListByOnline(Long websiteId){
		return (List<News>) sqlMapClientTemplate.queryForList(
				"News.selectNewsListByOnline", websiteId);
		
	}
	@SuppressWarnings("unchecked")
	public List<NewsMD> select(NewsMD nmd) {
		List<NewsMD> nmdList = sqlMapClientTemplate.queryForList("News.select",
				nmd);
		return nmdList;
	}

	public Integer selectForIntThisPage(NewsMD nmd) {
		Integer maxLine = (Integer) sqlMapClientTemplate.queryForObject(
				"News.selectForIntThisPage", nmd);
		return maxLine;
	}

	public Integer delete(String ids) {
		Integer delCount = (Integer) sqlMapClientTemplate.update("News.delete",
				ids);
		return delCount;
	}

	public void insert(News n) {
		sqlMapClientTemplate.insert("News.insert", n);
	}

	public Integer updateAuditType(Map auditMap) {
		Integer updateCount = (Integer) sqlMapClientTemplate.update(
				"News.updateAuditType", auditMap);
		return updateCount;
	}

	public Integer update(News n) {
		Integer updateCount = (Integer) sqlMapClientTemplate.update(
				"News.updateNews", n);
		return updateCount;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<News> selectNewsListByChannelAndCategory(Long websiteId,
			Long channelId, String namezh, Integer limitCount) {
		@SuppressWarnings("rawtypes")
		Map map = new HashMap();
		map.put("websiteId", websiteId);
		map.put("channelId", channelId);
		map.put("namezh", namezh);
		map.put("limitCount", limitCount);
		return sqlMapClientTemplate.queryForList("News.selectBynumero", map);
	}

	
	
}
