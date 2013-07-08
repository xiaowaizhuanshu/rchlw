package com.jrt.invokeLot.service;

import net.sf.json.JSONObject;

import com.jrt.invokeLot.util.JSONReslutUtil;

public class JSonResultService {
	/**
	 * 
	 * @Title: bettingSelect
	 * @Description: 投注查询的方法
	 * @param paras
	 *            传入jrtLot的条件
	 * @param where
	 *            按条件查询
	 * @param sessionid
	 *            用户登录的session
	 * @param action调用jrtLot的Action类名
	 * @param method方法名
	 * @return:JSONObject json对象
	 * {error_code:"xxxxxx",pageCount:"页数",
	 * pageSize:"每页显示记录数" ,value:"返回的Json对象或Json数组"}
	 * @throws Exception
	 * @exception:
	 * 
	 */
	public static JSONObject getAllJSonReuslt(JSONObject paras, JSONObject where,
			String sessionid, int pageSize, String action, String method)
			throws Exception {
		JSONObject obj = new JSONObject();

		// 调用jrtLot返回查询结果
		String re = JSONReslutUtil.getSelectJSONArray(paras, where, sessionid,
				action, method);
		obj.put("error_code", "000000");
		obj.put("value", re);
		
		//为保证接口通用性 先pageCount和pageSize先返回0
		obj.put("pageCount", "0");
		obj.put("pageSize", "0");
		return obj;
	}

	
	/**
	 * 
	 * @Title:  getHeMaiResult
	 * @Description: 调用jrtLot合买返回
	 * @param: parasName jrtLot要传的名称
	 * @param: paras请求的参数
	 * @param: sessionid 用户登录的id
	 * @param: action jrtLot的action的名称
	 * @param: method jrtLot的方法名称
	 * @return:   JSONObject
	 * @throws JSONException 
	 * @exception:
	 */
	public static JSONObject getHeMaiResult(JSONObject paras,
			String parasName,String sessionid,int pageSize,String action,String method) throws Exception{
		JSONObject obj = new JSONObject();

		// 调用jrtLot返回查询结果
		String re = JSONReslutUtil.getHemaiJSONArray(paras, parasName, sessionid, action, method);
		
		obj.put("error_code", "000000");
		obj.put("value", re);
		
		//为保证接口通用性 先pageCount和pageSize先返回0
		obj.put("pageCount", "0");
		obj.put("pageSize", "0");
		
		return obj;
	}
}
