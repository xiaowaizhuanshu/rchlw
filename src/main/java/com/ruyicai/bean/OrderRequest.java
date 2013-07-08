package com.ruyicai.bean;

import java.math.BigDecimal;
import java.util.List;

/**
 * 投注和追号传到lottery中的参数
 * 
 * @author Administrator
 * 
 */
public class OrderRequest {
	private String batchcode;// 期号
	private String lotno;// 彩种
	private BigDecimal amt;// 总金额
	private String bettype;// zhuihao(0), taocan(1),
							// touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
	private String userno;// 被赠送人
	private BigDecimal lotmulti;// 倍数
	private String buyuserno;// 赠送人
	private String channel;// 用户的渠道号
	private String subchannel;// 默认为00094293
	// private SubaccountType subaccount;
	private BigDecimal paytype;// 0-为付款；1-已付款
	//private BigDecimal betnum;// 总注数
	private BigDecimal oneamount;

	//private boolean issync;
	private String memo;// 玩法
	private String desc;//收益率
	private List<BetRequest> betRequests;// 投注实体类的集合

	private BigDecimal prizeend = BigDecimal.ZERO;//中奖后停止 0.不停止，1.停止
	private BigDecimal prizeendamt = BigDecimal.ZERO;//单笔奖金中奖停止追号条件值
	private BigDecimal leijiprizeendamt = BigDecimal.ZERO;//累积奖金终止追号条件值
	private BigDecimal accountnomoneysms = BigDecimal.ZERO;
	private List<SubscribeRequest> subscribeRequests;// 追号实体集合
	private CaseLotRequest caseLotRequest;//合买使用的合买属性对象
	/**	投注方式，（0-单式，1-复式，2-胆拖，3-单式上传），追号时使用 */
	private BigDecimal drawway;
	/**	订单类型 0-单式上传，1-复式，2-胆拖，3-多方案 */
	private BigDecimal lotsType;
	
	private BigDecimal endsms;//追号提醒是否下发短信的参数 （1提醒，0或者不传为不提醒）
	
	private String Blessing;//赠彩功能中的祝福语
	
	private BigDecimal cancancel;//双色球追号包年套餐 ,如果cancancel传的是1，则代表这个追号是不能撤销的。
	
	private String  reciverMobile;///** 赠送彩票接受人手机号 */
	
	public String getReciverMobile() {
		return reciverMobile;
	}

	public void setReciverMobile(String reciverMobile) {
		this.reciverMobile = reciverMobile;
	}

	public BigDecimal getLeijiprizeendamt() {
		return leijiprizeendamt;
	}

	public void setLeijiprizeendamt(BigDecimal leijiprizeendamt) {
		this.leijiprizeendamt = leijiprizeendamt;
	}

	public BigDecimal getPrizeendamt() {
		return prizeendamt;
	}

	public void setPrizeendamt(BigDecimal prizeendamt) {
		this.prizeendamt = prizeendamt;
	}

	public CaseLotRequest getCaseLotRequest() {
		return caseLotRequest;
	}

	public void setCaseLotRequest(CaseLotRequest caseLotRequest) {
		this.caseLotRequest = caseLotRequest;
	}

	// private CaseLotRequest caseLotRequest;
	public String getBatchcode() {
		return batchcode;
	}

	public void setBatchcode(String batchcode) {
		this.batchcode = batchcode;
	}

	public String getLotno() {
		return lotno;
	}

	public void setLotno(String lotno) {
		this.lotno = lotno;
	}

	public BigDecimal getAmt() {
		return amt;
	}

	public void setAmt(BigDecimal amt) {
		this.amt = amt;
	}

	public String getBettype() {
		return bettype;
	}

	public void setBettype(String bettype) {
		this.bettype = bettype;
	}

	public String getUserno() {
		return userno;
	}

	public void setUserno(String userno) {
		this.userno = userno;
	}

	public BigDecimal getLotmulti() {
		return lotmulti;
	}

	public void setLotmulti(BigDecimal lotmulti) {
		this.lotmulti = lotmulti;
	}

	public String getBuyuserno() {
		return buyuserno;
	}

	public void setBuyuserno(String buyuserno) {
		this.buyuserno = buyuserno;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getSubchannel() {
		return subchannel;
	}

	public void setSubchannel(String subchannel) {
		this.subchannel = subchannel;
	}

	public BigDecimal getPaytype() {
		return paytype;
	}

	public void setPaytype(BigDecimal paytype) {
		this.paytype = paytype;
	}


	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public List<BetRequest> getBetRequests() {
		return betRequests;
	}

	public void setBetRequests(List<BetRequest> betRequests) {
		this.betRequests = betRequests;
	}

	public BigDecimal getPrizeend() {
		return prizeend;
	}

	public void setPrizeend(BigDecimal prizeend) {
		this.prizeend = prizeend;
	}

	public BigDecimal getAccountnomoneysms() {
		return accountnomoneysms;
	}

	public void setAccountnomoneysms(BigDecimal accountnomoneysms) {
		this.accountnomoneysms = accountnomoneysms;
	}

	public List<SubscribeRequest> getSubscribeRequests() {
		return subscribeRequests;
	}

	public void setSubscribeRequests(List<SubscribeRequest> subscribeRequests) {
		this.subscribeRequests = subscribeRequests;
	}

	public BigDecimal getOneamount() {
		return oneamount;
	}

	public void setOneamount(BigDecimal oneamount) {
		this.oneamount = oneamount;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public BigDecimal getDrawway() {
		return drawway;
	}

	public void setDrawway(BigDecimal drawway) {
		this.drawway = drawway;
	}

	public BigDecimal getLotsType() {
		return lotsType;
	}

	public void setLotsType(BigDecimal lotsType) {
		this.lotsType = lotsType;
	}

	public BigDecimal getEndsms() {
		return endsms;
	}

	public void setEndsms(BigDecimal endsms) {
		this.endsms = endsms;
	}

	public String getBlessing() {
		return Blessing;
	}

	public void setBlessing(String blessing) {
		Blessing = blessing;
	}

	public BigDecimal getCancancel() {
		return cancancel;
	}

	public void setCancancel(BigDecimal cancancel) {
		this.cancancel = cancancel;
	}
	
	
	

}
