package com.jrt.invokeLot.util;
/**
 * 系统错误码
 * @author shenpenglan
 * 针对内部返回码的管理
 */
public class LotErrorCode {
	
	public static final String NEW_OK = "0"; //成功
	public static final String Error = "500"; //服务器错误
	public static final String WTS_CONTENT ="300002";//transaction表没有记录
	public static final String SERVER_CODE = "39";//后台服务器报404、500、503等错误时返回
	
	/*
	 * 用户注册
	 */
	public static final String MMCW="070006";   //加密密码错误
	public static final String YHJYMCW="070007";   //生成用户校验码错误
	public static final String YHYTJ="000012";  //用户已暂停
	public static final String ZHJYMCW="070008"; //生成账户校验码错误
	public static final String SJHCW="0019";  //手机号错误
	public static final String YXCW="0019";  //邮箱错误
	public static final String NCYCZ="100105";  //昵称已存在
	public static final String NCBCZ="100205";  //昵称不存在
	/*
	 * 修改用户信息
	 */
	public static final String YHBHWK="100001";  //用户userno为空
	public static final String YHBCZ="100002";  //用户不存在
	public static final String SJYBD="100003"; //用户手机号已绑定
	public static final String YXYBD="100004"; //用户邮箱已绑定
	public static final String  YHMBKXG="100005";  //用户名不允许修改
	
	/*
	 * 投注:基础验证
	 */
	public static final String WDL="070002"; 	// 用户未登录
	public static final String GZSB="040014";	// 彩票信息构造失败、彩票记录插库失败
	public static final String WFHQLJ="040007";	// 无法获取逻辑机
	public static final String LOTCRSB="040015";// 彩票记录插入数据库失败
	public static final String KKSB = "040016"; // 扣款失败
	public static final String OK="000000";		// 投注成功
	public static final String CSCW="000018";	// 客户端参数错误
	public static final String ZCCW="0018";  	// 体彩赠彩客户端参数错误
	public static final String DJSB="040017";   //冻结金额失败
	public static final String JDSB="040018";   //解冻失败
	public static final String JYCRSB="040019"; //交易插入失败
	
	/**
	 * 体彩：投注
	 */
	public static final String QQSB="040020";//发送投注请求失败
	public static final String CPCG="0000";	 //即时出票成功
	public static final String WCHXX="0047";//查询结果无记录
	public static final String SWYC="040021"; //事务异常
	public static final String TZSB="040022"; //投注失败
	public static final String DJSWYC="20100701";//投注冻结事务异常
	public static final String ZHKKYC="20100702";//投注扣款异常
	public static final String JDYC="20100703";//解冻异常
	
		/*
	 * 投注:用户信息验证
	 */
	public static final String YYBCZ="040001";	// 用户不存在
	public static final String ZTWX ="040002";	// 用户状态不为正常
	public static final String ZHWX="040005";	// 用户账户信息不存在
	public static final String YEBZ="040006";	// 余额不足
	public static final String YYXXYC="040013";	// 用户信息验证发生异常
	public static final String NBOK="0000";		// 用户信息验证通过(后台内部程序使用,不会返回给客户端)
	/*
	 * 投注:注码信息验证
	 */
	public static final String ZMWK="040009";	// 注码为空
	public static final String ZMGSCW="040010";	// 注码格式错误
	public static final String CZWX="040011";	// 彩种无效
	public static final String ZMYZYC="040012";	// 注码验证发生异常
	/*
	 * 投注:发送销售命令
	 */
	public static final String FSYC="000056";	// 发送销售命令失败,网络异常
	/*
	 * 套餐/追号定制
	 */
	public static final String CZBCZ="040018";	// 彩种不存在
	public static final String TCZT = "350001";	// 套餐状态为暂停
	public static final String TCZX = "350001";	// 套餐已注销
	public static final String QHFC = "040003";	// 期号不合法
	public static final String TCYDZ = "350002";// 套餐已定制
	public static final String TCDZXGF="350006";// 套餐已定制,修改失败
	public static final String TCDZF = "350003";// 套餐定制失败/异常
	public static final String ZHJECW="360005"; // 追号金额错误
	public static final String ZHQSCW="360004";	// 追号期号错误
	public static final String ZHZX = "360007";	// 追号已经注销
	public static final String ZHWS ="360008";//没有追号数
	
	
	
