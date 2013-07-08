package com.ruyicai.bean;

import java.math.BigDecimal;

/**
 * 做订单投注、订单追号的所需内容
 * 
 * @author Administrator
 * 
 */
public class BetRequest {
	private String betcode;// 注码
	private BigDecimal amt; // 投注的金额
	public String getBetcode() {
		return betcode;
	}
	public void setBetcode(String betcode) {
		this.betcode = betcode;
	}
	public BigDecimal getAmt() {
		return amt;
	}
	public void setAmt(BigDecimal amt) {
		this.amt = amt;
	}

}
