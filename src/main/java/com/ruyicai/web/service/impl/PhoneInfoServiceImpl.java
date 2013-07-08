package com.ruyicai.web.service.impl;

import java.text.ParseException;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.PhoneInfoDAO;
import com.ruyicai.web.pojo.PhoneInfo;
import com.ruyicai.web.service.PhoneInfoService;

public class PhoneInfoServiceImpl implements PhoneInfoService {
	private Logger log = Logger.getLogger(PhoneInfoServiceImpl.class);
	private PhoneInfoDAO phoneInfoDAO;
	public PhoneInfoDAO getPhoneInfoDAO() {
		return phoneInfoDAO;
	}
	public void setPhoneInfoDAO(PhoneInfoDAO phoneInfoDAO) {
		this.phoneInfoDAO = phoneInfoDAO;
	}
	
	/**
	 * 手机信息添加
	 */
	public String add(PhoneInfo phoneInfo) {
		try {
			
			this.phoneInfoDAO.insert(phoneInfo);
			log.info("添加手机信息成功");
			return FinalVar.INSERT_SUCCESS;
		} catch (Exception e) {
			e.printStackTrace();
			log.error("添加手机信息失败");
			return FinalVar.INSERT_FAIL;
		}
		 
	}

	/**
	 * 查找出该手机请求的次数
	 * @throws ParseException 
	 */
	@Override
	public int queryPhoneInfoCount(PhoneInfo phoneInfo) {
		return phoneInfoDAO.selectPhoneInfoCount(phoneInfo);
	}
	
	/**
	 * 查找出该邮箱请求的次数
	 * @throws ParseException 
	 */
	@Override
	public int queryPhoneInfoCountByEmail(PhoneInfo phoneInfo) {
		return phoneInfoDAO.selectPhoneInfoCountByEmail(phoneInfo);
	}
	
	/**
	 * 查找出该邮箱请求的次数
	 * @throws ParseException 
	 */
	@Override
	public int queryInfoCountByEmail(PhoneInfo phoneInfo) {
		return phoneInfoDAO.selectInfoCountByEmail(phoneInfo);
	}


	@Override
	public Integer queryCheck(String check) {
		PhoneInfo  phoneInfo = new PhoneInfo();
		phoneInfo.setChecked(check);
		phoneInfo.setRules(1);
		return phoneInfoDAO.selectPhoneByCheck(phoneInfo);
	}


	@Override
	public Integer queryRemark(String check) {
		 PhoneInfo phoneInfo = new PhoneInfo();
		 phoneInfo.setChecked(check);
		 phoneInfo.setRemark("1");
		 phoneInfo.setRules(1);
		return phoneInfoDAO.selectPhoneByRemark(phoneInfo);
	}


	@Override
	public String editeRemark(String check) {
		PhoneInfo phoneInfo = new PhoneInfo();
		phoneInfo.setChecked(check);
		Integer count = phoneInfoDAO.updatePhoneByChecked(phoneInfo);
		if(count>0){
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}
	 


}