	/*
	 * 套餐查询
	 */
	public static final String HHHQSB="070102";	// SessionId获取异常
	public static final String YHJLYC="042018";	// 根据手机号码查询用户记录异常
	public static final String NOTSUB="060004";	// 套餐记录不存在
	public static final String XYYC="080102";	// 套餐查询响应异常
	public static final String TCCXYC="040503";	// 套餐查询异常
	
	/*
	 * 套餐修改
	 */
	public static final String TCJLBCZ="040101";// 套餐记录不存在
	
	/*
	 * 追号查询
	 */
	public static final String WJL = "000047";	// 没有符合条件的记录
	
	

	/*
	 * 支付语音充值
	 */
	public static final String JEZHSB="000077";	// 金额转换失败
	public static final String JYCJF = "000040";// 交易创建失败
	public static final String JYBCZ="000041";	// 交易不存在
	public static final String GZQQDZF="000033";// 构造请求地址发生异常
	public static final String YYCZYC="000034";	// 支付宝语音充值发生异常
	
	/*
	 * 如意付充值
	 */
	public static final String HQSXYC="000029";	// 获取属性文件异常
	public static final String JSONYC="000017";	// 获取JSON串内容发生异常
	public static final String URLFAIL="000019";// 如意付url参数构建出现异常
	public static final String RYFYC="000020";	// 发送如意付请求出现异常
	
	/*
	 * 如意彩充值卡充值
	 */
	public static final String RYCFail="000012";// 如意彩充值失败
	public static final String YHZTWTG="000001";// 用户状态验证未通过
	
	/*
	 * 民生充值
	 */
	public static final String SXYJYC="000318";	// 读取属性文件异常
	public static final String CFJYF="003041";	// 拆分交易编号出现异常
	public static final String DFEXCE="003141";	// 时间转换异常
	
	/*
	 * DNA充值
	 */
	public static final String JLBYZ="000019";	// 用户输入的银行卡号与数据库保存记录不一致
	
	/*
	 * 用户注册
	 */
	public static final String DLCSCW="0018";	// 参数错误
	public static final String ZCXXCW="0019";	// 注册信息验证未通过
	public static final String NOILLEGAL="0020";	// 仅限于合法手机号
	public static final String YYXXWK="0010";	// 用户信息为空
	public static final String DLOK="0000";		// 成功
	public static final String YHYZC="0013";	// 用户已注册
	public static final String YHZTZT="000012";	// 用户状态为暂停
	public static final String YHZTDJH="070003";// 用户状态为待激活
	public static final String WZC="070005"; 	// 用户未注册
	public static final String CLOSED="070004"; 	// 用户关闭
	public static final String JMMMCC = "070006";	// 加密用户密码出错
	public static final String YHJYMCC = "070007";	// 生成用户检验码出错
	public static final String ZJJYMCC = "070008";	// 生成资金检验码出错
	/*
	 * 注册送彩金
	 */
	public static final String CJKKSB="0144";	// 扣款失败
	public static final String CJFSYC="0019";	// 赠送中发生异常
	
	/*
	 * 用户登录
	 */
	public static final String JSONWK="070001";	// JSON串为空
	
	/*
	 * 用户退出
	 */
	public static final String TCWDL="0011";	// 用户未登录
	
	/*
	 * 修改密码
	 */
	public static final String XGMMSB="0008";	// 修改密码失败
	public static final String XXCW="0015";		// 手机号或密码错误
	public static final String XXXGF="0009";	// 信息修改失败
	public static final String ZTFF="0001";		// 用户状态非法
	
	/*
	 * 提现
	 */
	public static final String TXCG="0000";	// 提现成功
	public static final String TXFAIL="0017";	// 提现失败
	
	/*
	 * 推荐好友
	 */
	public static final String BTJYR="06003";	// 被推荐者已是平台注册用户
	public static final String BTJYCZ="06002";	// 被推荐者已存在
	
	/*
	 * 平台公告
	 */
	public static final String WJBCZ="06007";	// 文件不存在
	public static final String RFYC="06008";	// 读取文件发生异常	
	
