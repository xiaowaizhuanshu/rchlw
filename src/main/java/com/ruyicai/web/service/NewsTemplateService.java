
package com.ruyicai.web.service;

import java.util.List;

import com.ruyicai.web.pojo.NewsTemplate;

/** 
 * @classname:
 * NewsTemplateService
 * @description
 * 新闻模板 业务接口
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午05:45:48 
 */

public interface NewsTemplateService {
	/**
	 * @description 添加新闻模板
	 * @param record 新闻模板对象
	 */
    public String addNewsTemplate(NewsTemplate record);
    /**
     * @description 查询新闻模板
     * @param record 新闻模板
     * @return 返回新闻模板
     */
    NewsTemplate queryNewsTemplateById(NewsTemplate record);
    /**
     * @description 查询新闻模板
     * @param name 新闻模板名称
     * @return 返回新闻模板
     */
    NewsTemplate queryByName(String name);
	
	/**
	 * @description 按新闻模板开头名字 删除指定的新闻模板
	 * @param name 新闻模板名称 如：ssq_zhuanjiatuijian.jsp 则传的参数是ssq 
	 * @return 返回成功删除的条数
	 */
	public int removeNewsTemplate(String name);
	
	/**
	 * 删除指定新闻模板
	 * @param id
	 * @return 返回码
	 */
	public String remove(Long id);
	/**
	 * 修改指定的新闻模板
	 * @param NewsTemplate
	 * @return 返回码
	 */
	public String eidt(NewsTemplate record);
	
	/**	
	 * @description 根据相应类型查找新闻模板
	 * @param record 
	 * @return 返回相应类型的模板集合
	 */
	public List<NewsTemplate> queryNewsTemplateByType(NewsTemplate record);
	
}
