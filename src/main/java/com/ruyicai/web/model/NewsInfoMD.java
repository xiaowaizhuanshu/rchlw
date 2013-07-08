package com.ruyicai.web.model;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.pojo.NewsInfo;


/**
 * @classname: NewsInfoMD
 * @description 新闻分页模板
 * @author 蓝生
 * @date： 2011-2-16 下午04:53:05
 */

public class NewsInfoMD extends NewsInfo {
	
	public NewsInfoMD() {

	}

	

	/**
	 * 当前页数
	 */
	protected int nowPage;
	/**
	 * 每页新闻条数
	 */
	protected int limitCount = FinalVar.PAGESIZE;
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
	protected String channel_name_cn;
	/**
	 * 分类名称
	 */
	protected String category_name_cn;

	public int getNowPage() {
		return nowPage;
	}

	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}

	public int getLimitCount() {
		return limitCount;
	}

	public void setLimitCount(int limitCount) {
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

	public String getChannel_name_cn() {
		return channel_name_cn;
	}

	public void setChannel_name_cn(String channel_name_cn) {
		this.channel_name_cn = channel_name_cn;
	}

	public String getCategory_name_cn() {
		return category_name_cn;
	}

	public void setCategory_name_cn(String category_name_cn) {
		this.category_name_cn = category_name_cn;
	}

	

}