	/*
	 * 投注新接口新添错误码
	 */
	public static final String CZQDHK="030001"; // 彩种的渠道号为空，不能确定福彩中心
	public static final String CZTLTK="030002"; // 根据手机号和彩种获取的Tlottype为空，不能确定福彩中心
	public static final String FCCFAIL="030003";// 根据渠道号确定福彩中心失败
	public static final String TZDDQE="030004";	// 投注调度器异常
	public static final String GZSELLF="030005";// 构造内蒙销售命令失败
	public static final String FSSELLF="030006";// 发送内蒙销售命令失败
	public static final String SXGZSB="030005"; // 构造陕西销售命令失败
	public static final String SXSELLF="030006";// 发送陕西销售命令失败
	public static final String SXEXCE="030007"; // 陕西福彩投注时发生异常
	public static final String NMEXCE="030008"; // 内蒙福彩投注时发生异常
	public static final String ZHQDQHF="030009";// 根据渠道确定福彩中心失败、确定销售期号失败(追号)
	public static final String ZHDZGZF="030010";// 追号定制失败,构造追号记录失败系统发生异常
	public static final String ZHDZJLF="030011";// 追号定制失败,追号记录入库失败系统发生异常
	public static final String ZHDZEXC="350012";// 追号定制失败
	public static final String ZSEROOR="350013";// 注数或者倍数超过限制
	public static final String ZHCG="350000";	// 追号定制成功	 

    public static final String WHMJL="400001";//查询无合买记录  
	public static final String HMMY="400002";//方案已满员
	public static final String HMCL="400009";//购买数量超过剩余份数
	
	/**
	 * 提现优化返回码
	 */
	public static final String YC="090000";//异常
	public static final String TXXXK="090001";//该用户对应的提现信息不存在
	public static final String YSH="090002";//提现需求已进入审核状态，不允许修改
	public static final String YZX="090003";//提现已进入执行阶段不允许修改
	public static final String XGTXSB="090004";//修改提现表失败
	public static final String GXTXYC="090005";//更新提现详细表出现异常
	public static final String XGJYBSB="090006";//修改交易表失败
	public static final String XGJYBYC="090007";//修改交易表异常
	public static final String TXBTJSB="090008";//向用户提现表中插入数据失败
	public static final String TXBGXSB="090009";//更新用户提现表失败
	public static final String GXJYBYC="090010";//更新交易表异常
	public static final String TXYCZ="090011";//用户取消提现记录已存在或用户提现记录不存在
	public static final String GXZHYC="090012";//更新提现账户详细表事务操作出现异常
	public static final String GXZHJESB="090013";//更新用户账户金额失败
	public static final String GXZTSB="090014";//更新交易表用户交易状态失败
	public static final String GXTXXXZTSB="090015";//更新提现详细表提现状态失败
	public static final String QXTXYC="090016";//用户取消提现出现异常
	public static final String CZSB="100000";//失败
	public static final String SBHMK="090017";//手机号码不允许为空
	public static final String CXYC="090018";//查询过程过程中出现异常
	public static final String CHYEBZ="0016";//提现金额不足
	
	
	public static final String YHJLCG="090019";//用户记录被篡改
	public static final String ZHJLCG="090020";//账户记录篡改
	public static final String ZHKTXXYTX="090021";//用户账户可提现余额小于提现金额
	public static final String KTXDYYE="090022";//用户账户可提现金额大于余额
	public static final String KTXJYXYY="090023";//用户可提现余额减去冻结金额是否小于提现金额
	public static final String GXZHXXYC="090024";//用户可提现余额减去冻结金额是否小于提现金额
	public static final String GXJYMSB="090025";//更新用户校验码识别
	public static final String HDJYHYMYC="090026";//获得用户校验码异常
	public static final String HDZHJYMYC="090027";//获得账户校验码异常
	public static final String GXZHXXSB="090028";//更新账户信息失败
	public static final String WJGSBZJ="090029";//文件格式不正确
	
	
	//新接口返回码
	public static final String ZHMXK="400003";//账户变动明细为空
	
	//支付宝联合登录返回码
	public static final String SJHM_BIND = "100024";//该手机用户已绑定
	public static final String WB_BIND = "100025";//该外部userid已绑定
	public static final String DKHBSWK = "100020";//传过来的参数-大客户标识为空
	public static final String YHDKHNOT = "100018";//该用户所属的大客户不存在
	public static final String DKHNOT = "100023";//该[大客户]用户不存在
	public static final String DKBXHNOT = "100019";//传过来的参数-同一个大客户内部使用的用户标识为空

		
}