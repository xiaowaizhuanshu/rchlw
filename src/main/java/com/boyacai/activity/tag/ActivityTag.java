package com.boyacai.activity.tag;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import com.boyacai.activity.service.ActivityService;

public class ActivityTag extends SimpleTagSupport {
	private String var;

	private String activityId;

	public ActivityTag() {
		super();
	}

	public String getVar() {
		return var;
	}

	public void setVar(String var) {
		this.var = var;
	}

	public String getActivityId() {
		return activityId;
	}

	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}

	@Override
	public void doTag() throws JspException, IOException {
		Object obj = ActivityService.getActivity(activityId);
		getJspContext().setAttribute(var, obj);
		getJspBody().invoke(null);
	}
}