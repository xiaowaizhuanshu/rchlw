package com.ruyicai.web.action;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.log4j.Logger;

public class Http {
	private static Logger logger=Logger.getLogger(Http.class);
	public static String post(String url, String param) throws IOException {
        try{
        	URL reqUrl = new URL(url);
    		final HttpURLConnection connection = (HttpURLConnection) reqUrl
    				.openConnection();
    		connection.setDoOutput(true);
    		connection.setRequestMethod("POST");
    		connection.setConnectTimeout(300 * 1000);
    		connection.setReadTimeout(300 * 1000);
    		OutputStreamWriter reqOut = null;
    		if (param != null) {
    			reqOut = new OutputStreamWriter(connection.getOutputStream());
    			reqOut.write(param);
    			reqOut.flush();
    		}
    		int charCount = -1;
    		InputStream in = connection.getInputStream();
    		BufferedReader br = new BufferedReader(new InputStreamReader(in, "UTF-8"));
    		StringBuffer responseMessage = new StringBuffer();
    		while ((charCount = br.read()) != -1) {
    			responseMessage.append((char) charCount);
    		}
    		in.close();
    		if (reqOut != null)
    			reqOut.close();
    		return responseMessage.toString();
        }catch(Exception e){
        	e.printStackTrace();
        	logger.error("http请求出错，错误原因是：", e);
        	return null;
        }
		
	}
	

	public static String get(String url, String param) throws IOException {
        try{
        	logger.info("QQ quickly login url is:"+ url);
        	logger.info("QQ login param is"+param);
        	URL reqUrl = new URL(url);
    		final HttpURLConnection connection = (HttpURLConnection) reqUrl
    				.openConnection();
    		connection.setDoOutput(true);
    		connection.setRequestMethod("GET");
    		connection.setConnectTimeout(300 * 1000);
    		connection.setReadTimeout(300 * 1000);
    		OutputStreamWriter reqOut = null;
    		if (param != null) {
    			reqOut = new OutputStreamWriter(connection.getOutputStream());
    			reqOut.write(param);
    			reqOut.flush();
    		}
    		int charCount = -1;
    		InputStream in = connection.getInputStream();
    		BufferedReader br = new BufferedReader(new InputStreamReader(in, "UTF-8"));
    		StringBuffer responseMessage = new StringBuffer();
    		while ((charCount = br.read()) != -1) {
    			responseMessage.append((char) charCount);
    		}
    		in.close();
    		logger.info("QQ return message is"+responseMessage.toString());
    		if (reqOut != null)
    			reqOut.close();
    		return responseMessage.toString();
        }catch(Exception e){
        	e.printStackTrace();
        	logger.error("http请求出错，错误原因是：", e);
        	return null;
        }
		
	}
}
