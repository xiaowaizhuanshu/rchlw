package com.boyacai.helper.tag;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import com.boyacai.helper.service.HelperService;

public class HelperTag extends SimpleTagSupport {
	private String var;

	private String helperId;

	public HelperTag() {
		super();
	}

	public String getVar() {
		return var;
	}

	public void setVar(String var) {
		this.var = var;
	}

	public String getHelperId() {
		return helperId;
	}

	public void setHelperId(String helperId) {
		this.helperId = helperId;
	}

	@Override
	public void doTag() throws JspException, IOException {
		Object obj = HelperService.getHelper(helperId);
		getJspContext().setAttribute(var, obj);
		getJspBody().invoke(null);
	}
}