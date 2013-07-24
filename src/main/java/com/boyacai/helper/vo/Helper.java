package com.boyacai.helper.vo;

import java.io.Serializable;

public class Helper implements Serializable {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = -3970260579763386945L;

	private String id;
	private String title;
	private String content;

	public Helper() {
		super();
	}

	public Helper(String id, String title) {
		super();
		this.id = id;
		this.title = title;
	}

	public Helper(String id, String title, String content) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
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

}
