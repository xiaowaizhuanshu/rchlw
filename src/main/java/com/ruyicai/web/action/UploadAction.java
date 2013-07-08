package com.ruyicai.web.action;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;

import com.opensymphony.xwork2.ActionContext;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.ResourceBundleUtil;

public class UploadAction extends BaseAction {
	private static final long serialVersionUID = 1L; 
	public static String TXT=".txt";
	public static String SIGN="^";
	private File upload;
	private String uploadFileName;
	private static Logger logger = Logger.getLogger(UploadAction.class);
	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	/**
	 * 上传文件方法
	 * 
	 * @return 页面跳转
	 * @throws IOException
	 *             文件异常
	 */
	public void doUploadFile() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		JSONObject js = new JSONObject();
		Map<String, Object> map = new HashMap<String, Object>();
		String type = request.getParameter("type");
		// 上传路径
		String realpath = ResourceBundleUtil.file_upload;///usr/local/WEB/ruyicai/
		// 展示路径
		String path = "/upload/";
		// 获取当前毫秒数作为文件名
		long curr = System.currentTimeMillis();
		uploadFileName = String.valueOf(curr)+type+TXT;
		// 得到当前日期作为本日上传的文件夹名
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		Date date = new Date();
		String currTime = sdf.format(date);
		path = path + currTime;
		realpath = realpath+"upload" +File.separator+ currTime + File.separator;
		List<String> ls = new ArrayList<String>();
		try {
			//FileReader read = new FileReader(upload.getPath());
			//BufferedReader br = new BufferedReader(read);
			FileInputStream fis=new FileInputStream(upload.getPath());
			String fileEncode=CommonUtil.getFileEnCode(upload.getPath());
			if("".equals(fileEncode)){
				fileEncode="UTF-8";
			}
			BufferedReader br = new BufferedReader(new InputStreamReader(fis,fileEncode));
			logger.info("彩种单式上传玩法：字符集="+fileEncode);
			String row;
			while ((row = br.readLine()) != null) {
				if (row.equals("") || row.replace(" ", "").equals("")) {
				} else {
					ls.add(row.trim());
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		Boolean flag = true;
		if (type.equals("ssq")) {
			map = check_ssq(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("3Dzx")) {
			map = check_zxs(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("3Dzs")) {
			map = check_zs(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("3Dzl")) {
			map = check_zl(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("dlt")) {
			map = check_dlt(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("plszx")) {
			map = check_zxs(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("plszs")) {
			map = check_zs(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("plszl")) {
			map = check_zl(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("qxc")) {
			map = check_qxc(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("qlc")) {
			map = check_qlc(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("plw")) {
			map = check_plw(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("sc")) {
			map = check_sc(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("lcb")) {
			map = check_lcb(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("rjc")) {
			map = check_rjc(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("sfc")) {
			map = check_sfc(ls);
			flag = (Boolean) map.get("flag");
		}
		if (type.equals("eexw")) {
			map = check_eexw(ls);
			flag = (Boolean) map.get("flag");
		}
		if(type.equals("jc")){
			map = check_jc(ls);
			flag = (Boolean)map.get("flag");
		}
		if(type.equals("jc_zjq")){
			map = check_jc_zjq(ls);
			flag = (Boolean)map.get("flag");
		}
		if(type.equals("jc_bf")){
			map = check_jc_bf(ls);
			flag = (Boolean)map.get("flag");
		}
		logger.info("彩种单式上传玩法：上传内容验证结果="+map.get("errorValue"));
		File savefile = new File(new File(realpath), uploadFileName);
		if (!savefile.getParentFile().exists()){
			savefile.getParentFile().mkdirs();
		}
		FileUtils.copyFile(upload, savefile);
		List<Integer> errorValue = (List<Integer>) map.get("errorValue");
		if (errorValue != null) {
			js.put("errorNum", errorValue.size());
			int rmb = (ls.size() - errorValue.size()) * 2;
			js.put("okNum", ls.size() - errorValue.size());
			js.put("rmb", rmb);
			String errorCode = "";
			for (int i = 0; i < errorValue.size(); i++) {
				if (i == errorValue.size() - 1) {
					errorCode = errorCode + errorValue.get(i);
				} else {
					errorCode = errorCode + errorValue.get(i) +SIGN;
				}
			}
			js.put("errorCode", errorCode);
			js.put("wronginfo",map.get("wronginfo"));
		} else {
			int rmb = ls.size() * 2;
			js.put("okNum", ls.size());
			js.put("rmb", rmb);
			js.put("errorCode", "flag");
		}
		js.put("bool", flag);
		//取消路径
		js.put("real", (realpath + uploadFileName).replace("\\", "-").replace("/", "-"));
		//删除路径
		js.put("realpath", realpath + uploadFileName);
		//展示路径
		js.put("uploadFileName", path+"/"+uploadFileName);
		ActionContext.getContext().put("upload", "上传成功");
		request.setAttribute("msg", "上传成功");
		response.setCharacterEncoding("utf-8");
		response.getWriter().print(js);
	}

	/*
	 * 验证排列三和3D组三的格式
	 */
	private Map<String, Object> check_zs(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0-9][,]){2}([0-9])$";
			// 验证格式二
			boolean reTwo = true; 
			String regex2="^[0-9]{3}$";
			for(int i=0;i<ls.size();i++){
				boolean bool1=ls.get(i).matches(regex1);
				if(bool1){
					String[] str=ls.get(i).split(",");
					if((str[0].equals(str[1])&&!str[0].equals(str[2]))||(str[0].equals(str[2])&&!str[0].equals(str[1]))||(str[1].equals(str[2])&&!str[0].equals(str[1]))){		
						reOne = true;
					}else{
						reOne=false;
					}
				}else{
					reOne=false;
				}
				boolean bool2=ls.get(i).matches(regex2);
				if(bool2){
					char[] ch=ls.get(i).toCharArray();
					if((ch[0]==ch[1]&&ch[0]!=ch[2])||(ch[1]==ch[2]&&ch[1]!=ch[0])||(ch[0]==ch[2]&&ch[0]!=ch[1])){
						reTwo = true;
					}else{
						reTwo=false;
					}
				}else{
					reTwo=false;
				}
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}

	/*
	 * 验证排列三和3D组六的格式
	 */
	private Map<String, Object> check_zl(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0-9][,]){2}([0-9])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^(?!\\d*(\\d)\\d*\\1)[0-9]{3}$";
			for(int i=0;i<ls.size();i++){
				boolean bool=ls.get(i).matches(regex1);
				if(bool){
					String regex="^(?!\\d*(\\d)\\d*\\1)[0-9]{3}$";
					String str=ls.get(i).replace(",", "");
					reOne=str.matches(regex);
				}else{
					reOne=false;
				}
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}

	/*
	 * 验证排列三和3D直选的格式
	 */
	private Map<String, Object> check_zxs(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0-9][,]){2}([0-9])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0-9]{3}$";
			
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	/*
	 * 验证双色球的格式
	 */
	private Map<String, Object> check_ssq(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^(?!(?:\\d{2},)*(\\d{2})(?:,\\d{2})*,\\1)(?:0[1-9]|[12][0-9]|3[0-3])(?:,(?:0[1-9]|[12][0-9]|3[0-3])){5}[|](0[1-9]|1[0-6])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^(?!(?:\\d{2} )*(\\d{2})(?: \\d{2})* \\1)(?:0[1-9]|[12][0-9]|3[0-3])(?: (?:0[1-9]|[12][0-9]|3[0-3])){5}[ ][+][ ](0[1-9]|1[0-6])$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}		
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	
	/*
	 * 验证七星彩格式
	 */
	private Map<String, Object> check_qxc(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0-9][,]){6}([0-9])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0-9]{7}$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}

	/*
	 * 验证排列五格式
	 */
	private Map<String, Object> check_plw(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0-9][,]){4}([0-9])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0-9]{5}$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	/*
	 * 验证七乐彩格式
	 */
	private Map<String, Object> check_qlc(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^(?!(?:\\d{2},)*(\\d{2})(?:,\\d{2})*,\\1)(?:0[1-9]|[12][0-9]|30)(?:,(?:0[1-9]|[12][0-9]|30)){6}$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^(?!(?:\\d{2} )*(\\d{2})(?: \\d{2})* \\1)(?:0[1-9]|[12][0-9]|30)(?: (?:0[1-9]|[12][0-9]|30)){6}$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	/*
	 * 验证22选5格式
	 */
	private Map<String, Object> check_eexw(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^(0[1-9][,]|1[0-9][,]|2[0-2][,]){4}(0[1-9]|1[0-9]|2[0-2])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^(0[1-9] |1[0-9] |2[0-2] ){4}(0[1-9]|1[0-9]|2[0-2])$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	/*
	 * 验证大乐透的格式
	 */
	private Map<String, Object> check_dlt(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^(?!(?:\\d{2},)*(\\d{2})(?:,\\d{2})*,\\1)(?:0[1-9]|[12][0-9]|3[0-5])(?:,(?:0[1-9]|[12][0-9]|3[0-5])){4}[|](0[1-9]|1[0-2])[,](0[1-9]|1[0-2])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^(?!(?:\\d{2} )*(\\d{2})(?: \\d{2})* \\1)(?:0[1-9]|[12][0-9]|3[0-5])(?: (?:0[1-9]|[12][0-9]|3[0-5])){4}[ ][+]([ ](0[1-9]|1[0-2])){2}$";
			for(int i=0;i<ls.size();i++){
				boolean bool1=ls.get(i).matches(regex1);
				if(bool1){
					String str=ls.get(i).substring(ls.get(i).indexOf("|")+1,ls.get(i).length());
					String res[]=str.split(",");
					if(res[0].equals(res[1])){
						reOne=false;
					}else {
						reOne = true;
					}
				}else{
					reOne=false;
				}
				boolean bool2=ls.get(i).matches(regex2);
				if(bool2){
					String str[]=ls.get(i).split(" ");
					if(str[str.length-2].equals(str[str.length-1])){
						reTwo=false;
					}else{
						 reTwo = true;
					}
				}else{
					reTwo=false;
				}
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	
	/**
	 *  验证足彩四场的格式
	 */
	private Map<String, Object> check_sc(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0,1,2,3][,]){7}([0,1,2,3])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0,1,2,3]{8}$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	/**
	 *  验证足彩六场半的格式
	 */
	private Map<String, Object> check_lcb(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0,1,3][,]){11}([0,1,3])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0,1,3]{12}$";
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	
	/**
	 *  验证足彩任九场的格式
	 */
	private Map<String, Object> check_rjc(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0,1,3][,]){8}([0,1,3])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0,1,3]{9}$";
			for(int i=0;i<ls.size();i++){ 
				if(ls.get(i).length()==27){
						String str=ls.get(i);
						if(ls.get(i).replace("#", "").length()==22){
							str=ls.get(i).replace("#", "*");
						}
						if(str.lastIndexOf("*")==26){				
							str=str.replace(",*", "").replace("*,","");
						}else{
							str=str.replace("*,","");
						}
						reOne=str.matches(regex1);
				}else {
					reOne=false;
				}
				if(ls.get(i).length()==14){
					String str=ls.get(i);
					if(ls.get(i).replace("#", "").length()==9){
						str=ls.get(i).replace("#", "*");
					}	
					str=str.replace("*","");
					reTwo=str.matches(regex2);
				}else{
					reTwo=false;
				}
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	/**
	 *  验证足彩胜负彩的格式
	 */
	private Map<String, Object> check_sfc(List<String> ls) {
			Map<String, Object> map = new HashMap<String, Object>();
			List<Integer> errorList = new ArrayList<Integer>();
			
			// 验证格式一
			boolean reOne = true;
			String regex1="^([0,1,3][,]){13}([0,1,3])$";
			// 验证格式二
			boolean reTwo = true;
			String regex2="^[0,1,3]{14}$";
			
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne&&!reTwo){
					errorList.add(i);
				}
			}
			//根据错误的注码得到返回值
			if(errorList.size()==0||errorList==null){
				map.put("flag", true);
				map.put("errorLine", -1);
			}else{
				map.put("flag", false);
				map.put("errorValue", errorList);
			}
			return map;	
		}
	
	/**
	 *  验证竞彩足球--让球胜平负和胜平负的格式判断
	 */
	private Map<String, Object> check_jc(List<String> ls){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Integer> errorList = new ArrayList<Integer>();
		//获取的值是选中的比赛场数
		int saishiNum=Integer.parseInt(request.getParameter("saishiNum"));
		//获取的值是过关数
		int guoguanNum=Integer.parseInt(request.getParameter("guoguanNum"));
		//获取所有比赛的具体信息字符串
		String saishi=request.getParameter("saishi");
		//错误提示信息
		String wronginfo="";
		
		//格式1：{3,3,3,3,3}
		String regex1="^([013][,]){"+(saishiNum-1)+"}[013]";
		//格式2：{33333}
		String regex2="^[013]{"+saishiNum+"}";
		//格式3：{3,*,3,*,3,3,3}
		String regex3="^([013*][,]){"+(saishiNum-1)+"}[013*]$";
		//格式4：{3*33*33}
		String regex4="^[013*]{"+saishiNum+"}$";
		//格式5：{1001→3,1002→0,2005→1}
		String regex5="^([1-7]([0-9]{3})[→][013][,]){"+(guoguanNum-1)+"}[1-7]([0-9]{3})[→][013]$";
		//格式6：{1001:[3]/1006:[0]/2003:[1]}
		String regex6="^([1-7]([0-9]{3})[:][\\[][013][\\]][/]){"+(guoguanNum-1)+"}[1-7]([0-9]{3})[:][\\[][013][\\]]$";
		//格式7：{1001→3}
		String regex7="^([1-7]([0-9]{3})[→][013][,]){1,}[1-7]([0-9]{3})[→][013]$";
		//格式8：{1001:[3]}
		String regex8="^([1-7]([0-9]{3})[:][\\[][013][\\]][/]){1,}[1-7]([0-9]{3})[:][\\[][013][\\]]$";
		
		boolean reOne=true;
		boolean reTwo=true;
		boolean reThree=true;
		boolean reFour=true;
		boolean reFive=true;
		boolean reSix=true;
		boolean reSeven=true;
		boolean reEight=true;
		if(guoguanNum==saishiNum && guoguanNum!=0){
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne && !reTwo){
					wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
					errorList.add(i);
				}
			}
		}else if(guoguanNum<saishiNum && guoguanNum>0){
			for(int i=0;i<ls.size();i++){
				reThree=ls.get(i).matches(regex3);
				reFour=ls.get(i).matches(regex4);
				//判断规则3下：这一行中数字的个数是否等于过关数
				if(reThree){
					String[] str=ls.get(i).split(",");
					int margin=0;
					for(int j=0;j<str.length;j++){
						if(!"*".equals(str[j])){
							margin+=1;
						}
					}
					if(margin!=guoguanNum){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						reThree=false;
					}
				}
				//判断规则4下：这一行中数字的个数是否等于过关数
				if(reFour){
					String[] str=ls.get(i).split("");
					int margin=0;
					for(int j=1;j<str.length;j++){
						if(!"*".equals(str[j])){
							margin+=1;
						}
					}
					if(margin!=guoguanNum){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						reFour=false;
					}
				}
				if(!reThree && !reFour){
					//此判断是在：第一行就完全不符合34规则的情况下
					if("".equals(wronginfo)){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
					}
					errorList.add(i);
				}
			}			
		}else if(saishiNum==0){
			if("".equals(saishi)){
				wronginfo+="目前尚无比赛进行销售，所以无法进行投注！#";
				for(int i=0;i<ls.size();i++){
					errorList.add(i);
				}
			}else{
				for(int i=0;i<ls.size();i++){
					reFive=ls.get(i).matches(regex5);
					reSix=ls.get(i).matches(regex6);
					reSeven=ls.get(i).matches(regex7);
					reEight=ls.get(i).matches(regex8);
					if(!reFive&&!reSix){
						if(reSeven || reEight){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						}else{
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
						}
						errorList.add(i);
					}else{
						boolean flag=true;
						if(reFive){
							String[] str1=saishi.split("\\^");
							String[] str2=ls.get(i).split(",");
							boolean flag2=true;
							//判断场次是否有重复，有重复的为错误行
							for(int j=0;j<str2.length;j++){
								if(str2.length-j-1>1){
									for(int k=(j+1);k<str2.length;k++){
										if(str2[j].substring(0,str2[j].indexOf("→")).equals(str2[k].substring(0,str2[j].indexOf("→")))){
											flag2=false;
											wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
											break;
										}
									}
								}else if((str2.length-j-1)==1){
									if(str2[j].substring(0,str2[j].indexOf("→")).equals(str2[str2.length-1].substring(0,str2[j].indexOf("→")))){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
									}
									break;
								}
								if(!flag2){
									break;
								}
							}
							if(flag2){
								//判断文本中所写的场次，是否真实的存在
								for(int j=0;j<str2.length;j++){
									boolean flag3=false;
									String str3=str2[j].substring(0,str2[j].indexOf("→"));
									for(int k=0;k<str1.length;k++){
										String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
										if(str3.equals(str4)){
											flag3=true;
											break;
										}
									}
									if(!flag3){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有当前并未销售的场次#";
										break;
									}
								}
							}					
							if(flag2){
								flag=false;
							}
						}
						if(reSix){
							String[] str1=saishi.split("\\^");
							String[] str2=ls.get(i).split("\\/");
							boolean flag2=true;
							//判断场次是否有重复，有重复的为错误行
							for(int j=0;j<str2.length;j++){
								if(str2.length-j-1>1){
									for(int k=(j+1);k<str2.length;k++){
										if(str2[j].substring(0,str2[j].indexOf(":")).equals(str2[k].substring(0,str2[j].indexOf(":")))){
											flag2=false;
											wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
											break;
										}
									}
								}else if((str2.length-j-1)==1){
									if(str2[j].substring(0,str2[j].indexOf(":")).equals(str2[str2.length-1].substring(0,str2[j].indexOf(":")))){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
									}
									break;
								}
								if(!flag2){
									break;
								}
							}
							if(flag2){
								//判断文本中所写的场次，是否真实的存在
								for(int j=0;j<str2.length;j++){
									boolean flag3=false;
									String str3=str2[j].substring(0,str2[j].indexOf(":"));
									for(int k=0;k<str1.length;k++){
										String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
										if(str3.equals(str4)){
											flag3=true;
											break;
										}
									}
									if(!flag3){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有当前并未销售的场次#";
										break;
									}
								}
							}						
							if(flag2){
								flag=false;
							}
						}
						if(flag){
							//此判断是在：第一行就完全不符合56规则的情况下
							if("".equals(wronginfo)){
								wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
							}
							errorList.add(i);
						}
					}
				}
			}			
		}
		
		//根据错误的注码得到返回值
		if(errorList.size()==0||errorList==null){
			map.put("flag", true);
			map.put("errorLine", -1);
		}else{
			map.put("flag", false);
			map.put("errorValue", errorList);			
		}
		map.put("wronginfo", wronginfo);
		
		return map;
		
	}
	
	/**
	 *  验证竞彩足球--比分的格式判断
	 */
	private Map<String ,Object> check_jc_bf(List<String> ls){
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Integer> errorList = new ArrayList<Integer>();
		//获取的值是选中的比赛场数
		int saishiNum=Integer.parseInt(request.getParameter("saishiNum"));
		//获取的值是过关数
		int guoguanNum=Integer.parseInt(request.getParameter("guoguanNum"));
		//获取所有比赛的具体信息字符串
		String saishi=request.getParameter("saishi");
		//错误提示信息
		String wronginfo="";
		
		//格式1：{31,12,13}
		String regex1="^((([012345][012345])|([013][A]))[,]){"+(saishiNum-1)+"}(([012345][012345])|([013][A]))$";
		//格式2：{311213}
		String regex2="^(([012345][012345])|([013][A])){"+saishiNum+"}$";
		//格式3：{31,**,12,13}
		String regex3="^((([012345][012345])|([*][*])|([013][A]))[,]){"+(saishiNum-1)+"}(([012345][012345])|([*][*])|([013][A]))$";
		//格式4：{31**1213}
		String regex4="^(([012345][012345])|([*][*])|([013][A])){"+saishiNum+"}$";
		//格式5：{1001→31,1002→12,2005→13}
		String regex5="^([1-7]([0-9]{3})[→](([012345][012345])|([013][A]))[,]){"+(guoguanNum-1)+"}[1-7]([0-9]{3})[→](([012345][012345])|([013][A]))$";
		//格式6：{1001:[31]/1006:[12]/2003:[13]}
		String regex6="^([1-7]([0-9]{3})[:][\\[](([012345][012345])|([013][A]))[\\]][/]){"+(guoguanNum-1)+"}[1-7]([0-9]{3})[:][\\[](([012345][012345])|([013][A]))[\\]]$";
		//格式7：{1001→31}
		String regex7="^([1-7]([0-9]{3})[→](([012345][012345])|([013][A]))[,]){1,}[1-7]([0-9]{3})[→](([012345][012345])|([013][A]))$";
		//格式8：{1001:[31]}
		String regex8="^([1-7]([0-9]{3})[:][\\[](([012345][012345])|([013][A]))[\\]][/]){1,}[1-7]([0-9]{3})[:][\\[](([012345][012345])|([013][A]))[\\]]$";
		
		boolean reOne=true;
		boolean reTwo=true;
		boolean reThree=true;
		boolean reFour=true;
		boolean reFive=true;
		boolean reSix=true;
		boolean reSeven=true;
		boolean reEight=true;
		if(guoguanNum==saishiNum && guoguanNum!=0){
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne && !reTwo){
					wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
					errorList.add(i);
				}else{
					if(reOne){
						String[] str=ls.get(i).split(",");
						if(judgeBf(str)){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中含有不存在的比分#";
							errorList.add(i);
						}
					}else if(reTwo){
						String[] str=ls.get(i).split("");
						if(judgeBf2(str)){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中含有不存在的比分#";
							errorList.add(i);
						}
					}
				}
			}
		}else if(guoguanNum<saishiNum && guoguanNum>0){
			for(int i=0;i<ls.size();i++){
				reThree=ls.get(i).matches(regex3);
				reFour=ls.get(i).matches(regex4);
				//判断规则3下：这一行中数字的个数是否等于过关数
				if(reThree){
					String[] str=ls.get(i).split(",");
					if(judgeBf(str)){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中含有不存在的比分#";
						reThree=false;
					}else{
						int margin=0;
						for(int j=0;j<str.length;j++){
							if(!"**".equals(str[j])){
								margin+=1;
							}
						}
						if(margin!=guoguanNum){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
							reThree=false;
						}
					}					
				}
				//判断规则4下：这一行中数字的个数是否等于过关数
				if(reFour){
					String[] str=ls.get(i).split("");
					if(judgeBf2(str)){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中含有不存在的比分#";
						reFour=false;
					}else{
						int margin=0;
						for(int j=1;j<str.length;j++){
							if((j-1)%2==0){
								if(!"**".equals(str[j]+str[j+1])){
									margin+=1;
								}							
							}							
						}
						if(margin!=guoguanNum){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
							reFour=false;
						}
					}					
				}
				if(!reThree && !reFour){
					//此判断是在：第一行就完全不符合34规则的情况下
					if("".equals(wronginfo)){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
					}
					errorList.add(i);
				}
			}			
		}else if(saishiNum==0){
			if("".equals(saishi)){
				wronginfo+="目前尚无比赛进行销售，所以无法进行投注！#";
				for(int i=0;i<ls.size();i++){
					errorList.add(i);
				}
			}else{
				for(int i=0;i<ls.size();i++){
					reFive=ls.get(i).matches(regex5);
					reSix=ls.get(i).matches(regex6);
					reSeven=ls.get(i).matches(regex7);
					reEight=ls.get(i).matches(regex8);
					if(!reFive&&!reSix){
						if(reSeven || reEight){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						}else{
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
						}
						errorList.add(i);
					}else{
						boolean flag=true;
						if(reFive){
							String[] str1=saishi.split("\\^");
							String[] str2=ls.get(i).split(",");
							boolean flag2=true;
							//判断场次是否有重复，有重复的为错误行
							for(int j=0;j<str2.length;j++){
								if(str2.length-j-1>1){
									for(int k=(j+1);k<str2.length;k++){
										if(str2[j].substring(0,str2[j].indexOf("→")).equals(str2[k].substring(0,str2[j].indexOf("→")))){
											flag2=false;
											wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
											break;
										}
									}
								}else if((str2.length-j-1)==1){
									if(str2[j].substring(0,str2[j].indexOf("→")).equals(str2[str2.length-1].substring(0,str2[j].indexOf("→")))){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
									}
									break;
								}
								if(!flag2){
									break;
								}
							}
							if(flag2){
								//判断文本中所写的场次，是否为当前销售中的场次
								for(int j=0;j<str2.length;j++){
									boolean flag3=false;
									String str3=str2[j].substring(0,str2[j].indexOf("→"));
									for(int k=0;k<str1.length;k++){
										String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
										if(str3.equals(str4)){
											flag3=true;
											break;
										}
									}
									if(!flag3){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有当前并未销售的场次#";
										break;
									}
								}
							}					
							if(flag2){
								flag=false;
							}else{
								//进行是否含有不存在比分的判断
								String[] newstr2=new String[str2.length];
								for(int k=0;k<str2.length;k++){
									newstr2[k]=str2[k].substring(str2[k].indexOf("→")+1);
								}
								if(judgeBf(newstr2)){
									flag=false;
									wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中含有不存在的比分#";
								}
							}
						}
						if(reSix){
							String[] str1=saishi.split("\\^");
							String[] str2=ls.get(i).split("\\/");
							boolean flag2=true;
							//判断场次是否有重复，有重复的为错误行
							for(int j=0;j<str2.length;j++){
								if(str2.length-j-1>1){
									for(int k=(j+1);k<str2.length;k++){
										if(str2[j].substring(0,str2[j].indexOf(":")).equals(str2[k].substring(0,str2[j].indexOf(":")))){
											flag2=false;
											wronginfo+="第"+(i+1)+"行方案["+ls.get(i)+"]中带有重复的场次#";
											break;
										}
									}
								}else if((str2.length-j-1)==1){
									if(str2[j].substring(0,str2[j].indexOf(":")).equals(str2[str2.length-1].substring(0,str2[j].indexOf(":")))){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
									}
									break;
								}
								if(!flag2){
									break;
								}
							}
							if(flag2){
								//判断文本中所写的场次，是否为当前销售中的场次
								for(int j=0;j<str2.length;j++){
									boolean flag3=false;
									String str3=str2[j].substring(0,str2[j].indexOf(":"));
									for(int k=0;k<str1.length;k++){
										String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
										if(str3.equals(str4)){
											flag3=true;
											break;
										}
									}
									if(!flag3){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有当前并未销售的场次#";
										break; 
									}
								}
							}						
							if(flag2){
								flag=false;
							}else{
								//进行是否含有不存在比分的判断
								String[] newstr2=new String[str2.length];
								for(int k=0;k<str2.length;k++){
									newstr2[k]=str2[k].substring(str2[k].indexOf("[")+1,str2[k].indexOf("]"));
								}
								if(judgeBf(newstr2)){
									flag=false;
									wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中含有不存在的比分#";
								}
							}
						}
						if(flag){
							//此判断是在：第一行就完全不符合56规则的情况下
							if("".equals(wronginfo)){
								wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
							}
							errorList.add(i);
						}
					}
				}
			}
		}
			
		//根据错误的注码得到返回值
		if(errorList.size()==0||errorList==null){
			map.put("flag", true);
			map.put("errorLine", -1);			
		}else{
			map.put("flag", false);
			map.put("errorValue", errorList);			
		}
		map.put("wronginfo", wronginfo);
		
		return map;
	}
	
