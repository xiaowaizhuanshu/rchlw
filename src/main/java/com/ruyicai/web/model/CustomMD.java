package com.ruyicai.web.model;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.pojo.Custom;


public class CustomMD extends Custom {
	/**
	 * 当前页数
	 */
	private Integer page = 1;
	/**
	 * 当前起始记录行
	 */
	protected Integer nowPage;
	/**
	 * 每页留言条数
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
	 * 用户名（登录方式为手机登录，则用户名为手机号码，邮箱登录同理）
	 */
	protected String userName;

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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	

}
