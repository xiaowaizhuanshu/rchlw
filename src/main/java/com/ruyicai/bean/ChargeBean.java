package com.ruyicai.bean;

/**
 * 
 * @classname: ChargeBean
 * @description: 充值传给后台的参数
 * @author: 徐丽
 * @date: 2010-11-16 上午09:25:13
 * 
 */
public class ChargeBean {
	private String transaction_money;// 充值金额
	private String userName;// 用户名
	private String cardNumber;// 银行卡号
	private String documentNumber;// 开卡的证件号-身份证
	private String province;// 省
	private String city;// 市
	private String provinceCard;// 身份证-省
	private String cityCard;// 身份证-市
	private String addressCard;// 身份证-地址
	private String tel;// 接听电话
	private String bankName;//银行名称
	
	private String totalMoney;// 点卡面值
	private String card_no;// 点卡卡号
	private String card_pwd;// 点卡密码
	
	private String ryc_cardNo;//博雅彩点卡
	private String ryc_cardPwd;//博雅彩点卡密码
	
	public String getbankName() {
		return bankName;
	}

	public void setBankName(String bankname) {
		bankName = bankname;
	}
	
	public String getRyc_cardNo() {
		return ryc_cardNo;
	}

	public void setRyc_cardNo(String rycCardNo) {
		ryc_cardNo = rycCardNo;
	}

	public String getRyc_cardPwd() {
		return ryc_cardPwd;
	}

	public void setRyc_cardPwd(String rycCardPwd) {
		ryc_cardPwd = rycCardPwd;
	}

	public String getCard_no() {
		return card_no;
	}

	public void setCard_no(String cardNo) {
		card_no = cardNo;
	}

	public String getCard_pwd() {
		return card_pwd;
	}

	public void setCard_pwd(String cardPwd) {
		card_pwd = cardPwd;
	}

	public String getTotalMoney() {
		return totalMoney;
	}

	public void setTotalMoney(String totalMoney) {
		this.totalMoney = totalMoney;
	}

	private String pointType;// 点卡类型

	public String getPointType() {
		return pointType;
	}

	public void setPointType(String pointType) {
		this.pointType = pointType;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getDocumentNumber() {
		return documentNumber;
	}

	public void setDocumentNumber(String documentNumber) {
		this.documentNumber = documentNumber;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getProvinceCard() {
		return provinceCard;
	}

	public void setProvinceCard(String provinceCard) {
		this.provinceCard = provinceCard;
	}

	public String getCityCard() {
		return cityCard;
	}

	public void setCityCard(String cityCard) {
		this.cityCard = cityCard;
	}

	public String getAddressCard() {
		return addressCard;
	}

	public void setAddressCard(String addressCard) {
		this.addressCard = addressCard;
	}

	public String getTransaction_money() {
		return transaction_money;
	}

	public void setTransaction_money(String transactionMoney) {
		transaction_money = transactionMoney;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

}
