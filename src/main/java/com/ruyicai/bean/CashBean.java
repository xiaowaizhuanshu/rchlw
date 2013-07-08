package com.ruyicai.bean;

/**
 * 
 * @classname: CashBean
 * @description: 账号提现Bean
 * @author: 徐丽
 * @date: 2010-11-12 上午11:32:28
 * 
 */
public class CashBean {
	private String bank_name;// 银行名称
	private String real_name; // 真实姓名
	private String withdrawel_money;// 提现金额
	private String ID_number;// 银行账号
	private String state;//提现状态

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getBank_name() {
		return bank_name;
	}

	public void setBank_name(String bankName) {
		bank_name = bankName;
	}

	public String getReal_name() {
		return real_name;
	}

	public void setReal_name(String realName) {
		real_name = realName;
	}

	public String getWithdrawel_money() {
		return withdrawel_money;
	}

	public void setWithdrawel_money(String withdrawelMoney) {
		withdrawel_money = withdrawelMoney;
	}

	public String getID_number() {
		return ID_number;
	}

	public void setID_number(String iDNumber) {
		ID_number = iDNumber;
	}

}
