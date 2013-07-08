package com.ruyicai.util;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.Constant;

/**
 * 抓去外站数据的工具类
 * @author 鞠牧
 *
 */
public class HtmlCore {
	
	private static Logger logger = Logger.getLogger(HtmlCore.class);

	
	/**
	 * 
	 * 获取jrtcms项目中的彩种名称
	 * @param lotno
	 * @return
	 */
	public static String getJrtcmsLotno(String lotno){
		if(lotno.equals(Constant.SSQ) || lotno.equals(Constant.SSQ_DM)){
			lotno="ssq";
		}else if(lotno.equals(Constant.SD) || lotno.equals(Constant.SD_DM)){
			lotno="sd";
		}else if(lotno.equals(Constant.QLC) || lotno.equals(Constant.QLC_DM)){
			lotno="qlc";
		}else if(lotno.equals(Constant.PLS) || lotno.equals(Constant.PLS_DM)){
			lotno="pls";
		}else if(lotno.equals(Constant.PLW) || lotno.equals(Constant.PLW_DM)){
			lotno="plw";
		}else if(lotno.equals(Constant.DLT) || lotno.equals(Constant.DLT_DM)){
			lotno="dlt";
		}else if(lotno.equals(Constant.QXC) || lotno.equals(Constant.QXC_DM)){
			lotno="qxc";
		}else if(lotno.equals(Constant.EEXW) ){
			lotno="eexw";
		}
		return lotno;
	}
}
