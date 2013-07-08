package com.ruyicai.bean;

import net.sf.json.JSONObject;

public class CaseLotRequest {
	private long buyAmt;//购买金额
	private long safeAmt;//保底金额
	private long totalAmt;//(取OrderRequest.amt)
	private int commisionRatio;//佣金
	private String title;//标题
	private String desc;//合买描述
	private int visibility;//保密类型
	private long minAmt;//最小购买金额
	private String starter;//发起人
	
	public CaseLotRequest() {}
	public CaseLotRequest(long buyAmt, long safeAmt, long totalAmt,
			int commisionRatio, String title, String desc, int visibility,
			long minAmt, String starter) {
		this.buyAmt = buyAmt;
		this.safeAmt = safeAmt;
		this.totalAmt = totalAmt;
		this.commisionRatio = commisionRatio;
		this.title = title;
		this.desc = desc;
		this.visibility = visibility;
		this.minAmt = minAmt;
		this.starter = starter;
	}
	public long getBuyAmt() {
		return buyAmt;
	}
	public void setBuyAmt(long buyAmt) {
		this.buyAmt = buyAmt;
	}
	public long getSafeAmt() {
		return safeAmt;
	}
	public void setSafeAmt(long safeAmt) {
		this.safeAmt = safeAmt;
	}
	public long getTotalAmt() {
		return totalAmt;
	}
	public void setTotalAmt(long totalAmt) {
		this.totalAmt = totalAmt;
	}
	public int getCommisionRatio() {
		return commisionRatio;
	}
	public void setCommisionRatio(int commisionRatio) {
		this.commisionRatio = commisionRatio;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public int getVisibility() {
		return visibility;
	}
	public void setVisibility(int visibility) {
		this.visibility = visibility;
	}
	public long getMinAmt() {
		return minAmt;
	}
	public void setMinAmt(long minAmt) {
		this.minAmt = minAmt;
	}
	public String getStarter() {
		return starter;
	}
	public void setStarter(String starter) {
		this.starter = starter;
	}
	
	/**
	 * 将json对象转换成 CaseLotRequest对象
	 * @param clr jsonObjcet
	 */
	public void toBean(JSONObject clr){
		
		this.buyAmt = clr.get("buyAmt")==null?0:clr.getLong("buyAmt");
		this.safeAmt = clr.get("safeAmt")==null?0:clr.getLong("safeAmt");
		this.totalAmt = clr.get("totalAmt")==null?0:clr.getLong("totalAmt");
		this.commisionRatio = clr.get("commisionRatio")==null?0:clr.getInt("commisionRatio");
		this.title = clr.get("title")==null?"":clr.getString("title");
		this.desc = clr.get("desc")==null?"":clr.getString("desc");
		this.visibility = clr.get("visibility")==null?0:clr.getInt("visibility");
		this.minAmt = clr.get("minAmt")==null?0:clr.getLong("minAmt");
		this.starter = clr.get("starter")==null?"":clr.getString("starter");
		
		
	}
}
