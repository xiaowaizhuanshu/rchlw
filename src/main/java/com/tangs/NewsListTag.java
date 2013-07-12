package com.tangs;

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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.jsp.JspException;

import org.apache.struts2.components.Component;
import org.apache.struts2.views.jsp.ContextBeanTag;

import com.opensymphony.xwork2.util.ValueStack;

// Referenced classes of package org.apache.struts2.views.jsp:
//            ContextBeanTag

public class NewsListTag extends ContextBeanTag {

	public NewsListTag() {
	}

	public Component getBean(ValueStack stack, HttpServletRequest req, HttpServletResponse res) {
		return new NewsListLogic(stack);
	}

	protected void populateParams() {
		super.populateParams();
		NewsListLogic tag = (NewsListLogic) getComponent();
		tag.setStatus(statusAttr);
		tag.setValue(value);
		tag.setBegin(begin);
		tag.setEnd(end);
		tag.setStep(step);
		tag.setWeb_id(web_id);
		tag.setNum(num);
		tag.setNewsId(newsId);
		tag.setCategoryCn(categoryCn);
		tag.setChannelCn(channelCn);
		tag.setCategoryExpress(categoryExpress);
		tag.setIstopNews(istopNews);
		tag.setChannelId(channelId);
		tag.setCategoryId(categoryId);
		tag.setChannelExpress(channelExpress);
		tag.setPcodeId(pcodeId);
	}

	public void setStatus(String status) {
		statusAttr = status;
	}

	public void setCategoryCn(String categoryCn) {
		this.categoryCn = categoryCn;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public void setBegin(String begin) {
		this.begin = begin;
	}

	public void setEnd(String end) {
		this.end = end;
	}

	public void setStep(String step) {
		this.step = step;
	}

	public void setWeb_id(String web_id) {
		this.web_id = web_id;
	}

	public void setNum(String num) {

		this.num = num;
	}

	public void setIstopNews(String istopNews) {
		this.istopNews = istopNews;
	}

	public void setNewsId(String newsId) {

		this.newsId = newsId;
	}

	public void setCategoryExpress(String categoryExpress) {
		this.categoryExpress = categoryExpress;
	}

	public void setChannelExpress(String channelExpress) {
		this.channelExpress = channelExpress;
	}

	public void setChannelCn(String channelCn) {
		this.channelCn = channelCn;
	}

	public void setPcodeId(String pcodeId) {
		this.pcodeId = pcodeId;
	}

	public void setChannelId(String channelId) {
		this.channelId = channelId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public int doEndTag() throws JspException {
		component = null;
		return 6;
	}

	public int doAfterBody() throws JspException {
		boolean again = component.end(pageContext.getOut(), getBody());
		if (again)
			return 2;
		if (bodyContent != null)
			try {
				bodyContent.writeOut(bodyContent.getEnclosingWriter());
			} catch (Exception e) {
				throw new JspException(e.getMessage());
			}
		return 0;
	}

	private static final long serialVersionUID = -1827978135193581901L;
	/**
	 * 
	 */
	protected String statusAttr;
	/**
	 * (*)传入的查询类型: 1 新闻频道 2 新闻列表 3分类的新闻列表 4分类列表 5嵌套标签查询 6 分页列表
	 */
	protected String value;
	/**
	 * 起始下标[默认从0开始]
	 */
	protected String begin;
	/**
	 * 终止下标[默认列表的长度]
	 */
	protected String end;
	/**
	 * 
	 */
	protected String step;
	/**
	 * (*)传入的站点id
	 */
	protected String web_id;
	/**
	 * 显示条数
	 */
	protected String num;
	/**
	 * 新闻id
	 */
	protected String newsId;
	/**
	 * 查询分类的中文名
	 */
	protected String categoryCn;
	/**
	 * 查询分类新闻的频道中文名
	 */
	protected String channelCn;
	/**
	 * 查询分类的表达式，用于标签的迭代查询
	 */
	protected String categoryExpress;
	/**
	 * 查询频道的表达式，用于标签的迭代查询
	 */
	protected String channelExpress;
	/**
	 * 查询的新闻是否是头条
	 */
	protected String istopNews;
	/**
	 * 新闻频道id
	 */
	protected String channelId;
	/**
	 * 新闻分类id
	 */
	protected String categoryId;
	/**
	 * 当前分类的父分类id
	 */
	protected String pcodeId;

}
