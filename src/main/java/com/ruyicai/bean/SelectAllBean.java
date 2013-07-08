package com.ruyicai.bean;

/**
 * 
 * @classname:   SelectAllBean
 * @description: 查询条件bean
 * @author:      徐丽
 * @date:        2010-11-12 下午03:03:26
 *
 */
public class SelectAllBean {
	private String lotNo;//彩种
	private String batchCode;//期号
	private String startDate;//开始时间
	private String stopDate;//结束时间
	private String startLine;//起始行
	private String stopLine;//结束行
	private String flowNo;//订单号
	public String getLotNo() {
		return lotNo;
	}
	public void setLotNo(String lotNo) {
		this.lotNo = lotNo;
	}
	public String getBatchCode() {
		return batchCode;
	}
	public void setBatchCode(String batchCode) {
		this.batchCode = batchCode;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getStopDate() {
		return stopDate;
	}
	public void setStopDate(String stopDate) {
		this.stopDate = stopDate;
	}
	public String getStartLine() {
		return startLine;
	}
	public void setStartLine(String startLine) {
		this.startLine = startLine;
	}
	public String getStopLine() {
		return stopLine;
	}
	public void setStopLine(String stopLine) {
		this.stopLine = stopLine;
	}
	public String getFlowNo() {
		return flowNo;
	}
	public void setFlowNo(String flowNo) {
		this.flowNo = flowNo;
	}

}
