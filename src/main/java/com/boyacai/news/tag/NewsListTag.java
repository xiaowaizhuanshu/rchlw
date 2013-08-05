package com.boyacai.news.tag;

/** 
 * @classname:
 *
 * @description
 *
 * @author 
 * 蓝生 
 * @date：
 * 2011-5-31 下午02:14:18 
 */

import java.io.IOException;
import java.util.Iterator;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import com.boyacai.news.service.NewsService;
import com.boyacai.news.vo.NewsPage;

public class NewsListTag extends SimpleTagSupport {

	private String var;

	private String category;
	private String channel;
	private String lotNo;
	private String pageNo;
	private String pageSize;

	public NewsListTag() {
		super();
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getLotNo() {
		return lotNo;
	}

	public void setLotNo(String lotNo) {
		this.lotNo = lotNo;
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

	public String getVar() {
		return var;
	}

	public void setVar(String var) {
		this.var = var;
	}

	@Override
	public void doTag() throws JspException, IOException {

		NewsPage pager = NewsService.getNewsPage(category, channel, lotNo, pageNo, pageSize);
		Iterator ite = pager.getNews().iterator();

		// 进行迭代
		while (ite.hasNext()) {
			Object obj = ite.next();
			getJspContext().setAttribute(var, obj);
			//输出标签体
			getJspBody().invoke(null);
		}
	}

}
