package com.boyacai.news.tag;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import com.boyacai.news.service.NewsService;

public class NewsTag extends SimpleTagSupport {
	private String var;

	private String newsId;

	public NewsTag() {
		super();
	}

	public String getVar() {
		return var;
	}

	public void setVar(String var) {
		this.var = var;
	}

	public String getNewsId() {
		return newsId;
	}

	public void setNewsId(String newsId) {
		this.newsId = newsId;
	}

	@Override
	public void doTag() throws JspException, IOException {
		Object obj = NewsService.getNews(newsId);
		getJspContext().setAttribute(var, obj);
		getJspBody().invoke(null);
	}
}