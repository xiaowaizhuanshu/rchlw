
package com.ruyicai.web.dao;

import java.util.List;

import com.ruyicai.web.pojo.NewsTemplate;

/** 
 * @classname:
 * NewsTemplateDAO
 * @description
 * 新闻模板DAO
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午04:59:11 
 */

public interface NewsTemplateDAO {
	/**
	 * @description 添加新闻模板
	 * @param record 新闻模板对象
	 */
	Long insert(NewsTemplate record);
	/**
	 * @description 查询新闻模板
	 * @param record 新闻模板
	 * @return 返回新闻模板
	 */
	NewsTemplate selectNewsTemplateById(NewsTemplate record);
	/**
	 * @description 查询新闻模板
	 * @param name 新闻模板名称
	 * @return 返回新闻模板
	 */
	NewsTemplate selectByName(String name);

	/**
	 * @description 按新闻模板开头名字 删除指定的新闻模板
	 * @param name 新闻模板名称 如：ssq_zhuanjiatuijian.jsp 则传的参数是ssq 
	 * @return 返回成功删除的条数
	 */
	public int deleteNewsTemplate(String name);
	/**
	 * @description 删除模板
	 * @param id 
	 * @return 删除个数
	 */
	int delete(Long id);
	/**
	 * @description 修改新闻模板
	 * @param record
	 * @return 修改个数
	 */
	int update(NewsTemplate record);
	/**
	 * @description 根据频道类型查询频道模板
	 * @param record 频道对象
	 * @return 返回所在频道模板
	 */
	List<NewsTemplate> selectNewsTemplateByType(NewsTemplate record);
	
}
