package com.boyacai.helper.tag;

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

import com.boyacai.helper.service.HelperService;
import com.boyacai.helper.vo.HelperPage;

public class HelperListTag extends SimpleTagSupport {

	private String var;

	private String channel;
	private String pageNo;
	private String pageSize;

	public HelperListTag() {
		super();
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
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

		HelperPage pager = HelperService.getHelperPage(channel, pageNo, pageSize);
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
