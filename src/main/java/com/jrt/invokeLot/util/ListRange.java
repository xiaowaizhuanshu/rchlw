package com.jrt.invokeLot.util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

/**
 * 分页工具类
 */
public class ListRange<T> implements Serializable {

	private static final long serialVersionUID = 1L;
	private boolean success;
	private List<T> records;// 返回结果集
	private Serializable query;// 查询条件
	private int page = 1;// 当前页数
	private int pageSize = 0;// 每页显示行数
	private int countrow = 0;// 总行数
	private int countpage = 0;// 总页数
	private int startrow = 0;// >的起始行
	private int endrow = 0;// <=的结束行
	private String MOBILEID;
	public String getMOBILEID() {
		return MOBILEID;
	}
	public void setMOBILEID(String mobileid) {
		MOBILEID = mobileid;
	}
	public static long getSerialVersionUID() {
		return serialVersionUID;
	}
	/**
	 * 返回结果集
	 */
	public ListRange() {
		this.records = new ArrayList<T>();
	}
	/**
	 * 返回结果集
	 */
	public ListRange(HttpServletRequest request) {
		String pageNumber=request.getParameter("pageNumber");//要查看的页数
		String resultSize=request.getParameter("pageSize");		
		if(null != pageNumber && pageNumber.trim().length() > 0){
			page=Integer.valueOf(pageNumber);//要查看的页数
		}
		if(null != resultSize && resultSize.trim().length() > 0){
			pageSize=Integer.valueOf(resultSize);//要查看的页数
		}
		this.records = new ArrayList<T>();
	}
	private void calculate() {
		if (countrow != 0) {
			// 总页数
			countpage = (double) countrow / (double) pageSize > (int) countrow
					/ (int) pageSize ? (int) countrow / (int) pageSize + 1
					: (int) countrow / (int) pageSize;
			// 当前页数
			if (page < 1) {
				page = 1;
			} else if (page > countpage) {
				page = countpage;
			}
			// 起始行
			startrow = (page - 1) * pageSize;
			// 结束行
			if (page == countpage) {
				endrow = countrow;
				pageSize = endrow - startrow;
			} else {
				endrow = page * pageSize;
			}
		} else {
			pageSize = 0;
			page = 0;
		}

	}

	/**
	 * 当前页数
	 * @return
	 */
	public int getPage() {
		return page;
	}

	/**
	 * 当前页数
	 * @return
	 */
	public void setPage(int page) {
		this.page = page;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getCountrow() {
		return countrow;
	}

	public void setCountrow(int countrow) {
		this.countrow = countrow;
		calculate();
	}

	public int getCountpage() {
		return countpage;
	}

	public void setCountpage(int countpage) {
		this.countpage = countpage;
	}

	public int getStartrow() {
		return startrow;
	}

	public void setStartrow(int startrow) {
		this.startrow = startrow;
	}

	public int getEndrow() {
		return endrow;
	}

	public void setEndrow(int endrow) {
		this.endrow = endrow;
	}

	/**
	 * 返回结果集
	 * 
	 * @param records
	 */
	public void setRecords(List<T> records) {
		this.records = records;
	}

	/**
	 * 返回结果集
	 * 
	 * @return
	 */
	public List<T> getRecords() {
		return records;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	/**
	 * 查询条件
	 * 
	 * @return
	 */
	public Serializable getQuery() {
		return query;
	}

	/**
	 * 查询条件
	 * 
	 * @param query
	 */
	public void setQuery(Serializable query) {
		this.query = query;
	}

	public void clear() {
		this.query = null;
	}
}
