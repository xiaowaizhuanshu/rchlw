package com.ruyicai.util;



import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.invokeLot.util.LotErrorCode;

public class LogListener {
	private static Logger logger = Logger.getLogger("JsonError");
	
	public final static String JSON_TYPE_OBJ = "obj";
	public final static String JSON_TYPE_ARRAY = "array";
	public final static String JSON_TYPE_ARRAY_IN_OBJ = "array_in_obj";
	public final static String JSON_TYPE_OBJ_IN_OBJ = "obj_in_obj";
	/**
	 * 
	 * @param description 对象描述
	 * @param json 要输出的JSON对象
	 * @param jsonType 要输出的JSON的对象类型
	 * @param type 输出的日志类型 分为 info error
	 * @param function_description 输出日志的类中的方法的完整地址  包名.类名.方法名
	 */
	public static void utilLog(String description, String json,String jsonType, String type , String function_description) {
		
		
		json = json==null?"":json;
		if(json.equals("")){//如果json对象不存在，则不作任何输出操作
			return;
		}
		jsonType = jsonType == null ? "":jsonType;
		if(jsonType.equals("")){
			if(json.indexOf("\"value\":[{")>-1){
				jsonType = JSON_TYPE_ARRAY_IN_OBJ;
			}else if(json.indexOf("\"value\":{")>-1){
				jsonType = JSON_TYPE_OBJ_IN_OBJ;
			}else if(json.indexOf("[{")>-1){
				jsonType = JSON_TYPE_ARRAY;
			}else{
				jsonType = JSON_TYPE_OBJ;
			}
		}
		if(jsonType.equals(JSON_TYPE_OBJ)){
			//jsonObject类型处理
			logPrintObj(description, json,type,function_description);
		}else if(jsonType.equals(JSON_TYPE_ARRAY)){
			//jsonArray类型处理
			logPrintArray(description, json,type ,function_description );
		}else if(jsonType.equals(JSON_TYPE_ARRAY_IN_OBJ)){
			//jsonObject中的value为array类型处理
			logPrintArrayInObj(description, json,type ,function_description);
		}else if(jsonType.equals(JSON_TYPE_OBJ_IN_OBJ)){
			//jsonObject中的含有obj类型处理
			logPrintObjInObj(description, json,type ,function_description);
		}
		
		
		
		
	}
	//json对象里面包含json对象
	private static void logPrintObjInObj(String description, String json,
			String type, String function_description) {
		JSONObject jsonObj = JSONObject.fromObject(json);
		if(jsonObj.containsKey("value")){
			JSONObject jsons = jsonObj.getJSONObject("value");
			String errorcode = String.valueOf((jsons.get("error_code")==null?jsons.get("errorCode"):jsons.get("error_code")));
				if(errorcode==null||errorcode.equals(LotErrorCode.NEW_OK)||errorcode.equals(LotErrorCode.NBOK)||errorcode.equals(LotErrorCode.OK)){
					logger.debug(">>>"+function_description + " " + description + ":" + jsons.toString());
								return;
								
				}else{
					if(type==null||type.equals("info")){
						logger.info(">>>"+function_description + " " + description + ":" + jsons.toString());
					}else if(type.equals("error")){
						logger.error(">>>"+function_description + " " + description + ":" + jsons.toString());
					}
						
				}	
			
		}else{
			return;
		}
		
		
	}
	//输出ArrayInObj类型的对象信息
	private static void logPrintArrayInObj(String description, String json,	String type, String function_description) {
		JSONObject jsonObj = JSONObject.fromObject(json);
		//判断jsonObj 是否为空
		if(jsonObj.isNullObject()){return;}
		
		JSONArray jsonArr = jsonObj.get("value")==null?null:jsonObj.getJSONArray("value");
		
		if(jsonArr==null||jsonArr.size()==0){return;}
		//循环遍历jsonArr如果需要做日志则做相应的输出
		String error_code = String.valueOf(jsonArr.getJSONObject(0).get("error_code")) ;
		String errorCode = String.valueOf( jsonArr.getJSONObject(0).get("errorCode"));
		String errorcode = null;
		if(error_code!=null){
			errorcode="error_code";
		}
		if(errorCode!=null){
			errorcode="errorCode";
		}
		if(jsonArr.getJSONObject(0).get(errorcode)!=null) {
			for(int i = 0 ; i < jsonArr.size() ; i ++){
				if( jsonArr.getJSONObject(i).getString(errorcode).equals(LotErrorCode.NEW_OK)||
					jsonArr.getJSONObject(i).getString(errorcode).equals(LotErrorCode.NBOK)||
					jsonArr.getJSONObject(i).getString(errorcode).equals(LotErrorCode.OK)){
					logger.debug(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
					continue;
				}else{
					if(type==null||type.equals("info")){
						logger.info(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
					}else if(type.equals("error")){
						logger.error(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
					}else{
						logger.debug(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
						return;
					}
				}
			}
		}else{
			//如果jsonArr返回码为空或者不需要做日志输出则返回
			String errorcodes = String.valueOf((jsonObj.get("error_code")==null?jsonObj.get("errorCode"):jsonObj.get("error_code")));
			
			if(errorcodes==null||errorcodes.equals(LotErrorCode.NEW_OK)||errorcodes.equals(LotErrorCode.NBOK)||errorcodes.equals(LotErrorCode.OK)){
				return;
				
			}else{
				//循环遍历 jsonArr 根据对应的类型进行输出
				for(int i = 0 ; i < jsonArr.size() ; i ++){
					if(type==null||type.equals("info")){
						logger.info(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
					}else if(type.equals("error")){
						logger.error(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
					}else{
						logger.debug(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
						return;
					}
				}
			}
			
		}
		
		
	}
	//输出Array类型的对象信息
	private static void logPrintArray(String description, String json,	String type, String function_description) {
		JSONArray jsonArr = json==null?new JSONArray():JSONArray.fromObject(json);
		for(int i = 0 ; i < jsonArr.size() ; i ++){
			String errorcode = String.valueOf( (jsonArr.getJSONObject(i).get("error_code")==null?jsonArr.getJSONObject(i).get("errorCode"):jsonArr.getJSONObject(i).get("error_code")));
			
			if( errorcode==null||errorcode.equals(LotErrorCode.NEW_OK)||errorcode.equals(LotErrorCode.NBOK)||errorcode.equals(LotErrorCode.OK)){
				logger.debug(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
				continue;
				
			}else{
				if(type==null||type.equals("info")){
					logger.info(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
				}else if(type.equals("error")){
					logger.error(">>>"+function_description + " " + description + ":" + jsonArr.getJSONObject(i).toString());
				}else{
					return;
				}
			}
		}
		
		
	}
	//输出Obj类型的对象信息
	private static void logPrintObj(String description, String json,String type, String function_description) {
		JSONObject jsonObj = JSONObject.fromObject(json);
		String errorcode =String.valueOf(jsonObj.get("error_code")==null?jsonObj.get("errorCode"):jsonObj.get("error_code"));
		
		if(errorcode==null||errorcode.equals(LotErrorCode.NEW_OK)||errorcode.equals(LotErrorCode.NBOK)||errorcode.equals(LotErrorCode.OK)){
			logger.debug(">>>"+function_description + " " + description + ":" + json.toString());
			return;
			
		}else{
			if(type==null||type.equals("info")){
				logger.info(">>>"+function_description + " " + description + ":" + json.toString());
			}else if(type.equals("error")){
				logger.error(">>>"+function_description + " " + description + ":" + json.toString());
			}else{
				return;
			}
		}
		
	}


	// 测试代码
	public static void main(String[] args) {

		String str ="";
			//"{\"error_code\":\"000001\",\"value\":[{\"fjs\":\"25\"},{\"fjs\":\"01\"}]}"; 
		//"{\"error_code\":\"0001\",\"sessionid\":\"8EAE4E68E4333FEABBC856120A95300B\",\"cardId\":\"111111111111111111\"}";
		str = "[{\"fjs\":\"25\"},{\"error_code\":\"0020\",\"fjs\":\"01\"},{\"error_code\":\"0300\"}]";
		//"{\"error_code\":\"0001\",\"sessionid\":\"8EAE4E68E4333FEABBC856120A95300B\",\"cardId\":\"111111111111111111\"}";
		logger.info("--------------1-----------------");
		utilLog("错误描述",str,null,"info" , "com.ruyicai.util.LogListener.main()");
		logger.info("--------------1end-----------------");
		str = "{\"error_code\":\"0001\",\"sessionid\":\"8EAE4E68E4333FEABBC856120A95300B\",\"cardId\":\"111111111111111111\"}";
		
		utilLog("错误描述",str,null,"info" , "com.ruyicai.util.LogListener.main()");
		str = "{\"error_code\":\"000001\",\"value\":[{\"fjs\":\"25\"},{\"fjs\":\"01\"}]}";
		
		utilLog("错误描述",str,null,"info" , "com.ruyicai.util.LogListener.main()");
		
		
		str = "{\"error_code\":\"000000\",\"value\":{\"error_code\":\"000001\",\"fjs\":\"25\"}}";
		
		utilLog("错误描述",str,null,"info" , "com.ruyicai.util.LogListener.main()");
	}

}
