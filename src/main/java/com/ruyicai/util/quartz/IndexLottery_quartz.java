package com.ruyicai.util.quartz;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.invokeLot.util.JSONReslutUtil;
import com.jrt.invokeLot.util.LotErrorCode;
import com.ruyicai.bean.Tuserinfo;
import com.ruyicai.meetup.memcached.MemCacheInvoke;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.NameUtil;
import com.ruyicai.util.ResourceBundleUtil;
import com.ruyicai.web.action.SelectAllAction;

/**
 * memcache 缓存类   用于定时缓存
 * @author zhaokailong
 *
 */
public class IndexLottery_quartz {
	private static Logger logger = Logger.getLogger(IndexLottery_quartz.class);
	
	/**
	 * 首页开奖公告缓存
	 * @throws IOException
	 */
      public void IndexLotteryInfo () throws IOException{
    	    logger.info("定时调用开奖   缓存进入memcache");
    		String lotnoList[] = ResourceBundleUtil.LOTNO.split("\\,");
	    	JSONArray arrWininfo = new JSONArray();
	    		//调用公共方法查询最近一期开奖公告内容
	    		for(int i=0;i<lotnoList.length;i++){
	    			JSONObject arrObject = SelectAllAction.getDrawalotteryArray(lotnoList[i],"1").getJSONObject(0);
	    			arrWininfo.add(arrObject);	
	    		}
	    	 MemCacheInvoke.mcc.set("arrWininfoindex", arrWininfo);
          }
      
      /**
       * 首页排名缓存
       * @throws IOException
       */
      public void IndexRankInfo () throws IOException{
    	  logger.info("定时调用历史排名方法   缓存进入memcache");
    	  SimpleDateFormat yeartime = new SimpleDateFormat("yyyy");
			SimpleDateFormat monthtime = new SimpleDateFormat("yyyy-MM");
			SimpleDateFormat alltime = new SimpleDateFormat("yyyy-MM-dd");
			JSONArray yearList= new JSONArray();
			JSONArray monthList= new JSONArray();
			JSONArray allList= new JSONArray();
			//查询年排行
			JSONObject year=JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKRANK + 
					"/selectUserRankingHistory?","time=" + yeartime.format(new Date()) +"&type=4",
					"POST"));
			if(LotErrorCode.NEW_OK.trim().equals(year.getString("errorCode").trim())){
				yearList = JSONArray.fromObject(year.getString("value"));
				for(int i=0;i<yearList.size();i++){
					JSONObject rec = yearList.getJSONObject(i);
					String nickName = SelectAllAction.getUserNameByRank(rec);
					rec.put("name", nickName);
					rec.put("prizeAmt", CommonUtil.moneySave2(rec.getDouble("prizeAmt")/100));
				}
			}
			MemCacheInvoke.mcc.set("rankyearList", yearList);
			
			//查询月排行
			JSONObject month=JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKRANK + 
					"/selectUserRankingHistory?" ,  "time=" + monthtime.format(new Date()) +"&type=3" ,
					"POST"));
			if(LotErrorCode.NEW_OK.trim().equals(month.getString("errorCode").trim())){
				monthList = JSONArray.fromObject( month.getString("value"));
				for(int i=0;i<monthList.size();i++){
					JSONObject rec = monthList.getJSONObject(i);
					 String nickName = SelectAllAction.getUserNameByRank(rec);
					rec.put("name", nickName);
					rec.put("prizeAmt", CommonUtil.moneySave2(rec.getDouble("prizeAmt")/100));
				}
			}
			MemCacheInvoke.mcc.set("rankmonthList", monthList);
			//查询总排行
			JSONObject all=JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKRANK + 
					"/selectUserRankingHistory?" ,  "time=" + alltime.format(new Date()) +"&type=5",
					"POST"));
			if(LotErrorCode.NEW_OK.trim().equals(all.getString("errorCode").trim())){
				allList =  JSONArray.fromObject( all.getString("value"));
				for(int i=0;i<allList.size();i++){
					JSONObject rec = allList.getJSONObject(i);
				    String nickName = SelectAllAction.getUserNameByRank(rec);
					rec.put("name", nickName);
					rec.put("prizeAmt", CommonUtil.moneySave2(rec.getDouble("prizeAmt")/100));
				}
			}
			MemCacheInvoke.mcc.set("rankallList", allList);
			
			logger.info("首页中奖排行缓存成功");
      }
      /**
       * 
       *  根据彩种获取奖池滚存
       */
      public void lotteryProgressiveByLotno (){
    	 try {
			JSONArray array= SelectAllAction.getDrawalotteryArray("F47104", "1");
			JSONArray array1= SelectAllAction.getDrawalotteryArray("T01001", "1");
			MemCacheInvoke.mcc.set("lotteryProgressiveF47104", array);
			MemCacheInvoke.mcc.set("lotteryProgressiveT01001", array1);
		} catch (IOException e) {
			e.printStackTrace();
		}
    	  
      }
      
}