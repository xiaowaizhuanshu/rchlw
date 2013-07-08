package com.ruyicai.util;

public enum TorderState {

	payType_no(0,"未付款"),
	payType_has(1,"已付款"),
	
	orderState_wait(0,"等待处理"),
	orderState_ok(1,"已出票"),
	orderState_Null(2,"空订单"),
	orderState_Cancel(3,"已撤销"),
	
	prizeState_no(0,"准备进入等待开奖状态"),
	prizeState_wait(1,"等待开奖状态"),
	prizeState_processing(2,"派奖处理中"),
	prizeState_complete(3,"派奖结束未中奖"),
	prizeState_tall(4,"中大奖"),
	
	orderType_bet(0,"普通投注订单"),
	orderType_subscribe(1,"追号订单"),
	orderType_lotcase(2,"合买订单");
	
	private Integer value;
	
	
	private String memo;
	
	private TorderState(int value,String memo){
		this.value = value;
		this.memo = memo;
	}
	
	
	public Integer value() {
		return value;
	}
	
	public String memo() {
		return memo;
	}
}
