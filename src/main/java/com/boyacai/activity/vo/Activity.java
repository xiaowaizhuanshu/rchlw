package com.boyacai.activity.vo;

import java.io.Serializable;

public class Activity implements Serializable {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 5785036257943255323L;

	private String activityId;
	private String title;
	private String introduce;
	private String activityTime;
	private String isEnd;
	private String content;
	private String url;

	public Activity() {
		super();
	}

	public Activity(String activityId, String title, String introduce, String activityTime, String isEnd) {
		super();
		this.activityId = activityId;
		this.title = title;
		this.introduce = introduce;
		this.activityTime = activityTime;
		this.isEnd = isEnd;
	}

	public Activity(String title, String activityTime, String content, String url) {
		super();
		this.title = title;
		this.activityTime = activityTime;
		this.content = content;
		this.url = url;
	}

	public Activity(String activityId, String title, String introduce, String activityTime, String isEnd,
			String content, String url) {
		super();
		this.activityId = activityId;
		this.title = title;
		this.introduce = introduce;
		this.activityTime = activityTime;
		this.isEnd = isEnd;
		this.content = content;
		this.url = url;
	}

	public String getActivityId() {
		return activityId;
	}

	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public String getActivityTime() {
		return activityTime;
	}

	public void setActivityTime(String activityTime) {
		this.activityTime = activityTime;
	}

	public String getIsEnd() {
		return isEnd;
	}

	public void setIsEnd(String isEnd) {
		this.isEnd = isEnd;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
