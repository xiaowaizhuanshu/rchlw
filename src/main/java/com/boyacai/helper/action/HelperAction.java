package com.boyacai.helper.action;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.boyacai.helper.service.HelperService;
import com.boyacai.helper.vo.Helper;
import com.boyacai.helper.vo.HelperPage;
import com.ruyicai.util.BaseAction;

public class HelperAction extends BaseAction {
	private static Logger logger = Logger.getLogger(HelperAction.class);

	private String id;
	private Helper entity;

	private HelperPage page;
	private String pageNo;
	private String pageSize;

	/**
	 * 查询条件
	 */
	private String cc="1"; //频道代号(news channel cn)
	private String cp="1"; //您所在的位置（current position）
	private static final Map<String, String> cps = new HashMap<String, String>();
	static {
		cps.put("1", "功能指引");
		cps.put("2", "特色功能");
		cps.put("3", "彩票玩法");
		cps.put("4", "常见问题");
		cps.put("5", "彩票术语");
	}

	/**
	 * 分页查询新闻信息
	 */
	public String list() {
		if (page == null) {
			page = new HelperPage(20);
		}
		if (StringUtils.isBlank(cc)) {
			cc = "1";
		}
		page = HelperService.getHelperPage(cc, pageNo, pageSize);
		return "list";
	}

	public String view() {
		entity = HelperService.getHelper(id);
		return "view";
	}

	/**
	 * 获取浏览者当前位置
	 */
	public String getCurrentPosition() {
		String result = cps.get(cp);
		return StringUtils.isNotBlank(result) ? result : "";
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Helper getEntity() {
		return entity;
	}

	public void setEntity(Helper entity) {
		this.entity = entity;
	}

	public HelperPage getPage() {
		return page;
	}

	public void setPage(HelperPage page) {
		this.page = page;
	}

	public String getCc() {
		return cc;
	}

	public void setCc(String cc) {
		this.cc = cc;
	}

	public String getCp() {
		return cp;
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
