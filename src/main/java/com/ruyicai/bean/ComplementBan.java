package com.ruyicai.bean;

/**
 * 
 * @classname   ComplementBan
 * @description 补充bean
 * 
 *
 */
public class ComplementBan {
	private String new_pass;//新密码
	private String old_pass;//旧密码
	private String real_pass;//重复密码
	
	private String deposit_amount;//可投注金额
	private String valid_amount;//可提现金额
	private String freeze_amout;//冻结金额
	
	private String old_email;//旧邮箱
	private String new_email;//新邮箱
	
	public String getNew_pass() {
		return new_pass;
	}

	public void setNew_pass(String newPass) {
		new_pass = newPass;
	}

	public String getOld_pass() {
		return old_pass;
	}

	public void setOld_pass(String oldPass) {
		old_pass = oldPass;
	}

	public String getReal_pass() {
		return real_pass;
	}

	public void setReal_pass(String realPass) {
		real_pass = realPass;
	}

	public String getDeposit_amount() {
		return deposit_amount;
	}

	public void setDeposit_amount(String depositAmount) {
		deposit_amount = depositAmount;
	}

	public String getValid_amount() {
		return valid_amount;
	}

	public void setValid_amount(String validAmount) {
		valid_amount = validAmount;
	}

	public String getFreeze_amout() {
		return freeze_amout;
	}

	public void setFreeze_amout(String freezeAmout) {
		freeze_amout = freezeAmout;
	}

	public String getDeposit_amount_yuan() {
		return String.valueOf(Double.parseDouble(deposit_amount)/100);
	}

	public String getValid_amount_yuan() {
		return String.valueOf(Double.parseDouble(valid_amount)/100);
	}

	public String getFreeze_amout_yuan() {
		return String.valueOf(Double.parseDouble(freeze_amout)/100);
	}

	public String getOld_email() {
		return old_email;
	}

	public void setOld_email(String old_email) {
		this.old_email = old_email;
	}

	public String getNew_email() {
		return new_email;
	}

	public void setNew_email(String new_email) {
		this.new_email = new_email;
	}
	
	
}
