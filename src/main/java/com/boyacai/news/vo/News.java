package com.boyacai.news.vo;

import java.io.Serializable;

public class News implements Serializable {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 3834755521082618282L;

	private String newsId;
	private String title;
	private String content;
	private String updateTime;
	private String url;

	public News() {
		super();
	}

	public News(String newsId, String title) {
		super();
		this.newsId = newsId;
		this.title = title;
	}

	public String getNewsId() {
		return newsId;
	}

	public void setNewsId(String newsId) {
		this.newsId = newsId;
	}

	public String getTitle() {
		return title;
	}

	public String getTitle15() {
		return title.length() > 15 ? title.substring(0, 15) + "..." : title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
