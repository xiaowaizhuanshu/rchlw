
package com.ruyicai.web.pojo;
/** 
 * @classname:
 * WebsiteUrl
 * @description
 * 站点路径
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 上午11:12:06 
 */

public class WebsiteUrl {
	/**
	 * 主键自增
	 */
	private Long id;
	/**
	 * 站点路径
	 */
	private String url;
	/**
	 * 站点描述
	 */
	private String description;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
