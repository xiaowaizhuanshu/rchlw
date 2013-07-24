package com.boyacai.common.util;

import java.util.HashMap;
import java.util.Map;
import java.util.ResourceBundle;

import org.apache.log4j.Logger;

public class AppAddr {

	public static final String PATH_USERS = "users";
	public static final String PATH_RCHLW = "rchlw";
	public static final String PATH_WAP = "wap";

	private static Logger log = Logger.getLogger(AppAddr.class);

	private static JsonBinder binder = JsonBinder.buildNonDefaultBinder();
	private static Map<String, String> modules = null;

	private AppAddr() {
		super();
	}

	@SuppressWarnings("unchecked")
	public static String getModulePath(String moduleName) {
		if (modules == null) {
			synchronized (AppAddr.class) {
				if (modules == null) {
					ResourceBundle rb = ResourceBundle.getBundle("boyacai");
					String appAddrJSON = rb.getString("appAddr");
					log.info("加载各应用模块服务地址：" + appAddrJSON);
					modules = binder.fromJson(appAddrJSON, HashMap.class);
				}
			}
		}
		return modules.get(moduleName);
	}

	public static String getUsersPath() {
		return getModulePath(PATH_USERS);
	}

	public static String getRchlwPath() {
		return getModulePath(PATH_RCHLW);
	}

	public static String getWapPath() {
		return getModulePath(PATH_WAP);
	}
}