	/**
	 *  验证竞彩足球--总进球的格式判断
	 */
	private Map<String, Object> check_jc_zjq(List<String> ls) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		List<Integer> errorList = new ArrayList<Integer>();
		//获取的值是选中的比赛场数
		int saishiNum=Integer.parseInt(request.getParameter("saishiNum"));
		//获取的值是过关数
		int guoguanNum=Integer.parseInt(request.getParameter("guoguanNum"));
		//获取所有比赛的具体信息字符串
		String saishi=request.getParameter("saishi");
		//错误提示信息
		String wronginfo="";
		
		//格式1：{3,3,3,3,3}
		String regex1="^([01234567][,]){"+(saishiNum-1)+"}[01234567]";
		//格式2：{33333}
		String regex2="^[01234567]{"+saishiNum+"}";
		//格式3：{3,*,3,*,3,3,3}
		String regex3="^([01234567*][,]){"+(saishiNum-1)+"}[01234567*]$";
		//格式4：{3*33*33}
		String regex4="^[01234567*]{"+saishiNum+"}$";
		//格式5：{1001→3,1002→0,2005→1}
		String regex5="^([1-7]([0-9]{3})[→][01234567][,]){"+(guoguanNum-1)+"}[1-7]([0-9]{3})[→][01234567]$";
		//格式6：{1001:[3]/1006:[0]/2003:[1]}
		String regex6="^([1-7]([0-9]{3})[:][\\[][01234567][\\]][/]){"+(guoguanNum-1)+"}[1-7]([0-9]{3})[:][\\[][01234567][\\]]$";
		//格式7：{1001→3}
		String regex7="^([1-7]([0-9]{3})[→][01234567][,]){1,}[1-7]([0-9]{3})[→][01234567]$";
		//格式8：{1001:[3]}
		String regex8="^([1-7]([0-9]{3})[:][\\[][01234567][\\]][/]){1,}[1-7]([0-9]{3})[:][\\[][01234567][\\]]$";		
		
