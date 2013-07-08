package com.ruyicai.web.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.NewsCategoryDAO;
import com.ruyicai.web.dao.NewsDAO;
import com.ruyicai.web.model.NewsCategoryMD;
import com.ruyicai.web.model.NewsMD;
import com.ruyicai.web.pojo.Channel_Template;
import com.ruyicai.web.pojo.NewsCategory;
import com.ruyicai.web.service.Channel_TemplateService;
import com.ruyicai.web.service.NewsCategoryService;

/**
 * 
 * @classname: NewsCategoryServiceImpl
 * @description: 新闻分类的service实现方法
 * @author 蓝生
 * @date： 2011-1-12 下午01:04:45
 * 
 */
public class NewsCategoryServiceImpl implements NewsCategoryService {

	private Logger log = Logger.getLogger(NewsCategoryServiceImpl.class);
	NewsCategoryDAO newsCategoryDAO = null;
	private Channel_TemplateService channel_TemplateService = null;
	private NewsDAO newsDAO = null;
	

	public Channel_TemplateService getChannel_TemplateService() {
		return channel_TemplateService;
	}

	public void setChannel_TemplateService(
			Channel_TemplateService channel_TemplateService) {
		this.channel_TemplateService = channel_TemplateService;
	}

	public NewsCategoryDAO getNewsCategoryDAO() {
		return newsCategoryDAO;
	}

	public void setNewsCategoryDAO(NewsCategoryDAO newscategoryDAO) {
		this.newsCategoryDAO = newscategoryDAO;
	}
	
	public NewsDAO getNewsDAO() {
		return newsDAO;
	}

	public void setNewsDAO(NewsDAO newsDAO) {
		this.newsDAO = newsDAO;
	}

	@SuppressWarnings("unchecked")
	public List queryCategoryByNameCn(Long website_id ,String name_zh){
		Map map = new HashMap();
		map.put("website_id", website_id);
		map.put("name_zh", name_zh);
		List list = newsCategoryDAO.selectByNameCnForList(map);
		
		return list;
		
	}
	
