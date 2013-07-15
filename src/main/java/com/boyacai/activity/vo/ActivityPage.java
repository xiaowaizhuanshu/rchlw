/**
 * Copyright (c) 2005-2010 springside.org.cn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * 
 * $Id: Page.java 1183 2010-08-28 08:05:49Z calvinxiu $
 */
package com.boyacai.activity.vo;

import java.util.ArrayList;
import java.util.List;

/**
 * 新闻分页列表，含分页参数及查询结果封装.
 * 
 * 注意所有序号从1开始.
 */
public class ActivityPage {

	//-- 分页参数 --//
	protected int pageNo = 1;
	protected int pageSize = 5;

	//-- 返回结果 --//
	protected String error_code;//错误码
	protected String message;//返回消息
	protected long totalPage = -1;//总页码数
	protected List<Activity> result = new ArrayList<Activity>();//记录列表

	//-- 构造函数 --//
	public ActivityPage() {
	}

	public ActivityPage(int pageSize) {
		this.pageSize = pageSize;
	}

	//-- 分页参数访问函数 --//
	/**
	 * 获得当前页的页号,序号从1开始,默认为1.
	 */
	public int getPageNo() {
		return pageNo;
	}

	/**
	 * 设置当前页的页号,序号从1开始,低于1时自动调整为1.
	 */
	public void setPageNo(final int pageNo) {
		this.pageNo = pageNo;

		if (pageNo < 1) {
			this.pageNo = 1;
		}
	}

	/**
	 * 返回Page对象自身的setPageNo函数,可用于连续设置。
	 */
	public ActivityPage pageNo(final int thePageNo) {
		setPageNo(thePageNo);
		return this;
	}

	/**
	 * 获得每页的记录数量, 默认为-1.
	 */
	public int getPageSize() {
		return pageSize;
	}

	/**
	 * 设置每页的记录数量.
	 */
	public void setPageSize(final int pageSize) {
		this.pageSize = pageSize;
	}

	/**
	 * 返回Page对象自身的setPageSize函数,可用于连续设置。
	 */
	public ActivityPage pageSize(final int thePageSize) {
		setPageSize(thePageSize);
		return this;
	}

	/**
	 * 根据pageNo和pageSize计算当前页第一条记录在总结果集中的位置,序号从1开始.
	 */
	public int getFirst() {
		return ((pageNo - 1) * pageSize) + 1;
	}

	//-- 访问查询结果函数 --//
	/**
	 * 获得页内的记录列表.
	 */
	public List<Activity> getResult() {
		return result;
	}

	/**
	 * 设置页内的记录列表.
	 */
	public void setResult(List<Activity> result) {
		this.result = result;
	}

	/**
	 * 获取返回码
	 */
	public String getError_code() {
		return error_code;
	}

	/**
	 * 设置返回码
	 */
	public void setError_code(String error_code) {
		this.error_code = error_code;
	}

	/**
	 * 获取返回消息
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * 设置返回消息
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * 获取总页码数
	 */
	public long getTotalPage() {
		return totalPage;
	}

	/**
	 * 设置总页码数
	 */
	public void setTotalPage(long totalPage) {
		this.totalPage = totalPage;
	}

	/**
	 * 是否还有下一页.
	 */
	public boolean isHasNext() {
		return (pageNo + 1 <= totalPage);
	}

	/**
	 * 取得下页的页号, 序号从1开始.
	 * 当前页为尾页时仍返回尾页序号.
	 */
	public int getNextPage() {
		if (isHasNext()) {
			return pageNo + 1;
		} else {
			return pageNo;
		}
	}

	/**
	 * 是否还有上一页.
	 */
	public boolean isHasPre() {
		return (pageNo - 1 >= 1);
	}

	/**
	 * 取得上页的页号, 序号从1开始.
	 * 当前页为首页时返回首页序号.
	 */
	public int getPrePage() {
		if (isHasPre()) {
			return pageNo - 1;
		} else {
			return pageNo;
		}
	}
}
