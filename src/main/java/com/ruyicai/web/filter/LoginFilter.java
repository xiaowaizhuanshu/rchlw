package com.ruyicai.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.invokeLot.util.JSONReslutUtil;
import com.ruyicai.util.ResourceBundleUtil;

public class LoginFilter implements Filter {

	private Logger logger = Logger.getLogger(LoginFilter.class);
	protected FilterConfig ftConfig;

	@Override
	public void destroy() {
		this.ftConfig = null;
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		// 从cookie中得到用户信息
		JSONObject userNo =  JSONReslutUtil.getUserNo(req);
		logger.info("loginFilter;userNo:" + userNo);
		if (req.getServletPath().indexOf("user_top.jsp")==-1&&userNo!=null&&(!userNo.getString("errorCode").equals("0"))) {
			res.sendRedirect(ResourceBundleUtil.LOGIN);// 如果没有登录，把视图派发到登录页
			return;
		} else {
			chain.doFilter(req, res);
		}
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		this.ftConfig = config;
	}

}
