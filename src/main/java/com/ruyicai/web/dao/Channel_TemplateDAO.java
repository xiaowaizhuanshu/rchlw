
package com.ruyicai.web.dao;

import java.util.List;

import com.ruyicai.web.pojo.Channel_Template;

/** 
 * @classname:
 * Channel_TemplateDAO
 * @description
 * 新闻频道和分类与模板关联 DAO
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-24 下午05:17:13 
 */

public interface Channel_TemplateDAO {
	/**
	 * @description 添加新闻频道和分类与模板关联
	 * @param record 添加新闻频道和分类对象
	 */
	void insert(Channel_Template channel_Template);
	/**
	 * @Title:  delete
	 * @Description: 删除新闻关系表记录
	 * @param channel_Template 新闻频道和分类与模板关联 对象
	 */
	void delete(Channel_Template channel_Template);
	/**
	 * 返回Channel_Template list
	 * @param channel_Template
	 * @return
	 */
	List<Channel_Template> selectChannel_Template(Channel_Template channel_Template);
}
