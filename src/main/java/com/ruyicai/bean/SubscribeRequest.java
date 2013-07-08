package com.ruyicai.bean;

import java.math.BigDecimal;

public class SubscribeRequest {
	private BigDecimal lotmulti;//追号的倍数	
	private BigDecimal amt;//追号的金额	
	private String batchcode;//期号
	private Long endtime;//官方每期的截止时间
	private String desc;//描述字段 传入什么是什么 目前的目的是传入收益率相关内容
	public BigDecimal getLotmulti() {
		return lotmulti;
	}
	public void setLotmulti(BigDecimal lotmulti) {
		this.lotmulti = lotmulti;
	}
	public BigDecimal getAmt() {
		return amt;
	}
	public void setAmt(BigDecimal amt) {
		this.amt = amt;
	}
	public String getBatchcode() {
		return batchcode;
	}
	public void setBatchcode(String batchcode) {
		this.batchcode = batchcode;
	}
	public Long getEndtime() {
		return endtime;
	}
	public void setEndtime(Long endtime) {
		this.endtime = endtime;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	

}
