package com.ruyicai.util;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BaseAction  extends ActionSupport{ 
    public HttpServletRequest request; 
    public HttpServletResponse response;
    public HttpSession session; 
    public ServletContext application; 
    
    public BaseAction() {
    	this.request = ServletActionContext.getRequest(); 
    	this.response = ServletActionContext.getResponse(); 
        this.session = this.request.getSession(true); 
        this.application = ServletActionContext.getServletContext(); 
        this.response.setCharacterEncoding("text/html; charset=utf-8");
	}
	/**
	 * 获取本地IP
	 * 
	 * @return 本地IP
	 */
	public String getLocalIp() {
		return request.getRemoteAddr();
	}
}
