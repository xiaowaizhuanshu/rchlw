package com.boyacai.activity.tag;

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

import com.boyacai.activity.service.ActivityService;
import com.boyacai.activity.vo.ActivityPage;

public class ActivityListTag extends SimpleTagSupport {

	private String var;

	private String lotNo;
	private String pageNo;
	private String pageSize;

	public ActivityListTag() {
		super();
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

		ActivityPage pager = ActivityService.getActivityPage(pageNo, pageSize);
		Iterator ite = pager.getResult().iterator();

		// 进行迭代
		while (ite.hasNext()) {
			Object obj = ite.next();
			getJspContext().setAttribute(var, obj);
			//输出标签体
			getJspBody().invoke(null);
		}
	}

}
