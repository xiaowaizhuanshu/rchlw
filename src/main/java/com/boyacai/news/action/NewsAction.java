package com.boyacai.news.action;

import org.apache.log4j.Logger;

import com.boyacai.common.AppConstant;
import com.boyacai.news.service.NewsService;
import com.boyacai.news.vo.NewsPage;
import com.ruyicai.util.BaseAction;

public class NewsAction extends BaseAction {
	private static Logger logger = Logger.getLogger(NewsAction.class);

	private NewsPage page;
	private String pageNo;
	private String pageSize;

	/**
	 * 查询条件
	 */
	private String nt;//新闻分类(news category)
	private String ncc;//新闻频道代号(news channel cn)
	private String ln;//彩种
	private String cp; //您所在的位置（current position）

	/**
	 * 分页查询新闻信息
	 */
	public String list() {
		if (page == null) {
			page = new NewsPage(20);
		}
		page = NewsService.getNewsPage(nt, ncc, ln, pageNo, pageSize);
		return "list";
	}

	public NewsPage getPage() {
		return page;
	}

	public void setPage(NewsPage page) {
		this.page = page;
	}

	public String getNcc() {
		return ncc;
	}

	public void setNcc(String ncc) {
		this.ncc = ncc;
	}

	public static Logger getLogger() {
		return logger;
	}

	public static void setLogger(Logger logger) {
		NewsAction.logger = logger;
	}

	public String getNt() {
		return nt;
	}

	public void setNt(String nt) {
		this.nt = nt;
	}

	public String getLn() {
		return ln;
	}

	public void setLn(String ln) {
		this.ln = ln;
	}

	public String getCp() {
		return AppConstant.getLotName(cp);
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public String getPageNo() {
		return pageNo;
	}

	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
	}

	public String getPageSize() {
		return pageSize;
	}

	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}

}