	@SuppressWarnings("unchecked")
	public List queryCategoryByCN(Long website_id ,String name_cn){
		Map map = new HashMap();
		map.put("website_id", website_id);
		map.put("name_cn", name_cn);
		List list = newsCategoryDAO.selectByCnForList(map);
		
		return list;
		
	}
	@SuppressWarnings("unchecked")
	public NewsCategory queryCategoryByNCn(Long website_id ,String name_cn){
		Map map = new HashMap();
		map.put("website_id", website_id);
		map.put("name_cn", name_cn);
		NewsCategory list = newsCategoryDAO.selectObjByCn(name_cn,website_id );
		
		return list;
		
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Map<String,List> queryNewsInfByCategoryNameZhsForMap(Long website_id ,String name_zh,Long channelId,Integer maxNum){
		
		Map<String, List> reMap = new HashMap();
		List list = queryCategoryByNameCn(website_id,name_zh);
		String categoryNameZhs = "";
		if(list != null && list.size()>0){
			for (int i = 0; i < list.size(); i++) {
				categoryNameZhs += "'"+((NewsCategory)list.get(i)).getName_zh()+"'"+",";
			}
			if(!"".equals(categoryNameZhs)){
				categoryNameZhs=categoryNameZhs.substring(0, categoryNameZhs.length()-1);
			}
		}
		Map where = new HashMap();
		where.put("channelId", channelId);
		where.put("categoryNameZhs", categoryNameZhs);
		where.put("maxNum", maxNum);
		where.put("websiteId", website_id);
		
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
	/**
	 * 
	 * @Title: queryCategoryByPcode
	 * @Description: 按编号查询分类对象
	 * @param: code 分类编号
	 * @return: 该编号的分类对象
	 */
	public NewsCategory queryCategoryByCode(Long code) {

		return newsCategoryDAO.selectByPrimaryKey(code);
	}

	/**
	 * @Title: insertNewsCategory
	 * @Description: 添加新闻分类
	 * @param newsCategory
	 *            分类对象
	 * @return
	 */
	public String add(NewsCategoryMD ncmd) {
		try {
			Integer num_zh = newsCategoryDAO.selectName_zhKey(ncmd);
			Integer num_cn = newsCategoryDAO.selectName_cnKey(ncmd);
			String code = "";//返回给action的插入编号
			if (num_zh == null && num_cn == null || num_zh == 0 && num_cn == 0) {
				Long ncc = newsCategoryDAO.insert(ncmd);
				log.info("添加分类成功");
				code = ncc+"";
				if (ncc != null && ncc > 0 && ncmd.getTemplate_id() != null
						&& ncmd.getTemplate_id() > 0) {// 插入数据库成功，并返回了ID，则在中间表中插入分类和模板关联关系

					// 保存关系
					Channel_Template channel_Template = new Channel_Template();
					channel_Template.setCategory_code(ncc);
					channel_Template.setTemplate_id(ncmd.getTemplate_id());
					channel_TemplateService
							.addChannel_TemplateService(channel_Template);
				}
				return FinalVar.INSERT_SUCCESS +","+ code;
			} else {
				log.info("数据库已经存在该记录");
				return FinalVar.INSERT_THERE;
			}

		} catch (Exception e) {
			e.printStackTrace();
			log.error("添加分类失败!     " + ncmd.toString());
			return FinalVar.INSERT_FAIL;
		}
	}
	public Long addByCopy(NewsCategory nc) {
		
		Long code = newsCategoryDAO.insertByCopy(nc);
		return code;		
	}

	/**
	 * @description 查询所有分类
	 * @return 返回所有分类
	 */
	public List queryAll(Long website_id) {
		return this.newsCategoryDAO.selectAll(website_id);
	}

	/**
	 * @description 按分类id删除指定的分类
	 * @param code
	 * @return 返回成功删除的条数
	 */
	public void remove(Long code) {
		this.newsCategoryDAO.deleteById(code);
	}

	/**
	 * 更新分类
	 * 
	 * @param params
	 *            传参
	 * @return 数据库受影响行数大于0 则成功
	 */
	public String edit(NewsCategoryMD ncmd) {
		try {
			// 验证该分类是否已经存在，如果不存在，则不进行任何修改操作
			Integer countName_cn = this.newsCategoryDAO.selectCNName(ncmd);
			if (countName_cn != null ){
				int num = this.newsCategoryDAO.update(ncmd);
				log.info("新闻分类修改成功");

				// 修改数据库成功，并返回了修改的个数，如果修改个数大于0个，则在中间表中插入分类和模板关联关系
				// 首先删除就得关系记录
				Channel_Template channel_Template = new Channel_Template();
				channel_Template.setCategory_code(ncmd.getCode());
				channel_Template.setTemplate_id(ncmd.getTemplate_id());
				channel_TemplateService
						.remmoveChannel_TemplateService(channel_Template);

				if (num > 0 && ncmd.getTemplate_id() != null
						&& ncmd.getTemplate_id() > 0) {
					// 创建新的关系
					channel_TemplateService
							.addChannel_TemplateService(channel_Template);
				}
				return FinalVar.UPDATE_SUCCESS;
			} else {
				log.info("数据库中已存在中文名字为‘" + ncmd.getName_cn() + "’的新闻分类");
				return FinalVar.UPDATE_THERE;
			}
		} catch (Exception e) {
			log.error("新闻分类修改失败");
			return FinalVar.UPDATE_FAIL;
		}
	}
	public int editByCopy(NewsCategory nc) {
		int num = this.newsCategoryDAO.updateByCopy(nc);
		return num;
			
	}

	public List<NewsCategoryMD> queryCategoryByPcode(NewsCategory newsCategory) {
		return newsCategoryDAO.selectByPcode(newsCategory);
	}

	public List<NewsCategory> queryList() {

		return newsCategoryDAO.selectList();
	}

	@Override
	public NewsCategory queryObjectByNameZh(Long website_id, String name) {
		
		return newsCategoryDAO.selectObjectByNameZh(website_id, name);
	}

}
