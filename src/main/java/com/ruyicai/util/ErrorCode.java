package com.ruyicai.util;

public enum ErrorCode {

	OK("0", "成功"), 
	ERROR("500", "服务器错误"),
	PARAMTER_ERROR("501", "参数错误"),
	MAC_ERROR("502", "Mac生成错误"),
//	ZENGSONG_DNA_USER_ERROR("810007","为了保证您的账户资金安全，银联语音充值用户不能赠送！"),
	
	UserReg_PassMD5Error("070006", "加密密码错误"), 
    UserReg_UserMacError("070007", "生成用户校验码错误"),
    UserReg_UserExists("0013", "用户已注册"),
    UserReg_UserPause("000012", "用户已暂停"),
    UserReg_AccountMacError("070008", "账户校验码错误"),
    UserReg_MobileIdError("0019", "手机号错误"),
    UserReg_EmailError("0020", "邮箱错误"),
    UserReg_NicknameExists("100105", "昵称已存在"),
    
    UserMod_UserNoEmpty("100001", "用户编号为空"),
    UserMod_UserNotExists("100002", "用户不存在"),
    UserMod_MobileidBind("100003", "用户手机号已绑定"),
    UserMod_EmailBind("100004", "用户邮箱已绑定"),
    UserMod_ZfbuserifBind("100006", "用户支付宝用户ID已绑定"),
    UserMod_NicknameNotExists("100205", "昵称不存在"),
    UserMod_StateNotNormal("100206", "用户状态不正常"),
    UserMod_UsernameNotallowMod("100207", "用户名不允许修改"),

    // 大客户用户的注册接口 
    BigUserSubChannel_NotExistsError("100018", "该用户所属的大客户不存在"),
    BigUserBs_IsNullError("100019", "传过来的参数-同一个大客户内部使用的用户标识为空"),
    BigUserSubChannel_IsNullError("100020", "传过来的参数-大客户标识为空"),
    BigUser_HaveExist("100021", "该[大客户]用户已经注册过了"),
    BigUserType_IsNullError("100026", "传过来的参数-大客户外部用户类型为空"),
    // 大客户用户的查询接口 
    BigUser_Query_Exists("100022", "该[大客户]用户存在并返回UERNO"),
    BigUser_Query_NotExists("100023", "该[大客户]用户不存在"),
    //支付宝联合登录用户绑定
    BigUser_JointLogin_Bind_Userno_AlreadyBinded("100024","该手机用户已绑定"),
    BigUser_JointLogin_Bind_Userbs_AlreadyBinded("100025","该外部用户编号已绑定"),
    //体彩投注返回
    UserRes_LotControlNotExist("20100705","投注的期不存在"),
    UserRes_LotControlExpired("20100706","投注的期已经过期"),
    UserRes_DJYC("20100701","本次投注方案未能冻结金额，请重试"),
    UserRes_KKYC("20100702","本次投注未能扣款，请重新投注！"),
    UserRes_YEYC("20100710","您的可投注余额不足，请先充值！"),
    UserRes_JDYC("20100703","解冻异常"),
    UserRes_JDJEBZ("20100711","解冻金额不足"),
    UserRes_CPCC("0000","出票成功"),
    UserRes_GZSB("040014","彩票构造，交易记录插入，失败 "),
    UserRes_TZSB("040022","投注失败"),
    UserMod_UserNameNoAllowMod("100005", "用户名不允许修改"),
    UserRes_UserClosed("20100708","关闭用户不能执行操作"),
    UserRes_UserNotExist("20100709","用户不存在"),
    UserRes_UserLocked("20100712","用户被锁定"),
    Data_MD5("08001","加密验证错误"),    
    SMS_InvalidChannel("09001","无效的短信通道"),

    Tlot_LotnoEmpty("200001", "彩种编号为空"),
    Tlot_AmountError("200002", "投注金额错误"),
    Tlot_BetCodeError("200003", "投注注码错误"),
    Tlottype_NotExists("200004", "彩种不存在"),
    Tlotctrl_NotExists("200005", "期号不存在"),
    Tlot_LotMultiError("200006", "投注倍数错误"),
    Tlot_BatchNumError("200007", "追号期数错误"),
    Tlot_OneAmountError("200008", "彩票单注金额错误"),
    Tlot_TlottcNotExist("200009", "该订单对应的票不存在"),
    Tlot_BuildSellCommandError("200010", "构造销售命令失败"),
    Tlot_FindFreeTtmctrlError("200011", "获取空闲逻辑机失败"),
    Tlot_TplataccountAmtNotEnough("200012", "所有机构账户余额都不足以支付投注金额"),
    InternetError("200013", "网络异常"),
    Tlot_AccountNotExit("200014", "账户不存在"),
    Tlot_AccountNotEnough("200015", "账户金额不足"),
    TLot_FindTplataccountError("200016", "获得机构账户失败"),
    Tlot_NotExists("200017", "Tlot不存在"),
    Tsubscribe_NoJiMaiJiFu("200018", "追号记录不存在或追号状态不为即买即付"),
    Tlot_OnSuccessError("200019", "出票成功,成功处理出错"),
    Tlot_OnFailError("200020", "出票失败,失败处理出错"),
    Tlot_BetFail("200021", "投注失败"),
    Tlot_MachinenoError("200022","票面逻辑机号不匹配"),
    Tlot_RuncodeError("200023","票面流水号不匹配"),
    Torder_SubscribeAmountError("200024","追号金额不正确"),
    Tjingcaimatches_NotExists("200025", "场次不存在"),
    Tjingcaimatches_Expired("200026", "场次不存在"),
    Tsubscribe_NoAllowCancel("200027", "追号不允许撤消"),
    Tlot_PauseSell("200028", "彩种暂停销售"),
    
