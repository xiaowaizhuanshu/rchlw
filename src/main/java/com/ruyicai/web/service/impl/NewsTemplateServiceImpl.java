
package com.ruyicai.web.service.impl;

import java.util.List;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.NewsTemplateDAO;
import com.ruyicai.web.pojo.NewsTemplate;
import com.ruyicai.web.service.NewsTemplateService;

/** 
 * @classname:
 * NewsTemplateServiceImpl
 * @description
 * 新闻模板 业务实现
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午05:46:37 
 */

public class NewsTemplateServiceImpl implements NewsTemplateService {
	private Logger log = Logger.getLogger(NewsTemplateServiceImpl.class);
	NewsTemplateDAO newsTemplateDAO = null;
	
	public NewsTemplateDAO getNewsTemplateDAO() {
		return newsTemplateDAO;
	}

	public void setNewsTemplateDAO(NewsTemplateDAO newsTemplateDAO) {
		this.newsTemplateDAO = newsTemplateDAO;
	}

	public String addNewsTemplate(NewsTemplate record) {
		try {
			this.newsTemplateDAO.insert(record);
			log.info("添加新闻模板成功");
			return FinalVar.INSERT_SUCCESS;
		} catch (Exception e) {
			e.printStackTrace();
			log.error("添加新闻模板失败");
			return FinalVar.INSERT_FAIL;
		}
	}

	public NewsTemplate queryNewsTemplateById(NewsTemplate record) {
		return (NewsTemplate)this.newsTemplateDAO.selectNewsTemplateById(record);
	}
	public  NewsTemplate queryByName(String name){
		
		return (NewsTemplate)this.newsTemplateDAO.selectByName(name);
	}
	public List<NewsTemplate> queryNewsTemplateByType(NewsTemplate record) {
		return this.newsTemplateDAO.selectNewsTemplateByType(record);
	}
	public int removeNewsTemplate(String name){
		return this.newsTemplateDAO.deleteNewsTemplate(name);
	}
	public String remove(Long id) {
		int num = this.newsTemplateDAO.delete(id);
		if(num>0){
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}
	public String eidt(NewsTemplate record) {
		try {
				int num = this.newsTemplateDAO.update(record);
				log.info("新闻模板修改成功");
				//修改数据库成功，并返回了修改的个数，如果修改个数大于0个，则在中间表中插入分类和模板关联关系
				if(num >0){
					return FinalVar.UPDATE_SUCCESS;
				}
				return FinalVar.UPDATE_SUCCESS;
		} catch (Exception e) {
			log.error("修改新闻模板失败");
			return FinalVar.UPDATE_FAIL;
		}
	}
}
