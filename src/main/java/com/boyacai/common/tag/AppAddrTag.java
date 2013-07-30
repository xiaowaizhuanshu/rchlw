package com.boyacai.common.tag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.JspFragment;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class AppAddrTag extends SimpleTagSupport {
	private String module;

	public AppAddrTag() {
		super();
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	@Override
	public void doTag() throws JspException {
		JspWriter out = getJspContext().getOut();
		try {
			JspFragment f = getJspBody();
			if (f != null) {
				f.invoke(out);
			}
		} catch (java.io.IOException ex) {
			throw new JspException(ex.getMessage());
		}
	}
}