		boolean reOne=true;
		boolean reTwo=true;
		boolean reThree=true;
		boolean reFour=true;
		boolean reFive=true;
		boolean reSix=true;
		boolean reSeven=true;
		boolean reEight=true;
		if(guoguanNum==saishiNum && guoguanNum!=0){
			for(int i=0;i<ls.size();i++){
				reOne=ls.get(i).matches(regex1);
				reTwo=ls.get(i).matches(regex2);
				if(!reOne && !reTwo){
					wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
					errorList.add(i);
				}
			}
		}else if(guoguanNum<saishiNum && guoguanNum>0){
			for(int i=0;i<ls.size();i++){
				reThree=ls.get(i).matches(regex3);
				reFour=ls.get(i).matches(regex4);
				//判断规则3下：这一行中数字的个数是否等于过关数
				if(reThree){
					String[] str=ls.get(i).split(",");
					int margin=0;
					for(int j=0;j<str.length;j++){
						if(!"*".equals(str[j])){
							margin+=1;
						}
					}
					if(margin!=guoguanNum){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						reThree=false;
					}
				}
				//判断规则4下：这一行中数字的个数是否等于过关数
				if(reFour){
					String[] str=ls.get(i).split("");
					int margin=0;
					for(int j=1;j<str.length;j++){
						if(!"*".equals(str[j])){
							margin+=1;
						}
					}
					if(margin!=guoguanNum){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						reFour=false;
					}
				}
				if(!reThree && !reFour){
					//此判断是在：第一行就完全不符合34规则的情况下
					if("".equals(wronginfo)){
						wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
					}
					errorList.add(i);
				}
			}			
		}else if(saishiNum==0){
			if("".equals(saishi)){
				wronginfo+="目前尚无比赛进行销售，所以无法进行投注！#";
				for(int i=0;i<ls.size();i++){
					errorList.add(i);
				}
			}else{
				for(int i=0;i<ls.size();i++){
					reFive=ls.get(i).matches(regex5);
					reSix=ls.get(i).matches(regex6);
					reSeven=ls.get(i).matches(regex7);
					reEight=ls.get(i).matches(regex8);
					if(!reFive&&!reSix){
						if(reSeven || reEight){
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 不是"+guoguanNum+"串1方案#";
						}else{
							wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
						}
						errorList.add(i);
					}else{
						boolean flag=true;
						if(reFive){
							String[] str1=saishi.split("\\^");
							String[] str2=ls.get(i).split(",");
							boolean flag2=true;
							//判断场次是否有重复，有重复的为错误行
							for(int j=0;j<str2.length;j++){
								if(str2.length-j-1>1){
									for(int k=(j+1);k<str2.length;k++){
										if(str2[j].substring(0,str2[j].indexOf("→")).equals(str2[k].substring(0,str2[j].indexOf("→")))){
											flag2=false;
											wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
											break;
										}
									}
								}else if((str2.length-j-1)==1){
									if(str2[j].substring(0,str2[j].indexOf("→")).equals(str2[str2.length-1].substring(0,str2[j].indexOf("→")))){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
									}
									break;
								}
								if(!flag2){
									break;
								}
							}
							if(flag2){
								//判断文本中所写的场次，是否为当前销售中的场次
								for(int j=0;j<str2.length;j++){
									boolean flag3=false;
									String str3=str2[j].substring(0,str2[j].indexOf("→"));
									for(int k=0;k<str1.length;k++){
										String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
										if(str3.equals(str4)){
											flag3=true;
											break;
										}
									}
									if(!flag3){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有当前并未销售的场次#";
										break;
									}
								}
							}					
							if(flag2){
								flag=false;
							}
						}
						if(reSix){
							String[] str1=saishi.split("\\^");
							String[] str2=ls.get(i).split("\\/");
							boolean flag2=true;
							//判断场次是否有重复，有重复的为错误行
							for(int j=0;j<str2.length;j++){
								if(str2.length-j-1>1){
									for(int k=(j+1);k<str2.length;k++){
										if(str2[j].substring(0,str2[j].indexOf(":")).equals(str2[k].substring(0,str2[j].indexOf(":")))){
											flag2=false;
											wronginfo+="第"+(i+1)+"行方案["+ls.get(i)+"]中带有重复的场次#";
											break;
										}
									}
								}else if((str2.length-j-1)==1){
									if(str2[j].substring(0,str2[j].indexOf(":")).equals(str2[str2.length-1].substring(0,str2[j].indexOf(":")))){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有重复的场次#";
									}
									break;
								}
								if(!flag2){
									break;
								}
							}
							if(flag2){
								//判断文本中所写的场次，是否为当前销售中的场次
								for(int j=0;j<str2.length;j++){
									boolean flag3=false;
									String str3=str2[j].substring(0,str2[j].indexOf(":"));
									for(int k=0;k<str1.length;k++){
										String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
										if(str3.equals(str4)){
											flag3=true;
											break;
										}
									}
									if(!flag3){
										flag2=false;
										wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 中带有当前并未销售的场次#";
										break; 
									}
								}
							}						
							if(flag2){
								flag=false;
							}
						}
						if(flag){
							//此判断是在：第一行就完全不符合56规则的情况下
							if("".equals(wronginfo)){
								wronginfo+="第"+(i+1)+"行方案 ["+ls.get(i)+"] 格式有问题#";
							}
							errorList.add(i);
						}
					}
				}
			}
		}
			
