package com.ruyicai.bean;

/**
 * 
 * @classname: TransactionBean
 * @description: 查询返回的内容
 * @author: 徐丽
 * @date: 2010-11-12 下午04:03:13
 * 
 */
public class TransactionBean {	
	private String play_name;// 彩种
	private String batchcode;// 期号
	private String betcode;// 注码
	private String sell_datetime;// 投注时间,(赠彩的交易时间)
	private String cash_date_time;// 期结时间
	private String amt;// 投注金额
	private String maxLine;// 总共的条数
	private String state;// 彩票的状态
	private String error_code;// 返回码
	private String lotMulti;// 倍数
	private String gameMethod; // 玩法
	private String endTime;//开奖时间

	private String code;// 中奖返回注码
	private String prizeamt;// 中奖总金额
	private String prizelttle;// 中奖小奖总金额(客户端可不显示)
	private String prizeinfo;// 奖项等级(中奖详细信息)
	private String prizetime;// 兑奖日期(YYYYMMDDHHMMSS)
	private String abandon_date_time;// 弃奖日期(YYYYMMDDHHMMSS)
	private String encash_flag;// 兑奖标记(0未兑奖,1已兑奖)

	private String term_begin_datetime;// 封机时间
	private String run_code;// 彩票流水号，这是福彩、体彩中心系统下传的流水号，不是本系统产生的
	private String check_code;// 彩票校验码
	private String to_mobile_code;// 被赠送人的手机号码
	private String valid_term_code;// 彩票有效期号
	
	private String win_base_code;//中奖号码
	private String win_special_code;//特别号码
	private String act_sell_amount;//本期实际销售额
	private String valid_sell_amount;//本期有效销售额;
	private String wingrade;//奖等级;
	private String win_money;//奖等级金额
	private String win_money1;
	private String win_money2;
	private String win_money3;
	private String win_money4;
	private String win_money5;
	private String win_money6;
	private String win_money7;
	private String win_money8;
	private String win_money9;
	private String win_num;//等级注数
	private String win_num1;
	private String win_num2;
	private String win_num3;
	private String win_num4;
	private String win_num5;
	private String win_num6;
	private String win_num7;
	private String win_num8;
	private String win_num9;
	
	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getGameMethod() {
		return gameMethod;
	}

	public void setGameMethod(String gameMethod) {
		this.gameMethod = gameMethod;
	}

	public String getLotMulti() {
		return lotMulti;
	}

	public void setLotMulti(String lotMulti) {
		this.lotMulti = lotMulti;
	}

	public String getPlay_name() {
		return play_name;
	}

	public void setPlay_name(String playName) {
		play_name = playName;
	}

	public String getBatchcode() {
		return batchcode;
	}

	public void setBatchcode(String batchcode) {
		this.batchcode = batchcode;
	}

	public String getBetcode() {
		return betcode;
	}

	public void setBetcode(String betcode) {
		this.betcode = betcode;
	}

	public String getSell_datetime() {
		return sell_datetime;
	}

	public void setSell_datetime(String sellDatetime) {
		sell_datetime = sellDatetime;
	}

	public String getCash_date_time() {
		return cash_date_time;
	}

	public void setCash_date_time(String cashDateTime) {
		cash_date_time = cashDateTime;
	}

	public String getAmt() {
		return amt;
	}

	public void setAmt(String amt) {
		this.amt = amt;
	}

	public String getMaxLine() {
		return maxLine;
	}

