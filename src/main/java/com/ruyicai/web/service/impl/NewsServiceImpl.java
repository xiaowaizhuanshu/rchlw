package com.ruyicai.web.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.NewsCategoryDAO;
import com.ruyicai.web.dao.NewsChannelDAO;
import com.ruyicai.web.dao.NewsDAO;
import com.ruyicai.web.model.NewsMD;
import com.ruyicai.web.pojo.News;
import com.ruyicai.web.service.NewsService;


public class NewsServiceImpl implements NewsService {
	private Logger log = Logger.getLogger(NewsServiceImpl.class);
	private NewsCategoryDAO newsCategoryDAO ;
	private NewsChannelDAO newsChannelDAO ;
	
	public NewsChannelDAO getNewsChannelDAO() {
		return newsChannelDAO;
	}
	public void setNewsChannelDAO(NewsChannelDAO newsChannelDAO) {
		this.newsChannelDAO = newsChannelDAO;
	}
	public NewsCategoryDAO getNewsCategoryDAO() {
		return newsCategoryDAO;
	}
	public void setNewsCategoryDAO(NewsCategoryDAO newsCategoryDAO) {
		this.newsCategoryDAO = newsCategoryDAO;
	}
	private NewsDAO newsDAO = null;
	
	public NewsDAO getNewsDAO() {
		return newsDAO;
	}
	public void setNewsDAO(NewsDAO newsDAO) {
		this.newsDAO = newsDAO;
	}
	
	
	public News queryNewsByIdForObject(Long id) {
		return newsDAO.selectNewsByIdForObject(id);
	}
	
	public NewsMD queryNewsMDByIdForObject(Long id) {
		// TODO Auto-generated method stub
		return newsDAO.selectNewsMDByIdForObject(id);
	}
	
	public List queryNewsByIdForPicName(Long websiteId) {
		Map map = new HashMap();
		map.put("websiteId", websiteId);
		return (List)newsDAO.selectNewsByIdForPicName(map);
	}
	public List queryNewsByIdForPicNameList(Long websiteId,String categoryNameZh) {
		Map map = new HashMap();
		map.put("websiteId", websiteId);
		map.put("categoryNameZh", categoryNameZh);
		return (List)newsDAO.selectNewsByIdForPicNameList(map);
	}
	
