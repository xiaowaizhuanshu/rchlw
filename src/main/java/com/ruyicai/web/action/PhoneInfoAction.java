package com.ruyicai.web.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;

import org.apache.log4j.Logger;

import com.ruyicai.util.BaseAction;
import com.ruyicai.util.FinalVar;
import com.ruyicai.util.MD5.PaySign;
import com.ruyicai.web.pojo.PhoneInfo;
import com.ruyicai.web.service.PhoneInfoService;

public class PhoneInfoAction extends BaseAction {

	private static final long serialVersionUID = -8351064091313090344L;
	private Logger log = Logger.getLogger(PhoneInfoAction.class);
	private PhoneInfoService phoneInfoService;

	public void create() throws NoSuchAlgorithmException, IOException {
		String macFrom = request.getParameter("Mac");
		String phoneCode = request.getParameter("phoneCode");
		Integer rules = Integer
				.valueOf(request.getParameter("rules") == "" ? "0" : request
						.getParameter("rules"));
		int flag = 3;
		if (macFrom != null && !"".equals(macFrom) && phoneCode != null
				&& !"".equals(phoneCode)) {
			String phonecode = phoneCode + "3gcaipiao";
			String macChack = PaySign.EncoderByMd5(phonecode);
			if(macChack.indexOf("+")>-1){
				macChack = macChack.replaceAll("\\+", "_");
			}
			if (macChack.equals(macFrom)) {
				log.info("mac一致开始传送");
				PhoneInfo phoneInfo = new PhoneInfo();
				phoneInfo.setPhoneCode(Long.valueOf(phoneCode));
				phoneInfo.setRules(rules);
				flag = phoneInfoService.queryPhoneInfoCount(phoneInfo);
				if (flag < 3) {
					String code = phoneInfoService.add(phoneInfo);
					if (FinalVar.INSERT_SUCCESS.equals(code)) {
						request.setAttribute("msg", "手机信息添加成功");
						log.info("手机计数添加成功");
					} else {
						log.info("手机计数添加失败");
					}
				} else {
					log.info("手机信息每天超过3次则发送失败");
				}
			} else {
				log.info("mac不一致传送失败");
			}
		} else {
			log.info("mac地址非法");
		}
		PrintWriter out = response.getWriter();
		out.print(flag);
	}
	public void addCont() throws IOException {
		String count="";
		try {
			String phoneCode = request.getParameter("emailCode");
			Integer rules = Integer
					.valueOf(request.getParameter("rules") == "" ? "0" : request
							.getParameter("rules"));
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setEmail(phoneCode);
			phoneInfo.setRules(rules);
			count =phoneInfoService.add(phoneInfo);
			 if (FinalVar.INSERT_SUCCESS.equals(count)) {
				 PrintWriter out = response.getWriter();
					out.print("succ");
				} else {
					PrintWriter out = response.getWriter();
					out.print("fail");
				}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	public void getCont() throws IOException {
		int count=0;
		try {
			String phoneCode = request.getParameter("emailCode");
			Integer rules = Integer
					.valueOf(request.getParameter("rules") == "" ? "0" : request
							.getParameter("rules"));
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setEmail(phoneCode);
			phoneInfo.setRules(rules);
			count =phoneInfoService.queryInfoCountByEmail(phoneInfo);
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		PrintWriter out = response.getWriter();
		out.print(count);
	}
	public void getContNew() throws IOException {
		int count=0;
		try {
			String phoneCode = request.getParameter("emailCode");
			Integer rules = Integer
					.valueOf(request.getParameter("rules") == "" ? "0" : request
							.getParameter("rules"));
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setEmail(phoneCode);
			phoneInfo.setRules(rules);
			count =phoneInfoService.queryPhoneInfoCountByEmail(phoneInfo);
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		PrintWriter out = response.getWriter();
		out.print(count);
	}
	public void createEmail() throws NoSuchAlgorithmException, IOException {
		String macFrom = request.getParameter("Mac");
		String emailCode = request.getParameter("emailCode");
		Integer rules = Integer
				.valueOf(request.getParameter("rules") == "" ? "0" : request
						.getParameter("rules"));
		int flag = 3;
		if (macFrom != null && !"".equals(macFrom) && emailCode != null
				&& !"".equals(emailCode)) {
			String codes = emailCode + "3gcaipiao";
			String macChack = PaySign.EncoderByMd5(codes);
			if (macChack.equals(macFrom)) {
				log.info("mac一致开始传送");
				PhoneInfo phoneInfo = new PhoneInfo();
				phoneInfo.setEmail(emailCode);
				phoneInfo.setRules(rules);
				flag = phoneInfoService.queryPhoneInfoCountByEmail(phoneInfo);
				if (flag < 3) {
					String code = phoneInfoService.add(phoneInfo);
					if (FinalVar.INSERT_SUCCESS.equals(code)) {
						request.setAttribute("msg", "邮箱信息添加成功");
						log.info("邮箱计数添加成功");
					} else {
						log.info("邮箱计数添加失败");
					}
				} else {
					log.info("邮箱信息每天超过3次则发送失败");
				}
			} else {
				log.info("mac不一致传送失败");
			}
		} else {
			log.info("mac地址非法");
		}
		PrintWriter out = response.getWriter();
		out.print(flag);
	}

	public void getCheck() throws IOException {
		String result = null;
		try {

			String check = request.getParameter("check");
			Integer usered = phoneInfoService.queryCheck(check);
			if (usered == 0) {
				result = "0";
			} else {
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		PrintWriter out = response.getWriter();
		out.print(result);

	}

	public void createChecked() {
		try {
			String checked = request.getParameter("check");
			if (checked != null) {
				PhoneInfo info = new PhoneInfo();
				info.setChecked(checked);
				info.setRules(1);
				phoneInfoService.add(info);
				log.info("添加checked成功!");
			}

		} catch (Exception e) {
			e.printStackTrace();
			log.info("添加checked失败!");
		}

	}

	public void createRemark() {
		try {
			String checked = request.getParameter("check");
			if (checked != null) {

				phoneInfoService.editeRemark(checked);

				log.info("添加remark!");
			}

		} catch (Exception e) {
			e.printStackTrace();
			log.info("添加remark失败!");
		}

	}

	public void getRemark() {
		try {
			PrintWriter out = response.getWriter();
			String checked = request.getParameter("check");
			Integer count = phoneInfoService.queryRemark(checked);
			out.print(count);

		} catch (Exception e) {
			e.printStackTrace();
			log.info("查询链接失败！");
		}
	}
	
	public PhoneInfoService getPhoneInfoService() {
		return phoneInfoService;
	}

	public void setPhoneInfoService(PhoneInfoService phoneInfoService) {
		this.phoneInfoService = phoneInfoService;
	}


}
