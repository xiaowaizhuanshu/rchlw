package com.ruyicai.web.model;

import com.ruyicai.web.pojo.NewsChannel;

/** 
 * NewsChannelMD
 * @description
 * 新闻频道实体类的扩展类
 * @author 
 * 蓝生 
 * @date：
 * 2011-2-14 上午10:12:52 
 */
public class NewsChannelMD extends NewsChannel {
	/**
	 * 频道指定的模版ID
	 */
	protected Long template_id ;

	public NewsChannelMD(){
		super();
	}
	public Long getTemplate_id() {
		return template_id;
	}

	public void setTemplate_id(Long template_id) {
		this.template_id = template_id;
	}
	
}
