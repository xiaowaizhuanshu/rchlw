package com.ruyicai.web.model;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.pojo.News;


/**
 * @classname: NewsInfoMD
 * @description 新闻分页模板
 * @author 蓝生
 * @date： 2011-2-16 下午04:53:05
 */

public class NewsMD extends News {
	
	/**
	 * 当前页数
	 */
	private Integer page = 1;
	/**
	 * 当前起始记录行
	 */
	protected Integer nowPage;
	/**
	 * 每页新闻条数
	 */
	protected Integer limitCount = FinalVar.PAGESIZE;
	/**
	 * 查询开始时间
	 */
	protected String sartTime;
	/**
	 * 查询结束时间
	 */
	protected String endTime;
	/**
	 * 频道名称
	 */
	protected String channelNameCn;
	/**
	 * 频道名称英文
	 */
	protected String channelNameZh;
	/**
	 * 分类名称
	 */
	protected String categoryNameCn;
	/**
	 * 分类名称英文
	 */
	protected String categoryNameZh;
	
	

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getNowPage() {
		return nowPage;
	}

	public void setNowPage(Integer nowPage) {
		this.nowPage = nowPage;
	}

	public Integer getLimitCount() {
		return limitCount;
	}

	public void setLimitCount(Integer limitCount) {
		this.limitCount = limitCount;
	}

	public String getSartTime() {
		return sartTime;
	}

	public void setSartTime(String sartTime) {
		this.sartTime = sartTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getChannelNameCn() {
		return channelNameCn;
	}

	public void setChannelNameCn(String channelNameCn) {
		this.channelNameCn = channelNameCn;
	}

	public String getCategoryNameCn() {
		return categoryNameCn;
	}

	public void setCategoryNameCn(String categoryNameCn) {
		this.categoryNameCn = categoryNameCn;
	}

	public String getChannelNameZh() {
		return channelNameZh;
	}

	public void setChannelNameZh(String channelNameZh) {
		this.channelNameZh = channelNameZh;
	}

	public String getCategoryNameZh() {
		return categoryNameZh;
	}

	public void setCategoryNameZh(String categoryNameZh) {
		this.categoryNameZh = categoryNameZh;
	}


	

}
