
package com.ruyicai.web.pojo;
/** 
 * @classname:
 * NewsChannel
 * @description
 * 新闻频道实体
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-13 上午10:12:52 
 */

public class NewsChannel {
	/**
	 * 主键
	 */
	protected Long id;
	/**
	 * 新闻频道英文名
	 */
	protected String name_zh;
	/**
	 * 新闻频道中文名
	 */
	protected String name_cn;
	/**
	 * 是否显示
	 */
	protected Integer showflag;
	/**
	 * 排序
	 */
	protected Integer sequence;
	/**
	 * 频道的访问路径
	 */
	protected String url;
	/**
	 * 频道对应的站点ID
	 */
	protected Long website_id;
	/**
	 * 删除状态
	 */
	private Integer state;
	/**
	 * 频道 标识 如：加奖、热 1加奖 2 热 3 加奖 热
	 */
	private String mark;
	/**
	 * 频道的分类类型：0 福彩 ，1 体彩，2 高频彩，3足彩
	 */
	private String channelType;
	
	public String getChannelType() {
		return channelType;
	}
	public void setChannelType(String channelType) {
		this.channelType = channelType;
	}
	/*
	 * ruyicai_channel_xwzx用
	 */
	private String nameyw;
	
	public String getNameyw() {
		String namech_copy=name_zh;
		return namech_copy;
	}
	public void setNameyw(String nameyw) {
		this.nameyw = nameyw;
	}
	/*
	 * ruyicai_channel_xwzx用
	 */
	private String namech;
	
	public String getNamech() {
		String namech_copy=name_cn;
		return namech_copy;
	}
	public void setNamech(String namech) {
		this.namech = namech;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName_zh() {
		return name_zh;
	}
	public void setName_zh(String name_zh) {
		this.name_zh = name_zh;
	}
	public String getName_cn() {
		return name_cn;
	}
	public void setName_cn(String name_cn) {
		this.name_cn = name_cn;
	}
	public Integer getShowflag() {
		return showflag;
	}
	public void setShowflag(Integer showflag) {
		this.showflag = showflag;
	}
	public Integer getSequence() {
		return sequence;
	}
	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Long getWebsite_id() {
		return website_id;
	}
	public void setWebsite_id(Long website_id) {
		this.website_id = website_id;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public String getMark() {
		return mark;
	}
	public void setMark(String mark) {
		this.mark = mark;
	}
	
}
