package com.ruyicai.web.filter;

import java.io.IOException;
import java.util.Map;
import java.util.Set;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.ruyicai.util.ResourceBundleUtil;

public class ChlwFilter implements Filter {

	private Logger logger = Logger.getLogger(ChlwFilter.class);
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
		HttpSession session = req.getSession();
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		//从session中获取渠道号和CHANNEL
		String angecyNo = (String)session.getAttribute("agencyNo");
		String CHANNEL = (String)session.getAttribute("CHANNEL");
		
		if(angecyNo==null || CHANNEL==null){
		
			//得到当前域名
			String str = request.getServerName();
			//调用读取配置文件地址读取内容
			Map<String, String> mapAngecyNo = ResourceBundleUtil.mapAngecyNo;//渠道号
			Set<Map.Entry<String, String>> setAngecyNo = mapAngecyNo.entrySet();
			Map<String, String> mapChannelId = ResourceBundleUtil.mapChannelId;//channelID
			Set<Map.Entry<String, String>> setChannel = mapChannelId.entrySet();
			
			Set<String> keySet = mapAngecyNo.keySet();//获取所有网站渠道号
			
			//设置不同网站的渠道号码和channel,判断两个map中是否有相同的key
			for (String key : keySet) {
				if (mapChannelId.containsKey(key)) {
					for (Map.Entry<String, String> entry : setAngecyNo) {
						if(str.indexOf(entry.getKey())>-1){
							//设置渠道号	
							session.setAttribute("agencyNo", entry.getValue());
						}
					}
					for (Map.Entry<String, String> entry : setChannel) {
						if(str.indexOf(entry.getKey())>-1){
							//设置channel	
							session.setAttribute("CHANNEL", entry.getValue());
						}
					}
				}
			}
		}
		chain.doFilter(req, res);
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		
		this.ftConfig = config;
	}

}