	public List queryNewsListByOnline(Long websiteId){
		
		return newsDAO.selectNewsListByOnline(websiteId);
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<News> queryNewsInIdForList(Long channelId, Long categoryId,
			Integer topNews,Integer maxNum,Long websiteId) {
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryId", categoryId);
		where.put("topNews", topNews);
		where.put("maxNum", maxNum);
		where.put("websiteId", websiteId);
		return newsDAO.selectNewsInIdForList(where);
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<News> queryNewsInNameZhForList(String channelNameZh,
			String categoryNameZh, Integer topNews,Integer maxNum,Long websiteId) {
		Map where = new HashMap();
		where.put("channelNameZh", channelNameZh);
		where.put("categoryNameZh", categoryNameZh);
		where.put("topNews", topNews);
		where.put("maxNum", maxNum);
		where.put("websiteId", websiteId);
		return newsDAO.selectNewsInNameZhForList(where);
	}
	
	public List<News> queryNewsForList(String channelNameCn,
			String categoryNameCn, Integer topNews,Integer maxNum,Long websiteId) {
		Map where = new HashMap();
		where.put("channelNameCn", channelNameCn);
		where.put("categoryNameCn", categoryNameCn);
		where.put("topNews", topNews);
		where.put("maxNum", maxNum);
		where.put("websiteId", websiteId);
		List<News> list = newsDAO.selectNewsByCnForList(where);
		return list ;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Map<String, List> queryNewsInCategoryNameZhsByChannelIdForMap(
			Long websiteId, String categoryNameZhs,Long channelId,Integer maxNum) {
		Map<String, List> reMap = new HashMap();
		Map where = new HashMap();
		where.put("channelId", channelId);
		
		where.put("categoryNameZhs", categoryNameZhs);
		where.put("maxNum", maxNum);
		where.put("websiteId", websiteId);
		
		List <NewsMD> nList = newsDAO.selectNewsInCategoryNameZhsByChannelIdForList(where);
		String [] categoryNameZh = categoryNameZhs.replace("'", "").split(",");
		for(int i = 0 ; i < categoryNameZh.length ; i++){
			List <NewsMD> toCategoryList = new ArrayList();
			for(NewsMD nmd:nList){
				if(categoryNameZh[i].equals(nmd.getCategoryNameZh()))
					toCategoryList.add(nmd);
			}
			reMap.put(categoryNameZh[i], toCategoryList);
		}
		
		return reMap;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<NewsMD> queryNewsInCategoryNameZhsByChannelIdForList(
			Long websiteId, String categoryNameZhs, Long channelId,
			Integer maxNum) {
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryNameZhs", categoryNameZhs);
		where.put("maxNum", maxNum);
		where.put("websiteId", websiteId);
		
		List <NewsMD> nList = newsDAO.selectNewsInCategoryNameZhsByChannelIdForList(where);
		return nList;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<News> queryNewsListByCn(String channelNameCn,
			String categoryNameCn, Long nowPage,Long limitCount,Long websiteId) {
		Map where = new HashMap();
		where.put("channelNameCn", channelNameCn);
		where.put("categoryNameCn", categoryNameCn);
		where.put("nowPage", nowPage);
		where.put("limitCount",limitCount);
		where.put("websiteId", websiteId);
		List <News> nList = newsDAO.selectNewsListByCn(where);
		return nList;
	}
	@Override
	public List<News> queryNewsListByCnAndId(Long channelId,
			String categoryNameCn, Integer nowPage, Integer limitCount, Long websiteId) {
			Map where = new HashMap();
			where.put("channelId", channelId);
			where.put("categoryNameCn", categoryNameCn);
			where.put("nowPage", nowPage);
			where.put("limitCount",limitCount);
			where.put("websiteId", websiteId);
			List <News> nList = newsDAO.selectNewsListByCnAndId(where);
			return nList;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> queryNewsListById(Long channelId,Long categoryId,Long nowPage,Long limitCount,Long websiteId) {
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryId", categoryId);
		where.put("nowPage", nowPage);
		where.put("limitCount",limitCount);
		where.put("websiteId", websiteId);
		List <News> nList = newsDAO.selectNewsListById(where);
		return nList;
	}
	@SuppressWarnings("unchecked")
	@Override
	public Integer queryNewsCount(String channelNameCn, String categoryNameCn,Long websiteId) {
		Map where = new HashMap();
		where.put("channelNameCn", channelNameCn);
		where.put("categoryNameCn", categoryNameCn);
		where.put("websiteId", websiteId);
		Integer count = newsDAO.selectNewsCount(where);
		return count;
	}
	@SuppressWarnings("unchecked")
	@Override
	public Integer queryNewsCountById(Long channelId,Long categoryId,Long websiteId) {
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryId", categoryId);
		where.put("websiteId", websiteId);
		Integer count = newsDAO.selectNewsCountById(where);
		return count;
	}
	@Override
	public Integer editClickCount(Long id) {
		Integer count = newsDAO.updateClickCount(id);
		return count;
	}
	@Override
	public Long queryClickCount(Long id) {
		Long count = newsDAO.selsctClickCount(id);
		return count;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> queryNewsListByCodeAll(String channelNameCn,
			String categoryNameCn, Integer limitCount, Long websiteId) {
		Long categoryId =  newsCategoryDAO.selectObjByCn( categoryNameCn,websiteId) == null?0l:newsCategoryDAO.selectObjByCn( categoryNameCn,websiteId).getCode();
		Map where = new HashMap();
		where.put("channelNameCn", channelNameCn);
		where.put("categoryId", categoryId);
		where.put("websiteId", websiteId);
		where.put("limitCount", limitCount);
		List count = newsDAO.selectNewsListByCodeAll(where);
		return count;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> queryNewsByNotNowId(Long channelId, Long categoryId,
			Integer topNews, Integer maxNum, Long websiteId,Long pcodeId) {
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryId", categoryId);
		where.put("topNews", topNews);
		where.put("limitCount", maxNum);
		where.put("websiteId", websiteId);
		where.put("pcodeId", pcodeId);
		
		List <News> nList = newsDAO.selectNewsListByNotNowId(where);
		return nList;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> queryNewsForListByCn(String channelNameCn,
			String categoryNameCn, Integer topNews, Integer maxNum,
			Long websiteId) {
		
		
		Map where = new HashMap();
		if(channelNameCn==null||"".equals(channelNameCn)){
			where.put("channelId", null);
		}else{
			Long channelId = newsChannelDAO.selectBychannelCn(channelNameCn, websiteId).getId();
			where.put("channelId", channelId);
		}
		
		Long categoryId = newsCategoryDAO.selectObjByCn(categoryNameCn, websiteId).getCode();
		
		where.put("categoryId", categoryId);
		where.put("nowPage", 0);
		where.put("limitCount",maxNum);
		where.put("websiteId", websiteId);
		List <News> nList = newsDAO.selectNewsListById(where);
		return nList;
		
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<News> queryNewsListByIdCn(String channelNameCn,
			Long categoryId, Integer nowPage,  Integer maxNum, Long websiteId) {
		Long channelId = newsChannelDAO.selectBychannelCn(channelNameCn, websiteId).getId();
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryId", categoryId);
		where.put("nowPage", nowPage);
		where.put("limitCount",maxNum);
		where.put("websiteId", websiteId);
		List <News> nList = newsDAO.selectNewsListById(where);
		return nList;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List queryNewsInCategoryNameCnsByChannelIdForMap(
			Long websiteId, String categoryNameZhs,Long channelId,Integer maxNum) {
		Map where = new HashMap();
		where.put("channelId", channelId);
		
		where.put("categoryNameCns", categoryNameZhs);
		where.put("maxNum", maxNum);
		where.put("websiteId", websiteId);
		
		List <NewsMD> list = newsDAO.selectNewsListByCns(where);
		
		
		return list;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List queryNewsByCategoryIdandNotnowId(Long websiteId,
			Long categoryId, Long newsId, Integer maxNum) {
		// TODO Auto-generated method stub
		Map where = new HashMap();
		where.put("websiteId", websiteId);
		where.put("categoryId", categoryId);
		where.put("newsId", newsId);
		where.put("maxNum", maxNum);
		List <News> list = newsDAO.selectNewsByCategoryIdandNotnowId(where);
		return list;
	}
	
/////////////////////////////////////后台Service方法///////////////////////////////////////////////	
	public List<NewsMD> query(NewsMD nmd) {
		List <NewsMD> nmdList = newsDAO.select(nmd);
		return nmdList;
	}

	public Integer queryForIntThisPage(NewsMD nmd) {
		Integer maxLine = newsDAO.selectForIntThisPage(nmd);
		return maxLine;
	}

	public String remove(String ids) {
		Integer num = this.newsDAO.delete(ids);
		if (num > 0) {
			return FinalVar.DELETE_SUCCESS;
		}
		return FinalVar.DELETE_FAIL;
	}

	public String add(News n) {
		try {
			this.newsDAO.insert(n);
			log.info("添加新闻成功");
			return FinalVar.INSERT_SUCCESS;
		} catch (Exception e) {
			log.error("添加新闻失败");
			return FinalVar.INSERT_FAIL;
		}
	}
	public String editAuditType(Map auditMap) {
		Integer num = this.newsDAO.updateAuditType(auditMap);
		if (num > 0) {
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}
	
	public String edit(News n){
		Integer num = this.newsDAO.update(n);
		if (num > 0) {
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}
	@Override
	public List<News> queryNewsListByChannelAndCategory(Long websiteId,
			Long channelId,String namezh, Integer limitCount) {
		
		return this.newsDAO.selectNewsListByChannelAndCategory(websiteId,
				 channelId,  namezh, limitCount);
	}
	
	
	
	
	
	
	
	
}
