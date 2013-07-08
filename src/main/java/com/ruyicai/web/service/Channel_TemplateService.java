
package com.ruyicai.web.service;

import java.util.List;

import com.ruyicai.web.pojo.Channel_Template;

/** 
 * @classname:
 * Channel_TemplateService
 * @description
 * 新闻频道和分类与模板关联 业务接口
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-24 下午06:06:04 
 */

public interface Channel_TemplateService {
	/**
	 * @Title:  insertChannel_TemplateService
	 * @Description: 添加新闻频道和分类与模板关联 
	 * @param newsCategory 新闻频道和分类与模板关联 对象
	 * @return
	 */
	public String addChannel_TemplateService(Channel_Template channel_Template);
	/**
	 * @Title:  remmoveChannel_TemplateService
	 * @Description: 删除新闻关系表 
	 * @param channel_Template 新闻频道和分类与模板关联 对象
	 */
	public void remmoveChannel_TemplateService(Channel_Template channel_Template);
	/**
	 * 按条件查询Channel_Template list
	 * @param channel_Template
	 * @return
	 */
	List<Channel_Template> query(Channel_Template channel_Template);
}