		//根据错误的注码得到返回值
		if(errorList.size()==0||errorList==null){
			map.put("flag", true);
			map.put("errorLine", -1);			
		}else{
			map.put("flag", false);
			map.put("errorValue", errorList);			
		}
		map.put("wronginfo", wronginfo);
		
		return map;
	}
	
	/**
	 * 对竞彩足球--比分中的投注文本内容进行查看，是否包含有不存在的比分【逗号分隔的】
	 */
	public boolean judgeBf(String[] str){
		boolean flag=false;
		String str3="34,35,43,44,45,53,54,55";
		for(int i=0;i<str.length;i++){
			if(str3.contains(str[i])){
				flag=true;
				break;
			}
		}		
		return flag;
	}
	
	/**
	 * 对竞彩足球--比分中的投注文本内容进行查看，是否包含有不存在的比分【无空隙分隔的】
	 */
	public boolean judgeBf2(String[] str){
		boolean flag=false;
		String str3="34,35,43,44,45,53,54,55";
			
		String[] newstr=new String[str.length/2];
		for(int j=1;j<str.length;j++){
			if(((j-1)%2)==0){
				newstr[(j-1)/2]=str[j]+str[j+1];
			}
		}
		
		for(int i=0;i<newstr.length;i++){
			if(str3.contains(newstr[i])){
				flag=true;
				break;
			}
		}		
		return flag;
	}
	
	/**
	 * 删除文件
	 */
	public void deleteFile() {
		try {
			String path = request.getParameter("path");
			if (path.indexOf("-") > 0) {
				path = path.replace("-", "\\");
			}
			File file = new File(path);
			if (file.exists()) {
				file.delete();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
