package com.boyacai.activity.action;

import org.apache.log4j.Logger;

import com.boyacai.activity.service.ActivityService;
import com.boyacai.activity.vo.Activity;
import com.boyacai.activity.vo.ActivityPage;
import com.ruyicai.util.BaseAction;

public class ActivityAction extends BaseAction {
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = -7615707848098342457L;

	private static Logger logger = Logger.getLogger(ActivityAction.class);

	private String id;
	private Activity entity;

	private ActivityPage page;

	/**
	 * 分页查询新闻信息
	 */
	public String list() {
		if (page == null) {
			page = new ActivityPage();
		}
		page = ActivityService.getActivityPage(page);
		return "list";
	}

	public String view() {
		entity = ActivityService.getActivity(id);
		return "view";
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Activity getEntity() {
		return entity;
	}

	public void setEntity(Activity entity) {
		this.entity = entity;
	}

	public ActivityPage getPage() {
		return page;
	}

	public void setPage(ActivityPage page) {
		this.page = page;
	}

}
