package com.ruyicai.util;

import javax.servlet.http.HttpServletRequest;

public class Pager {
	private int totalRows; // 数据总行数
	private int pageSize = 5;// 每页显示的行数
	private int currentPage; // 当前页号
	private int totalPages; // 总页数
	private int startRow;// 当前页在数据库中的起始行
	private String strUrl;// 出现[1][2][3][4]用
	private int startPage;// 起始页码
	private int endPage;// 结束页码
	private boolean hasPreviousPage = false;// 上一页是否显示
	private boolean hasNextPage = false;// 下一页是否显
	private String action; // 请求目的

	public Pager(int _totalRows, String actionUrl) {
		totalRows = _totalRows;// 数据数量
		totalPages = totalRows / pageSize;// 页数
		if (totalRows % pageSize > 0) {
			totalPages++;
		}
		currentPage = 1;
		startRow = 0;
		if (totalPages > currentPage) {
			hasNextPage = true;
		}
		startPage = 1;
		if (totalPages < 10) {
			endPage = totalPages;
		} else {
			endPage = 10;
		}
		this.getMyUrl(actionUrl);
	}

	public Pager() {
	}

	public int getStartRow() {
		return startRow;
	}

	public int getTotalPages() {
		return totalPages;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setTotalRows(int totalRows) {
		this.totalRows = totalRows;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getTotalRows() {
		return totalRows;
	}

	public boolean getHasNextPage() {
		return hasNextPage;
	}

	public void setHasNextPage(boolean hasNextPage) {
		this.hasNextPage = hasNextPage;
	}

	public boolean getHasPreviousPage() {
		return hasPreviousPage;
	}

	public void setHasPreviousPage(boolean hasPreviousPage) {
		this.hasPreviousPage = hasPreviousPage;
	}

	public String getStrUrl() {
		return strUrl;
	}

	public void setStrUrl(String strUrl) {
		this.strUrl = strUrl;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public void account() {
		if (totalPages <= 10) {
			startPage = 1;
			endPage = totalPages;
		} else if (totalPages > 10 && totalPages <= 20) {
			startPage = 1;
			endPage = currentPage + 9 > totalPages ? totalPages
					: currentPage + 9;
		} else {
			if (currentPage <= 11) {
				startPage = 1;
				endPage = currentPage + 9;
			}
			if (currentPage > 11) {
				startPage = currentPage - 10;
				endPage = currentPage + 9;
			}
			if (currentPage + 9 >= totalPages) {
				startPage = totalPages - 19;
				endPage = totalPages;
			}
		}
		if (currentPage == 1) {
			hasPreviousPage = false;
		} else {
			hasPreviousPage = true;
		}
		if (currentPage == totalPages) {
			hasNextPage = false;
		} else {
			hasNextPage = true;
		}

		startRow = (currentPage - 1) * pageSize;
	}

	/*
	 * 方法?:previous 方法参数:? 方法返回值类?:void 方法功能：向上翻
	 */
	public void previous() {
		currentPage--;
		this.account();

	}

	/*
	 * 方法?:next 方法参数:? 方法返回值类?:void 方法功能：向下翻?
	 */
	public void next() {
		currentPage++;
		this.account();
	}

	/*
	 * 方法?:getMyUrl 方法参数:? 方法返回值类�?:void 方法功能：生成字符串送往客户?
	 */

	public void getMyUrl(String url) {
		this.action = url;
		StringBuffer myUrl = new StringBuffer();
		for (int i = startPage; i <= endPage; i++) {
			myUrl.append("<a href=" + url + "&currentPage=" + i
					+ "&totalPages=" + this.getTotalPages() + ">[" + i
					+ "]</a>");
		}
		strUrl = myUrl.toString();
	}

	/*
	 * 方法?:refresh 方法参数:int 方法返回值类?:void 方法功能：根据参数跳到指定页
	 */
	public void refresh(int _currentPage) {
		currentPage = _currentPage;
		this.account();
	}

	public static Pager getPager(HttpServletRequest request, String url) {
		Pager pager = new Pager();
		pager.setCurrentPage(Integer.parseInt(request
				.getParameter("currentPage")));
		pager.setTotalPages(Integer
				.parseInt(request.getParameter("totalPages")));
		if (!StrUtil.isNull(request.getParameter("pageroperation"))) {
			if (StrUtil.isEqual(request.getParameter("pageroperation")
					.toString(), "previous")) {
				pager.previous();
				pager.getMyUrl(url);
			} else if (StrUtil.isEqual(request.getParameter("pageroperation")
					.toString(), "next")) {
				pager.next();
				pager.getMyUrl(url);
			}
		} else {
			pager.refresh(Integer.parseInt(request.getParameter("currentPage")
					.toString()));
			pager.getMyUrl(url);
		}
		return pager;
	}

}
