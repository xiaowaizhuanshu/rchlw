
package com.ruyicai.web.pojo;
/** 
 * @classname:
 * Website_Properties
 * @description
 * 网站属性实体
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午04:15:51 
 */

public class Website_Properties {
	/**
	 * 自增长数字主键
	 */
	protected Long id;
	/**
	 * 网站的中文名称
	 */
	protected String name_cn;
	/**
	 * 网站的名称全拼
	 */
	protected String name_zh;
	/**
	 * 网站logo
	 */
	protected String logo;
	/**
	 * 图片的物理地址
	 */
	protected String pictures_address;
	/**
	 * 缩略图物理地址
	 */
	protected String thumbnail_address;
	/**
	 * 水印图片的物理地址
	 */
	protected String watermark_address ;
	/**
	 * 统计代码设置
	 */
	protected String statistics_code_set;
	/**
	 * 网站网址
	 */
	protected String website_url;
	/**
	 * 分类的默认模板ID
	 */
	protected Long category_default_vm;
	/**
	 * 频道的默认模板ID
	 */
	protected Long channel_default_vm;
	/**
	 * 新闻的默认模板ID
	 */
	protected Long news_default_vm;
	/**
	 * 网站所有页面需要嵌入的js
	 */
	protected String script_text;
	/**
	 * 网站的所有辅助页面的生成时间属性，以,分割多个时间
	 */
	protected String timer;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	public String getPictures_address() {
		return pictures_address;
	}
	public void setPictures_address(String pictures_address) {
		this.pictures_address = pictures_address;
	}
	public String getThumbnail_address() {
		return thumbnail_address;
	}
	public void setThumbnail_address(String thumbnail_address) {
		this.thumbnail_address = thumbnail_address;
	}
	public String getStatistics_code_set() {
		return statistics_code_set;
	}
	public void setStatistics_code_set(String statistics_code_set) {
		this.statistics_code_set = statistics_code_set;
	}
	public String getWebsite_url() {
		return website_url;
	}
	public void setWebsite_url(String website_url) {
		this.website_url = website_url;
	}
	public Long getCategory_default_vm() {
		return category_default_vm;
	}
	public void setCategory_default_vm(Long category_default_vm) {
		this.category_default_vm = category_default_vm;
	}
	public Long getChannel_default_vm() {
		return channel_default_vm;
	}
	public void setChannel_default_vm(Long channel_default_vm) {
		this.channel_default_vm = channel_default_vm;
	}
	public Long getNews_default_vm() {
		return news_default_vm;
	}
	public void setNews_default_vm(Long news_default_vm) {
		this.news_default_vm = news_default_vm;
	}
	public String getName_cn() {
		return name_cn;
	}
	public void setName_cn(String name_cn) {
		this.name_cn = name_cn;
	}
	public String getName_zh() {
		return name_zh;
	}
	public void setName_zh(String name_zh) {
		this.name_zh = name_zh;
	}
	public String getWatermark_address() {
		return watermark_address;
	}
	public void setWatermark_address(String watermark_address) {
		this.watermark_address = watermark_address;
	}
	public String getScript_text() {
		return script_text;
	}
	public void setScript_text(String script_text) {
		this.script_text = script_text;
	}
	public String getTimer() {
		return timer;
	}
	public void setTimer(String timer) {
		this.timer = timer;
	}
	public String toString() {
		return "Website_Properties [id=" + id + ", name_cn=" + name_cn
				+ ", name_zh=" + name_zh + ", logo=" + logo
				+ ", pictures_address=" + pictures_address
				+ ", thumbnail_address=" + thumbnail_address
				+ ", watermark_address=" + watermark_address
				+ ", statistics_code_set=" + statistics_code_set
				+ ", website_url=" + website_url + ", category_default_vm="
				+ category_default_vm + ", channel_default_vm="
				+ channel_default_vm + ", news_default_vm=" + news_default_vm
				+ ", script_text=" + script_text + ", timer=" + timer + "]";
	}
	
}
