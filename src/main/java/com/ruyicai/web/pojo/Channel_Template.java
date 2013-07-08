
package com.ruyicai.web.pojo;
/** 
 * @classname:
 * Channel_Template
 * @description
 *  新闻频道和分类与模板关联
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-24 下午05:03:11 
 */

public class Channel_Template {
	/**
	 * id自增长数字主键
	 */
	private Long id;
	/**
	 * 新闻频道id
	 */
	private Long channel_id;
	/**
	 * 新闻分类编号
	 */
	private Long category_code;
	/**
	 * 使用的模板id
	 */
	private Long template_id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getChannel_id() {
		return channel_id;
	}
	public void setChannel_id(Long channel_id) {
		this.channel_id = channel_id;
	}
	
	public Long getCategory_code() {
		return category_code;
	}
	public void setCategory_code(Long category_code) {
		this.category_code = category_code;
	}
	public Long getTemplate_id() {
		return template_id;
	}
	public void setTemplate_id(Long template_id) {
		this.template_id = template_id;
	}
	
}
