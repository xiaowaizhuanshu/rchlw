package com.ruyicai.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.log4j.Logger;

/**
 * Http请求的工具类
 * 
 * @author Administrator
 * 
 */
public class HttpUtil {

	private static Logger logger = Logger.getLogger(HttpUtil.class);

	/**
	 * get请求
	 * 
	 * @param urlStr
	 * @param paramStr
	 * @return
	 */
	public static String sendRequestByGet(String url, boolean isPrintLog) {
		String result = "";
		BufferedReader in = null;
		HttpURLConnection connection = null;
		try {
			if (isPrintLog) {
				logger.info("get请求参数url:" + url);
			}
			URL paostUrl = new URL(url);
			//请求配置
			connection = (HttpURLConnection) paostUrl.openConnection();
			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			connection.setRequestMethod("GET");
			connection.setDoOutput(true);
			connection.setDoInput(true);
			connection.setUseCaches(false);
			connection.setInstanceFollowRedirects(true);
			connection.setConnectTimeout(30000);
			connection.setReadTimeout(30000);

			in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
			String line = in.readLine();
			while (line != null) {
				result += line;
				line = in.readLine();
			}
		} catch (Exception e) {
			logger.error("get请求发生异常" + ",url=" + url, e);
		} finally {
			try {
				if (in != null) {
					in.close();
				}
				if (connection != null) {
					connection.disconnect();
					connection = null;
				}
			} catch (IOException e) {
				logger.error("error", e);
			}
		}
		return result;
	}

	/**
	 * post请求
	 * 
	 * @param urlStr
	 * @param paramStr
	 * @return
	 */
	public static String sendRequestByPost(String url, String paramStr, boolean isPrintLog) {
		String result = "";
		BufferedReader in = null;
		HttpURLConnection connection = null;
		OutputStream out = null;
		try {
			if (isPrintLog) {
				logger.info("post请求参数url:" + url + ",paramStr:" + paramStr);
			}
			URL paostUrl = new URL(url);
			//参数配置
			connection = (HttpURLConnection) paostUrl.openConnection();
			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			connection.setRequestMethod("POST");
			connection.setDoOutput(true); //http正文内，因此需要设为true, 默认情况下是false
			connection.setDoInput(true); //设置是否从httpUrlConnection读入，默认情况下是true
			connection.setUseCaches(false); //Post 请求不能使用缓存
			connection.setInstanceFollowRedirects(true); //URLConnection.setInstanceFollowRedirects是成员函数，仅作用于当前函数
			connection.setConnectTimeout(30000); //设置连接主机超时时间
			connection.setReadTimeout(30000); //设置从主机读取数据超时

			//打开连接
			out = connection.getOutputStream();
			out.write(paramStr.getBytes());
			in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
			String line = in.readLine();
			while (line != null) {
				result += line;
				line = in.readLine();
			}
		} catch (Exception e) {
			logger.error("post请求发生异常" + ",url=" + url + ",paramStr:" + paramStr, e);
		} finally {
			try {
				if (out != null) {
					out.close();
				}
				if (in != null) {
					in.close();
				}
				if (connection != null) {
					connection.disconnect();
				}
			} catch (IOException e) {
				logger.error("error", e);
			}
		}
		return result;
	}

}
