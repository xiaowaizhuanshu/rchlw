
package com.ruyicai.web.service.impl;

import java.util.List;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.Channel_TemplateDAO;
import com.ruyicai.web.pojo.Channel_Template;
import com.ruyicai.web.service.Channel_TemplateService;

/** 
 * @classname:
 * Channel_TemplateServiceImpl
 * @description
 * 新闻频道和分类与模板关联 业务 实现方法
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-24 下午06:07:11 
 */

public class Channel_TemplateServiceImpl implements Channel_TemplateService {
	
	private Logger log = Logger.getLogger(Channel_TemplateServiceImpl.class);
	Channel_TemplateDAO channel_TemplateDAO = null;
	
	
	
	public Channel_TemplateDAO getChannel_TemplateDAO() {
		return channel_TemplateDAO;
	}

	public void setChannel_TemplateDAO(Channel_TemplateDAO channel_TemplateDAO) {
		this.channel_TemplateDAO = channel_TemplateDAO;
	}



	public String addChannel_TemplateService(Channel_Template channel_Template){
		try {
			this.channel_TemplateDAO.insert(channel_Template);
			log.info("添加新闻频道和分类与模板关联 成功");
			return FinalVar.INSERT_SUCCESS;
		} catch (Exception e) {
			log.info("添加新闻频道和分类与模板关联 失败");
			return FinalVar.INSERT_FAIL;
		}
	}
	public void remmoveChannel_TemplateService(Channel_Template channel_Template) {
		this.channel_TemplateDAO.delete(channel_Template);
	}
	public List<Channel_Template> query(Channel_Template channel_Template){
		return this.channel_TemplateDAO.selectChannel_Template(channel_Template);
	}
}