    Ttransaction_BankIdEmpty("300001", "bankId为空"),
    Ttransaction_Empty("300002", "Ttransaction为空"),
    Ttransaction_FlownoEmpty("300003", "flowno为空"),
    Ttransaction_AmtEmpty("300004", "amt为0"),
    Ttransaction_AlreadySuccess("300005", "Ttransaction已经成功"),
    Ttransaction_AmtTransaferException("300006", "交易金额转换异常"),
    Ttransaction_AmtCompareError("300007", "平台返回金额与本地数据库金额不符"),
    Ttransaction_BankCountEmpty("300008", "bankAccount为空"),
    Ttransaction_StateNotProcessing("300009", "失败处理交易状态不是处理中"),
    Ttransaction_NotExists("300010", "Ttransaction不存在"),
    Taccount_NotExists("300011", "Taccount不存在"),
    Taccount_DrawamtChangeError("300012", "可提现金额变动数有误"),
    Ttransaction_AmtIsValid("300013", "amt非法"),
    
    Taccountdetail_BeginTimeError("400001", "beginTime开始时间为空"),
    Taccountdetail_EndTimeError("400002", "endTime开始时间为空"),
    Taccountdetail_Empty("400003", "taccountdetail账户变动明细为空"),
    Select_NotExist("400004","查询结果不存在"),
    Taccountdetail_AmtInadequate("400005", "提现金额不足"),
    Taccountdetail_TcashDetailEmpty("400006", "提现记录为空"),
    Taccountdetail_TcashDetailReview("400007", "提现需求已进入审核状态，不允许修改"),
    Taccountdetail_TcashDetailNotExist("400008", "用户取消提现记录已存在或用户提现记录不存在"),
    Tdnabind_NotExists("400009", "Tdnabind不存在"),  
    Tcash_NameEmpty("400011", "提现人姓名为空"),
    Tcash_NameNotEquals("400012", "提现人姓名与用户信息中填写的姓名不一致"),
    Tcash_NameNotEqualsDNA("400013", "提现人姓名与DNA绑定信息中填写的姓名不一致"),
    Tdnabind_NotDndBindCard("400010", "非DNA绑定卡"),
    
    CaseLot_NotExist("500001", "合买方案不存在"),
    CaseLot_Full("500002","合买方案已满"),
    CaseLot_NotStarter("500003", "只有发起者才能取消"),
    CaseLot_SafeAmtError("500004", "保底金额异常"),
    CaseLot_RetractNotSelf("500005", "只有合买本人才能撤资"),
    CaseLot_CancelCaseLotError("500006", "合买撤销异常"),
    CaseLot_RateBigger50Error("500007", "撤销的合买进度大于50%"),
    CaseLot_CancelCaseLotBuyError("500008", "合买撤资异常"),
    CaseLot_StarterCanntCancelCaseLotBuy("500009", "合买发起人不能撤资"),
    CaseLot_RetractBigger20Error("500010", "撤资的合买进度大于20%"),
    CaseLot_LotControlExpired("500011", "合买已过截止时间"),
    CaseLot_OrderNotExist("500012", "该合买订单不存在"),
    CaseLot_CaseLotApplying("500013", "合买置顶申请处理中"),
    CaseLot_CaseLotHasApplied("500014", "合买置顶申请已处理"),
    CaseLot_CaseLotCelebrityExist("500015", "合买名人已存在"),
    CaseLot_CaseLotNumAndSafeZero("500016", "合买金额不能都为零"),
    PRESENT_Has_DNA("810007","由于您使用了银联语音充值，为保障您银行卡的资金安全，此账户不能做赠送！"),
    Torder_LotEmpty("600001","订单中投注信息为空"),
    Torder_CanNotPrizeForNotOkOrder("600002","不能为未成功的票派奖"),
    
    Statistic_ParaWrong("700001","统计中奖参数错误"),
    MissValue_ParaWrong("700002","遗漏值参数错误"),
    
    UpdateOnPrize_ParaWrong("800001","更改计算奖金状态参数错误");
	

	public String value;
	
	public String memo;
	
	ErrorCode(String value, String memo) {
		
		this.value = value;
		this.memo = memo;
	}
	
	public static String getMemo(String value){
		for(ErrorCode errorcode :ErrorCode.values()){
			if(errorcode.value.equals(value)){
				return errorcode.memo;
			}
		}
		return "";
		
	}
}