	public void setMaxLine(String maxLine) {
		this.maxLine = maxLine;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getError_code() {
		return error_code;
	}

	public void setError_code(String errorCode) {
		error_code = errorCode;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPrizeamt() {
		return prizeamt;
	}

	public void setPrizeamt(String prizeamt) {
		this.prizeamt = prizeamt;
	}

	public String getPrizelttle() {
		return prizelttle;
	}

	public void setPrizelttle(String prizelttle) {
		this.prizelttle = prizelttle;
	}

	public String getPrizeinfo() {
		return prizeinfo;
	}

	public void setPrizeinfo(String prizeinfo) {
		this.prizeinfo = prizeinfo;
	}

	public String getPrizetime() {
		return prizetime;
	}

	public void setPrizetime(String prizetime) {
		this.prizetime = prizetime;
	}

	public String getAbandon_date_time() {
		return abandon_date_time;
	}

	public void setAbandon_date_time(String abandonDateTime) {
		abandon_date_time = abandonDateTime;
	}

	public String getEncash_flag() {
		return encash_flag;
	}

	public void setEncash_flag(String encashFlag) {
		encash_flag = encashFlag;
	}

	public String getTerm_begin_datetime() {
		return term_begin_datetime;
	}

	public void setTerm_begin_datetime(String termBeginDatetime) {
		term_begin_datetime = termBeginDatetime;
	}

	public String getRun_code() {
		return run_code;
	}

	public void setRun_code(String runCode) {
		run_code = runCode;
	}

	public String getCheck_code() {
		return check_code;
	}

	public void setCheck_code(String checkCode) {
		check_code = checkCode;
	}

	public String getTo_mobile_code() {
		return to_mobile_code;
	}

	public void setTo_mobile_code(String toMobileCode) {
		to_mobile_code = toMobileCode;
	}

	public String getValid_term_code() {
		return valid_term_code;
	}

	public void setValid_term_code(String validTermCode) {
		valid_term_code = validTermCode;
	}

	public String getWin_base_code() {
		return win_base_code;
	}

	public void setWin_base_code(String winBaseCode) {
		win_base_code = winBaseCode;
	}

	public String getWin_special_code() {
		return win_special_code;
	}

	public void setWin_special_code(String winSpecialCode) {
		win_special_code = winSpecialCode;
	}

	public String getAct_sell_amount() {
		return act_sell_amount;
	}

	public void setAct_sell_amount(String actSellAmount) {
		act_sell_amount = actSellAmount;
	}

	public String getValid_sell_amount() {
		return valid_sell_amount;
	}

	public void setValid_sell_amount(String validSellAmount) {
		valid_sell_amount = validSellAmount;
	}

	public String getWingrade() {
		return wingrade;
	}

	public void setWingrade(String wingrade) {
		this.wingrade = wingrade;
	}

	public String getWin_money() {
		return win_money;
	}

	public void setWin_money(String winMoney) {
		win_money = winMoney;
	}

	public String getWin_num() {
		return win_num;
	}

	public void setWin_num(String winNum) {
		win_num = winNum;
	}

	public String getWin_money1() {
		return win_money1;
	}

	public void setWin_money1(String winMoney1) {
		win_money1 = winMoney1;
	}

	public String getWin_money2() {
		return win_money2;
	}

	public void setWin_money2(String winMoney2) {
		win_money2 = winMoney2;
	}

	public String getWin_money3() {
		return win_money3;
	}

	public void setWin_money3(String winMoney3) {
		win_money3 = winMoney3;
	}

	public String getWin_money4() {
		return win_money4;
	}

	public void setWin_money4(String winMoney4) {
		win_money4 = winMoney4;
	}

	public String getWin_money5() {
		return win_money5;
	}

	public void setWin_money5(String winMoney5) {
		win_money5 = winMoney5;
	}

	public String getWin_money6() {
		return win_money6;
	}

	public void setWin_money6(String winMoney6) {
		win_money6 = winMoney6;
	}

	public String getWin_money7() {
		return win_money7;
	}

	public void setWin_money7(String winMoney7) {
		win_money7 = winMoney7;
	}

	public String getWin_money8() {
		return win_money8;
	}

	public void setWin_money8(String winMoney8) {
		win_money8 = winMoney8;
	}

	public String getWin_money9() {
		return win_money9;
	}

	public void setWin_money9(String winMoney9) {
		win_money9 = winMoney9;
	}

	public String getWin_num1() {
		return win_num1;
	}

	public void setWin_num1(String winNum1) {
		win_num1 = winNum1;
	}

	public String getWin_num2() {
		return win_num2;
	}

	public void setWin_num2(String winNum2) {
		win_num2 = winNum2;
	}

	public String getWin_num3() {
		return win_num3;
	}

	public void setWin_num3(String winNum3) {
		win_num3 = winNum3;
	}

	public String getWin_num4() {
		return win_num4;
	}

	public void setWin_num4(String winNum4) {
		win_num4 = winNum4;
	}

	public String getWin_num5() {
		return win_num5;
	}

	public void setWin_num5(String winNum5) {
		win_num5 = winNum5;
	}

	public String getWin_num6() {
		return win_num6;
	}

	public void setWin_num6(String winNum6) {
		win_num6 = winNum6;
	}

	public String getWin_num7() {
		return win_num7;
	}

	public void setWin_num7(String winNum7) {
		win_num7 = winNum7;
	}

	public String getWin_num8() {
		return win_num8;
	}

	public void setWin_num8(String winNum8) {
		win_num8 = winNum8;
	}

	public String getWin_num9() {
		return win_num9;
	}

	public void setWin_num9(String winNum9) {
		win_num9 = winNum9;
	}

}
