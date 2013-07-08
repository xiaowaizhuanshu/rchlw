
package com.ruyicai.web.pojo;
/** 
 * @classname:
 * Category_Channel
 * @description
 * 频道和分类关联
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-24 下午03:49:39 
 */

public class Category_Channel {
	/**
	 * 主键
	 */
	private Long id;
	/**
	 * 分类编号
	 */
	private Long cateoryg_code;
	/**
	 * 道频编号
	 */
	private Long channel_id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setCateoryg_code(Long cateoryg_code) {
		this.cateoryg_code = cateoryg_code;
	}
	public Long getChannel_id() {
		return channel_id;
	}
	public void setChannel_id(Long channel_id) {
		this.channel_id = channel_id;
	}
	
}
