package com.ruyicai.web.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.CustomDao;
import com.ruyicai.web.model.CustomMD;
import com.ruyicai.web.pojo.Custom;
import com.ruyicai.web.service.CustomService;

public class CustomServiceImpl implements CustomService {
	private Logger log = Logger.getLogger(CustomServiceImpl.class);
	CustomDao customdao=null;

	public CustomDao getCustomdao() {
		return customdao;
	}

	public void setCustomdao(CustomDao customdao) {
		this.customdao = customdao;
	}

	@Override
	public String addCustom(Custom user) {
		try{
			this.customdao.insertCustom(user);
			log.info("客户留言信息添加成功");
			return FinalVar.INSERT_SUCCESS;
		}catch(Exception e){
			log.info("添加失败");
			return FinalVar.INSERT_FAIL;
		}
	}

	

	@Override
	public List<Custom> queryCustomListByCreateTime(String createtime) {
		return customdao.selectCustomListByCreateTime(createtime);
	}

	@Override
	public List<CustomMD> query(CustomMD cmd) {
		List <CustomMD> cmdList = customdao.select(cmd);
		return cmdList;
	}

	@Override
	public String remove(String ids) {
		Integer num = this.customdao.delete(ids);
		if (num > 0) {
			return FinalVar.DELETE_SUCCESS;
		}
		return FinalVar.DELETE_FAIL;
	}

	@Override
	public String editAuditing(Map auditingMap) {
		Integer num = this.customdao.updateAuditing(auditingMap);
		if (num > 0) {
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}

	@Override
	public String edit(Custom user) {
		Integer num = this.customdao.update(user);
		if (num > 0) {
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}

	@Override
	public List<Custom> queryCustomListByUsernameAndCreatetime(String username,
			String createtime) {
		return customdao.selectCustomListByUsernameAndCreatetime(username, createtime);
	}

	@Override
	public List<Custom> queryCustomListByUserName(String username) {
		return customdao.selectCustomListByUserName(username);
	}

	@Override
	public Integer queryForIntThisPage(CustomMD cmd) {
			Integer maxLine = customdao.selectForIntThisPage(cmd);
			return maxLine;
	}

	@Override
	public CustomMD queryCustomByIdForObject(Long id) {
		return customdao.selectCustomMDByIdForObject(id);
	}

}
