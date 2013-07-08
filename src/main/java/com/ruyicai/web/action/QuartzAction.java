package com.ruyicai.web.action;

import java.io.IOException;

import org.apache.log4j.Logger;

import com.ruyicai.meetup.memcached.MemCacheInvoke;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.quartz.IndexLottery_quartz;

public class QuartzAction extends BaseAction {
	private static final Logger logger = Logger.getLogger(QuartzAction.class);
	
    public String QuartzStart(){
    	String param  = request.getParameter("p");
    	IndexLottery_quartz lottery_quartz = new IndexLottery_quartz();
    	try {
    		if(param.equals("lottery")){
    			lottery_quartz.IndexLotteryInfo();
    			request.setAttribute("message", "首页开奖公告缓存成功");
    		}else if(param.equals("rank")){
    			lottery_quartz.IndexRankInfo();
    			request.setAttribute("message", "首页开奖排行缓存成功");
    		}else if(param.equals("jiangchi")){
    			lottery_quartz.lotteryProgressiveByLotno();
    			request.setAttribute("message", "首页双色球大乐透奖池缓存成功");
    		}else if(param.equals("hemai")){
    			new SelectAllAction().getCaselotsByWhereIndex();
    			request.setAttribute("message", "合买推荐缓存成功");
    		}else{
    			request.setAttribute("message", "缓存失败");
    		}
    	} catch (IOException e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	}
    
    	return "quartzStartsucc";
    }
    
}
