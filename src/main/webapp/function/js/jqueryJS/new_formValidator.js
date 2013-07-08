eval(
		function(p, a, c, k, e, r) {
			e = function(c) {
				return (c < a ? '' : e(parseInt(c / a)))
						+ ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c
								.toString(36));
			};
			if (!''.replace(/^/, String)) {
				while (c--)
					r[e(c)] = k[c] || e(c);
				k = [function(e) {
							return r[e];
						}];
				e = function() {
					return '\\w+';
				};
				c = 1;
			};
			while (c--)
				if (k[c])
					p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
			return p;
		}(
				'6 U;(a($){$.c={2p:a(9,4){6 v=$("#"+9).r(0);6 D=v.1L;6 p=v.w;1h(4.J){g"1M":e d;g"1N":5(D=="1w"||D=="1x"||D=="2q"){e d}j{e h}g"1O":5(D=="1w"||D=="1x"){5(p=="1i"||p=="16"){e h}j{e d}}e h;g"17":5(p=="1j"||p=="1k"||p=="1l"||p=="K-Z"){e d}j{e h}g"1P":5(D=="1w"||D=="1x"){5(p=="1i"||p=="16"){e h}j{e d}}e h;g"1Q":e d}},u:a(n){6 8={2r:h,A:"1",P:h,Q:"",2s:a(){e d},E:a(){},1R:h,1S:"",2t:h};n=n||{};$.V(8,n);5(8.1S!=""){$("#"+8.1S).2u(a(){e $.c.2v("1")})};5(U==B){U=1m 2w()}U.2x(8)},10:a(9,4){5(!$.c.2p(9,4))e-1;6 l=$("#"+9).r(0);5(4.J=="1M"||!l.8||l.8==1y){l.8=1m 2w()}6 F=l.8.2x(4);l.8[F-1].2y=F-1;e F-1},18:a(A){5(U!=B){1z(i=0;i<U.G;i++){5(A==U[i].A){e U[i]}}}e B},2z:a(7){1h(7.4.J){g"1N":$.c.2A(7);t;g"1O":$.c.2B(7);t;g"17":$.c.1A(7);t;g"1P":$.c.2C(7);t;g"1Q":$.c.2D(7);t}},H:a(m,11,z){6 q=$("#"+m);5(z==B||z==""){q.2E()}j{q.2F();q.2G();q.2H(11);q.1T("<2I>"+z+"</2I>")}},3r:a(m,z){6 q=$("#"+m);q.2G();q.2H("1n");q.1T(z)},1o:a(7){6 9=7.9;6 b=7.b;6 4=7.4;6 z="";6 11="";6 8=$("#"+9).r(0).8;6 1U=$.c.18(8[0].A);5(!b){5(4.J=="17"){5(4.1V==""){11="2J";z=4.1W}j{11="1n";z=4.E}}j{z=(7.R==""?4.E:7.R);11="1n"}5(1U.P){6 v=$("#"+9).r(0);5(v.1B!=$(v).k()){2K(z)}}j{$.c.H(8[0].m,11,z)}}j{5(!1U.P){6 z="";5($.c.19(9)){z=4.2L}j{z=4.1C}$.c.H(4.m,"1X",z)}}},1Y:a(9){6 l=$("#"+9);12=l.r(0).w;6 F=0;1h(12){g"1j":g"2M":g"1Z":g"1k":g"1l":6 k=l.k();1z(6 i=0;i<k.G;i++){5(k.2N(i)>=3s&&k.2N(i)<=3t){F+=2}j{F++}}t;g"1i":g"16":F=$("2O[@w=\'"+12+"\'][@1D=\'"+l.13("1D")+"\'][@20]").G;t;g"K-Z":F=l.r(0).2P?l.r(0).2P.3u:-1;t;g"K-21":F=$("K[@1D="+l.r(0).1D+"] 3v[@3w]").G;t}e F},19:a(9){5($("#"+9).r(0).8[0].I&&$.c.1Y(9)==0){e d}j{e h}},3x:a(9){e $.c.1p(9,1).b},1p:a(9,2y){6 7=1m 3y();7.9=9;7.14=-1;7.R="";6 v=$("#"+9).r(0);6 8=v.8;6 22=8.G;5(22==1){8[0].W=h}5(!8[0].W){e B}1z(6 i=0;i<22;i++){5(i==0){5($.c.19(9)){7.b=d;7.4=8[0];t}3z}7.4=8[i];5(8[i].J!="17"){$.c.2z(7)}j{7.14=i}5(!8[i].b){7.b=h;7.4=8[i];t}j{7.b=d;7.4=8[0];5(8[i].J=="17")t}}e 7},3A:a(A){6 u=$.c.18(A);6 1E=$(u.Q);1E.L(a(){6 S=f.8[0];$.c.H(S.m,"1F",S.1a)})},2v:a(A){5(A==B||A==1y)A="1";6 b=d;6 1b="",23;6 7,4;6 1c="^";6 u=$.c.18(A);6 1E=$(u.Q);1E.L(a(i,v){5(v.8[0].W){7=$.c.1p(v.9,1);5(7){6 m=v.8[0].m;5(!7.b){b=h;5(1b==""){1b=7.9;23=(7.R==""?7.4.E:7.R)}}5(!u.P){5(1c.24("^"+m+"^")==-1){1c=1c+m+"^";5(!7.b){1c=1c+m+"^"}$.c.1o(7)}}}}});5(b){b=u.2s();5(u.1R){$("2O[@w=\'2u\']").13("25",d)}}j{6 2Q=$("#"+1b).r(0);u.E(23,2Q);5(1b!=""){$("#"+1b).26()}}e!u.2r&&b},1A:a(7){6 9=7.9;6 l=$("#"+9);6 4=l.r(0).8[7.14];6 1q=4.27;5(l.1r()==0&&l.r(0).8[0].I){7.4=$("#"+9).r(0).8[0];7.b=d;$.c.1o(7);4.b=d;e}5(4.2R){6 28="3B="+9+"&"+9+"="+3C(l.k());1q=1q+((1q).24("?")>0?("&"+28):("?"+28))}$.14({3D:"3E",w:4.w,27:1q,29:4.29,1s:4.1s,2a:4.2a,3F:4.1t,2b:a(1s){S=l.r(0).8[0];5(4.2b(1s)){$.c.H(S.m,"1X",S.1C);4.b=d}j{$.c.H(S.m,"1n",4.E);4.b=h}},2c:a(){5(4.15&&4.15.G>0)4.15.13({"25":h});4.2c},3G:a(2S){5(4.15&&4.15.G>0)4.15.13({"25":d});6 b=4.2T(2S);5(b)4.b=h;4.1V="-1";e b},2d:a(){S=l.r(0).8[0];$.c.H(S.m,"1n",4.E);4.b=h;4.2d()},3H:4.2U})},2C:a(7){6 9=7.9;6 4=7.4;6 D=$("#"+9).r(0).1L;6 v=$("#"+9).r(0);5(v.8[0].I&&v.1G==""){4.b=d}j{6 1d=4.2V;5(4.1t=="3I"){1d=3J("3K."+1d)}5(1d==1y||1d==""){4.b=h;e}6 2W=1m 3L(1d,4.2X);5(2W.3M($("#"+9).k())){4.b=d}j{4.b=h}}},2D:a(7){6 9=7.9;6 4=7.4;6 l=$("#"+9);6 1u=4.2Y(l.k(),l.r(0));5(1u!=1y){5(2Z 1u=="2e"){4.b=h;7.R=1u}j{4.b=1u}}},2A:a(7){6 9=7.9;6 4=7.4;6 l=$("#"+9);6 v=l.r(0);6 k=l.k();6 12=v.w;6 F=$.c.1Y(9);6 I=4.I,X=h;1h(12){g"1j":g"2M":g"1Z":g"1k":g"1l":5(4.w=="1r"){I=4.I;5(!I.30){X=(k.31(/^[ \\s]+/,\'\').G!=k.G)}5(!X&&!I.32){X=(k.31(/[ \\s]+$/,\'\').G!=k.G)}5(X&&I.X){7.R=I.X}}g"1i":g"K-Z":g"K-21":g"16":6 1e=h;5(12=="K-Z"||12=="K-21"){4.w="1r"}5(4.w=="1r"){5(!X){1e=d}5(1e){k=F}}j{p=(2Z 4.1v);5(p=="33"){k=(1m 3N(k)).3O();5(!2f(k)){1e=d}}5(p=="2e"){1e=d}}5(1e){5(k<4.1v||k>4.34){5(k<4.1v&&4.35){7.R=4.35}5(k>4.1v&&4.36){7.R=4.36}4.b=h}j{4.b=d}}j{4.b=h}t}},2B:a(7){6 9=7.9;6 4=7.4;6 l=$("#"+9);6 37=$("#"+4.2g);4.b=h;M=l.k();N=37.k();5(4.1t=="33"){5(!2f(M)&&!2f(N)){M=38(M);N=38(N)}j{e}}1h(4.39){g"=":5(M==N){4.b=d}t;g"!=":5(M!=N){4.b=d}t;g">":5(M>N){4.b=d}t;g">=":5(M>=N){4.b=d}t;g"<":5(M<N){4.b=d}t;g"<=":5(M<=N){4.b=d}t;g"3P":5($.c.19(9)||$.c.19(19.2g)){4.b=h}j{4.b=d}}}};$.Y.c=a(1H){6 4={A:"1",I:h,1R:h,3a:h,1a:"请输入内容",2h:"请输入内容",1C:"输入正确",2L:"输入内容为空",T:B,W:d,J:"1M",3b:{"3c":"3Q","3d":"3R","3S":"3T","3U":"3V"},3e:"3f"};1H=1H||{};$.V(d,4,1H);6 u=$.c.18(4.A);e f.L(a(){6 C={};$.V(C,4);6 q="";5(u.2t){5(!C.m){C.m=f.9+"3g"};q=C.m;5(!C.2i){C.2i=f.9};1I=C.2i;6 y=3h(1I)-3;6 x=3i(1I)+3j(1I);5($("#"+q).G==0){$("<1J 3W=\'3X\'></1J>").3Y($("3Z")).3k({3c:x+"3l",3d:y+"3l"}).40($(\'<1J 9="\'+q+\'"></1J>\').3k(C.3b))}C.m=q}j{5(!C.m){C.m=f.9+"3g"};q=C.m}$.c.10(f.9,C);6 Q=u.Q;5(Q.24("#"+f.9+" ")==-1){u.Q=(Q==""?"#"+f.9:Q+",#"+f.9)}5(!u.P){$.c.H(q,"1F",4.1a)}6 D=f.1L;6 p=f.w;6 T=4.T;6 O=$(f);5(D=="1w"||D=="1x"){5(T){5(p=="1i"||p=="16"){5(p=="16"){5(f.1G==T){O.13("20",d)}}j{O.13("20",$.41(f.1G,T)>=0)}}j{O.k(T)}}O.26(a(){5(!u.P){$.c.H(q,"3m",4.2h)}5(p=="1Z"||p=="1j"||p=="1k"||p=="1l"){f.1B=O.k()}});O.W(4.3e,a(){6 8=f.8;6 7=$.c.1p(f.9,1);5(7==B){e}5(7.14>=0){5(f.1B!=$(f).k()){$.c.H(q,"2J",8[7.14].1W);$.c.1A(7)}}j{$.c.1o(7);5(!7.b){6 3n=4.3a&&(f.w=="1j"||f.w=="1k"||f.w=="1l");5(3n&&!u.P){2K(7.4.E);$.c.H(q,"1F",4.1a)}}}})}j 5(D=="2q"){5(T){5(p=="K-Z"){O.13("1G",T)}}O.W(p=="K-Z"?"26":"42",a(){5(!u.P){$.c.H(q,"3m",4.2h)}});O.W(p=="K-Z"?"43":"3f",a(){6 7=$.c.1p(f.9,1);5(7==B){e}5(7.14>=0&&f.1B!=$(f).k()){$.c.1A(f.9,7.4)}j{$.c.1o(7)}})}})};$.Y.44=a(n){6 8={b:h,1v:0,34:45,w:"1r",E:"输入错误",J:"1N",I:{30:d,32:d,46:B,47:B}};n=n||{};$.V(d,8,n);e f.L(a(){$.c.10(f.9,8)})};$.Y.48=a(n){6 8={b:h,2g:"",39:"=",E:"输入错误",J:"1O"};n=n||{};$.V(d,8,n);e f.L(a(){$.c.10(f.9,8)})};$.Y.49=a(n){6 8={b:h,2V:"",2X:"i",1t:"2e",E:"输入的格式不正确",J:"1P"};n=n||{};$.V(d,8,n);e f.L(a(){$.c.10(f.9,8)})};$.Y.4a=a(n){6 8={b:d,2Y:a(){f.b=d},J:"1Q",E:"输入错误"};n=n||{};$.V(d,8,n);e f.L(a(){$.c.10(f.9,8)})};$.Y.4b=a(n){6 8={b:h,1V:"",w:"4c",27:"",2R:d,1t:"1T",1s:"",2a:d,29:h,2T:a(){e d},2b:a(){e d},2c:a(){},2U:h,2d:a(){},15:B,E:"服务器校验没有通过",1W:"正在等待服务器返回数据",J:"17"};n=n||{};$.V(d,8,n);e f.L(a(){$.c.10(f.9,8)})};$.Y.4d=a(1a){e f.L(a(){6 8=f.8;1z(6 i=1;i<8.G;i++){8[i].b=d;5(!$.c.18(8[0].A).P){6 2j="1X";5(1a){2j="1F"};$.c.H(8[0].m,2j,8[0].1C)}}})};$.Y.4e=a(2k){e f.L(a(){f.8[0].W=!2k;5(2k){$("#"+f.8[0].m).2E()}j{$("#"+f.8[0].m).2F()}})}})(4f);a 3i(1f){x=2l.2m(1f);e x.4g}a 3j(1f){o=2l.2m(1f);2n=o.3o;3p(o.1K!=B){1g=o.1K;2n+=1g.3o;o=1g}e 2n}a 3h(1f){o=2l.2m(1f);2o=o.3q;3p(o.1K!=B){1g=o.1K;2o+=1g.3q;o=1g}e 2o}',
				62,
				265,
				'||||setting|if|var|returnObj|settings|id|function|isvalid|formValidator|true|return|this|case|false||else|val|srcjo|tipid|controlOptions||stype|tip|get||break|initConfig|elem|type|||showmsg|validatorgroup|null|setting_temp|srcTag|onerror|len|length|setTipState|empty|validatetype|select|each|curvalue|ls_data|jqobj|alertmessage|validobjectids|errormsg|setting0|defaultvalue|jQuery_formValidator_initConfig|extend|bind|emptyerror|fn|one|appendValid|showclass|sType|attr|ajax|buttons|radio|AjaxValidator|getInitConfig|isEmpty|onshow|thefirstid|error_tip|regexpress|li_panduan|objectId|oParent|switch|checkbox|text|textarea|file|new|onError|showMessage|oneIsValid|ls_url|size|data|datatype|lb_ret|min|INPUT|TEXTAREA|undefined|for|ajaxValid|validoldvalue|oncorrect|name|jqObjs|onShow|value|msgOptions|aftertip|div|offsetParent|tagName|InitValidator|InputValidator|CompareValidator|RegexValidator|FunctionValidator|submitonce|formid|html|intiConfig|lastValid|onwait|onSuccess|getLength|password|checked|multiple|settingslen|thefirsterrmsg|indexOf|disabled|focus|url|parm|cache|async|success|complete|error|string|isNaN|desid|onfocus|relativeid|ls_style|unbind|document|getElementById|oLeft|oTop|sustainType|SELECT|debug|onsuccess|autotip|submit|pageIsValid|Array|push|index|triggerValidate|inputValid|compareValid|regexValid|functionValid|hide|show|removeClass|addClass|nobr|onLoad|alert|onempty|hidden|charCodeAt|input|options|obj|addidvalue|xhr|beforesend|processdata|regexp|exp|param|fun|typeof|leftempty|replace|rightempty|number|max|onerrormin|onerrormax|desjo|parseFloat|operateor|automodify|tipcss|left|top|triggerevent|blur|Tip|getAbsoluteTop|getElementWidth|getAbsoluteLeft|css|px|onFocus|auto|offsetLeft|while|offsetTop|setFailState|0x4e00|0x9fa5|selectedIndex|option|selected|isOneValid|Object|continue|resetTipState|clientid|encodeURIComponent|mode|abort|dataType|beforeSend|processData|enum|eval|regexEnum|RegExp|test|Number|valueOf|oneok|10px|1px|height|20px|width|250px|class|formValidateTip|appendTo|body|prepend|inArray|click|change|inputValidator|99999999999999|leftemptyerror|rightemptyerror|compareValidator|regexValidator|functionValidator|ajaxValidator|GET|defaultPassed|unFormValidator|jQuery|offsetWidth'
						.split('|'), 0, {}));
//====================================================================================================

// [插件名称] jQuery formValidator
//----------------------------------------------------------------------------------------------------
// [描    述] jQuery formValidator表单验证插件，它是基于jQuery类库，实现了js脚本于页面的分离。对一个表
//            单对象，你只需要写一行代码就可以轻松实现20种以上的脚本控制。现支持一个表单元素累加很多种
//            校验方式,采用配置信息的思想，而不是把信息写在表单元素上，能比较完美的实现ajax请求。
//----------------------------------------------------------------------------------------------------
var jQuery_formValidator_initConfig;
(function($) {

$.formValidator = 
{
	//各种校验方式支持的控件类型
	sustainType : function(id,setting)
	{
		var elem = $("#"+id).get(0);
		var srcTag = elem.tagName;
		var stype = elem.type;
		switch(setting.validatetype)
		{
			case "InitValidator":
				return true;
			case "InputValidator":
				if (srcTag == "INPUT" || srcTag == "TEXTAREA" || srcTag == "SELECT"){
					return true;
				}else{
					return false;
				}
			case "CompareValidator":
				if (srcTag == "INPUT" || srcTag == "TEXTAREA")
				{
					if (stype == "checkbox" || stype == "radio"){
						return false;
					}else{
						return true;
					}
				}
				return false;
			case "AjaxValidator":
				if (stype == "text" || stype == "textarea" || stype == "file" || stype == "select-one"){
					return true;
				}else{
					return false;
				}
			case "RegexValidator":
				if (srcTag == "INPUT" || srcTag == "TEXTAREA")
				{
					if (stype == "checkbox" || stype == "radio"){
						return false;
					}else{
						return true;
					}
				}
				return false;
			case "FunctionValidator":
			    return true;
		}
	},
    
	initConfig : function(controlOptions)
	{
		var settings = 
		{
			debug:false,
			validatorgroup : "1",
			alertmessage:false,
			validobjectids:"",
			onsuccess: function() {return true;},
			onerror:function() {},
			submitonce:false,
			formid:"",
			autotip: false
		};
		controlOptions = controlOptions || {};
		$.extend(settings, controlOptions);
		if(settings.formid!=""){$("#"+settings.formid).submit(function(){return $.formValidator.pageIsValid("1");});};
		if (jQuery_formValidator_initConfig == null ){jQuery_formValidator_initConfig = new Array();}
		jQuery_formValidator_initConfig.push( settings );
	},
	
	//如果validator对象对应的element对象的validator属性追加要进行的校验。
	appendValid : function(id, setting )
	{
		//如果是各种校验不支持的类型，就不追加到。返回-1表示没有追加成功
		if(!$.formValidator.sustainType(id,setting)) return -1;
		var srcjo = $("#"+id).get(0);   
		if (setting.validatetype=="InitValidator" || !srcjo.settings || srcjo.settings == undefined ){srcjo.settings = new Array();}   
		var len = srcjo.settings.push( setting );
		srcjo.settings[len - 1].index = len - 1;
		return len - 1;
	},
	
	//如果validator对象对应的element对象的validator属性追加要进行的校验。
	getInitConfig : function( validatorgroup )
	{
		if(jQuery_formValidator_initConfig!=null)
		{
		    for(i=0;i<jQuery_formValidator_initConfig.length;i++)
		    {
		        if(validatorgroup==jQuery_formValidator_initConfig[i].validatorgroup)
				{
					return jQuery_formValidator_initConfig[i];
				}
		    }
		}
		return null;
	},

	//触发每个控件上的各种校验
	triggerValidate : function(returnObj)
	{
		switch(returnObj.setting.validatetype)
		{
			case "InputValidator":
				$.formValidator.inputValid(returnObj);
				break;
			case "CompareValidator":
				$.formValidator.compareValid(returnObj);
				break;
			case "AjaxValidator":
				$.formValidator.ajaxValid(returnObj);
				break;
			case "RegexValidator":
				$.formValidator.regexValid(returnObj);
				break;
			case "FunctionValidator":
				$.formValidator.functionValid(returnObj);
				break;
		}
	},
	
	//设置显示信息
	setTipState : function(tipid,showclass,showmsg)
	{
	    var tip = $("#"+tipid);
		if(showmsg==null || showmsg==""){
			tip.hide();
		}else
		{
			tip.show();
			tip.removeClass();
			tip.addClass( showclass );
			tip.html( "<nobr>"+showmsg+"</nobr>" );
		}
	},
	
	//设置错误的显示信息
	setFailState : function(tipid,showmsg)
	{
	    var tip = $("#"+tipid);
	    tip.removeClass();
	    tip.addClass( "onError" );
	    tip.html( showmsg );
	},

	//根据单个对象,正确:正确提示,错误:错误提示
	showMessage : function(returnObj)
	{
	    var id = returnObj.id;
		var isvalid = returnObj.isvalid;
		var setting = returnObj.setting;//正确:setting[0],错误:对应的setting[i]
		var showmsg = "";
		var showclass = "";
		var settings = $("#"+id).get(0).settings;
		var intiConfig = $.formValidator.getInitConfig(settings[0].validatorgroup);
		if (!isvalid)
		{		
			if(setting.validatetype=="AjaxValidator")
			{
				if(setting.lastValid=="")
				{
				    showclass = "onLoad";
				    showmsg = setting.onwait;
				}
				else
				{
				    showclass = "onError";
				    showmsg = setting.onerror;
				}
			}
			else
			{
				showmsg = (returnObj.errormsg==""? setting.onerror : returnObj.errormsg);
				showclass = "onError";
			}
			if(intiConfig.alertmessage)		
			{
				var elem = $("#"+id).get(0);
				if(elem.validoldvalue!=$(elem).val()){alert(showmsg);}   
			}
			else
			{
				$.formValidator.setTipState(settings[0].tipid,showclass,showmsg);
			}
		}
		else
		{		
			//验证成功后,如果没有设置成功提示信息,则给出默认提示,否则给出自定义提示;允许为空,值为空的提示
			if(!intiConfig.alertmessage)
			{
				var showmsg = "";
				if ( $.formValidator.isEmpty(id)){ 
					showmsg = setting.onempty;
				}else{
					showmsg = setting.oncorrect;
				}
			    $.formValidator.setTipState(setting.tipid,"onSuccess",showmsg);
			}
		}
	},

	//获取指定字符串的长度
    getLength : function(id)
    {
        var srcjo = $("#"+id);
        sType = srcjo.get(0).type;
        var len = 0;
        switch(sType)
		{
			case "text":
			case "hidden":
			case "password":
			case "textarea":
			case "file":
		        var val = srcjo.val();
				for (var i = 0; i < val.length; i++) 
                {
			        if (val.charCodeAt(i) >= 0x4e00 && val.charCodeAt(i) <= 0x9fa5){ 
				        len += 2;
			        }else {
				        len++;
					}
		        }
		        break;
			case "checkbox":
			case "radio": 
				len = $("input[@type='"+sType+"'][@name='"+srcjo.attr("name")+"'][@checked]").length;
				break;
		    case "select-one":
		        len = srcjo.get(0).options ? srcjo.get(0).options.selectedIndex : -1;
				break;
			case "select-multiple":
				len = $("select[@name="+srcjo.get(0).name+"] option[@selected]").length;
				break;
	    }
		return len;
    },
    
	//结合empty这个属性，判断仅仅是否为空的校验情况。
    isEmpty : function(id)
    {
        if($("#"+id).get(0).settings[0].empty && $.formValidator.getLength(id)==0){
            return true;
        }else{
            return false;
		}
    },
    
	//对外调用：判断单个表单元素是否验证通过，不带回调函数
    isOneValid : function(id)
    {
	    return $.formValidator.oneIsValid(id,1).isvalid;
    },
    
	//验证单个是否验证通过,正确返回settings[0],错误返回对应的settings[i]
	oneIsValid : function (id,index)
	{
		var returnObj = new Object();
		returnObj.id = id;
		returnObj.ajax = -1;
		returnObj.errormsg = "";       //自定义错误信息
		var elem = $("#"+id).get(0);
	    var settings = elem.settings;
	    var settingslen = settings.length;
		//只有一个formValidator的时候不检验
		if (settingslen==1){settings[0].bind=false;}
		if(!settings[0].bind){return null;}
		for ( var i = 0 ; i < settingslen ; i ++ )
		{   
			if(i==0){
				if($.formValidator.isEmpty(id)){
					returnObj.isvalid = true;
					returnObj.setting = settings[0];
					break;
				}
				continue;
			}
			returnObj.setting = settings[i];
			if(settings[i].validatetype!="AjaxValidator") {
				$.formValidator.triggerValidate(returnObj);
			}else{
				returnObj.ajax = i;
			}
			if(!settings[i].isvalid) {
				returnObj.isvalid = false;
				returnObj.setting = settings[i];
				break;
			}else{
				returnObj.isvalid = true;
				returnObj.setting = settings[0];
				if(settings[i].validatetype=="AjaxValidator") break;
			}
		}
		return returnObj;
	},

	resetTipState : function(validatorgroup)
	{
		var initConfig = $.formValidator.getInitConfig(validatorgroup);
		var jqObjs = $(initConfig.validobjectids);
		jqObjs.each(function(){
			var setting0 = this.settings[0];
			$.formValidator.setTipState(setting0.tipid,"onShow",setting0.onshow);	
		});
	},

	//验证所有需要验证的对象，并返回是否验证成功。
	pageIsValid : function (validatorgroup)
	{
	    if(validatorgroup == null || validatorgroup == undefined) validatorgroup = "1";
		var isvalid = true;
		var thefirstid = "",thefirsterrmsg;
		var returnObj,setting;
		var error_tip = "^"; 	

		var initConfig = $.formValidator.getInitConfig(validatorgroup);
		var jqObjs = $(initConfig.validobjectids);
		jqObjs.each(function(i,elem)
		{
			if(elem.settings[0].bind){
				returnObj = $.formValidator.oneIsValid(elem.id,1);
				if(returnObj)
				{
					var tipid = elem.settings[0].tipid;
					//校验失败,获取第一个发生错误的信息和ID
					if (!returnObj.isvalid) {
						isvalid = false;
						if (thefirstid == ""){
							thefirstid = returnObj.id;
							thefirsterrmsg = (returnObj.errormsg==""?returnObj.setting.onerror:returnObj.errormsg);
						}
					}
					//为了解决使用同个TIP提示问题:后面的成功或失败都不覆盖前面的失败
					if (!initConfig.alertmessage){
						if (error_tip.indexOf("^" + tipid + "^") == -1) {
							error_tip = error_tip + tipid + "^";
							if (!returnObj.isvalid) {
								error_tip = error_tip + tipid + "^";
							}
							$.formValidator.showMessage(returnObj);
						}
					}
				}
			}
		});
		//成功或失败后，进行回调函数的处理，以及成功后的灰掉提交按钮的功能
		if(isvalid)
		{
            isvalid = initConfig.onsuccess();
			if(initConfig.submitonce){$("input[@type='submit']").attr("disabled",true);}
		}
		else
		{
			var obj = $("#"+thefirstid).get(0);
			initConfig.onerror(thefirsterrmsg,obj);
			if(thefirstid!=""){$("#"+thefirstid).focus();}
		}
		return !initConfig.debug && isvalid;
	},

	//ajax校验
	ajaxValid : function(returnObj)
	{
		var id = returnObj.id;
	    var srcjo = $("#"+id);
		var setting = srcjo.get(0).settings[returnObj.ajax];
		var ls_url = setting.url;
	    if (srcjo.size() == 0 && srcjo.get(0).settings[0].empty) {
			returnObj.setting = $("#"+id).get(0).settings[0];
			returnObj.isvalid = true;
			$.formValidator.showMessage(returnObj);
			setting.isvalid = true;
			return;
		}
		if(setting.addidvalue)
		{
			var parm = "clientid="+id+"&"+id+"="+encodeURIComponent(srcjo.val());
			ls_url = ls_url + ((ls_url).indexOf("?")>0?("&"+ parm) : ("?"+parm));
		}
		$.ajax(
		{	
			mode : "abort",
			type : setting.type, 
			url : ls_url, 
			cache : setting.cache,
			data : setting.data, 
			async : setting.async, 
			dataType : setting.datatype, 
			success : function(data){
			    setting0 = srcjo.get(0).settings[0];
			    if(setting.success(data))
			    {
			        $.formValidator.setTipState(setting0.tipid,"onSuccess",setting0.oncorrect);
			        setting.isvalid = true;
			    }
			    else
			    {
			        $.formValidator.setTipState(setting0.tipid,"onError",setting.onerror);
			        setting.isvalid = false;
			    }
			},
			complete : function(){
				if(setting.buttons && setting.buttons.length > 0) setting.buttons.attr({"disabled":false});
				setting.complete;
			}, 
			beforeSend : function(xhr){
				//再服务器没有返回数据之前，先回调提交按钮
				if(setting.buttons && setting.buttons.length > 0) setting.buttons.attr({"disabled":true});
				var isvalid = setting.beforesend(xhr);
				if(isvalid) setting.isvalid = false;		//如果前面ajax请求成功了，再次请求之前先当作错误处理
				setting.lastValid = "-1";
				return isvalid;
			}, 
			error : function(){
				setting0 = srcjo.get(0).settings[0];
			    $.formValidator.setTipState(setting0.tipid,"onError",setting.onerror);
			    setting.isvalid = false;
				setting.error();
			},
			processData : setting.processdata 
		});
	},

	//对正则表达式进行校验（目前只针对input和textarea）
	regexValid : function(returnObj)
	{
		var id = returnObj.id;
		var setting = returnObj.setting;
		var srcTag = $("#"+id).get(0).tagName;
		var elem = $("#"+id).get(0);
		//如果有输入正则表达式，就进行表达式校验
		if(elem.settings[0].empty && elem.value==""){
			setting.isvalid = true;
		}
		else 
		{
			var regexpress = setting.regexp;
			if(setting.datatype=="enum"){regexpress = eval("regexEnum."+regexpress);}
			if(regexpress==undefined || regexpress==""){
				setting.isvalid = false;
				return;
			}
			var exp = new RegExp(regexpress, setting.param);
			if (exp.test($("#"+id).val())){
				setting.isvalid = true;
			}else {
				setting.isvalid = false;
			}
		}
	},
	
	//函数校验。返回true/false表示校验是否成功;返回字符串表示错误信息，校验失败;如果没有返回值表示处理函数，校验成功
	functionValid : function(returnObj)
	{
		var id = returnObj.id;
		var setting = returnObj.setting;
	    var srcjo = $("#"+id);
		var lb_ret = setting.fun(srcjo.val(),srcjo.get(0));
		if(lb_ret != undefined) 
		{
			if(typeof lb_ret == "string"){
				setting.isvalid = false;
				returnObj.errormsg = lb_ret;
			}else{
				setting.isvalid = lb_ret;
			}
		}
	},
	
	//对input和select类型控件进行校验
	inputValid : function(returnObj)
	{
		var id = returnObj.id;
		var setting = returnObj.setting;
		var srcjo = $("#"+id);
		var elem = srcjo.get(0);
		var val = srcjo.val();
		var sType = elem.type;
		var len = $.formValidator.getLength(id);
		var empty = setting.empty,emptyerror = false;
		switch(sType)
		{
			case "text":
			case "hidden":
			case "password":
			case "textarea":
			case "file":
				if (setting.type == "size") {
					empty = setting.empty;
					if(!empty.leftempty){
						emptyerror = (val.replace(/^[ \s]+/, '').length != val.length);
					}
					if(!emptyerror && !empty.rightempty){
						emptyerror = (val.replace(/[ \s]+$/, '').length != val.length);
					}
					if(emptyerror && empty.emptyerror){returnObj.errormsg= empty.emptyerror;};
				}
			case "checkbox":
			case "select-one":
			case "select-multiple":
			case "radio":
				var li_panduan = false;
				if(sType=="select-one" || sType=="select-multiple"){setting.type = "size";}
				if (setting.type == "size") {		//获得输入的字符长度，并进行校验
					if(!emptyerror){li_panduan = true;};
					if(li_panduan){val = len;};
				}
				else
				{
					stype = (typeof setting.min);
					if(stype =="number")
					{
						val = (new Number(val)).valueOf();
						if(!isNaN(val)){
							li_panduan = true;
						}
					}
					if(stype =="string"){
						li_panduan = true;
					}
				}
				if(li_panduan)
				{
					if(val < setting.min || val > setting.max){
						if(val < setting.min && setting.onerrormin){
							returnObj.errormsg= setting.onerrormin;
						}
						if(val > setting.min && setting.onerrormax){
							returnObj.errormsg= setting.onerrormax;
						}
						setting.isvalid = false;
					}
					else{
						setting.isvalid = true;
					}
				}
				else{
					setting.isvalid = false;
				}
				break;
		}
	},
	
	compareValid : function(returnObj)
	{
		var id = returnObj.id;
		var setting = returnObj.setting;
		var srcjo = $("#"+id);
	    var desjo = $("#"+setting.desid );
	    setting.isvalid = false;
		curvalue = srcjo.val();
		ls_data = desjo.val();
		if(setting.datatype=="number")
        {
            if(!isNaN(curvalue) && !isNaN(ls_data))
			{
				curvalue = parseFloat(curvalue);
                ls_data = parseFloat(ls_data);
			}
			else
			{
			    return;
			}
        }
		
	    switch(setting.operateor)
	    {
	        case "=":
	            if(curvalue == ls_data){setting.isvalid = true;}
	            break;
	        case "!=":
	            if(curvalue != ls_data){setting.isvalid = true;}
	            break;
	        case ">":
	            if(curvalue > ls_data){setting.isvalid = true;}
	            break;
	        case ">=":
	            if(curvalue >= ls_data){setting.isvalid = true;}
	            break;
	        case "<": 
	            if(curvalue < ls_data){setting.isvalid = true;}
	            break;
	        case "<=":
	            if(curvalue <= ls_data){setting.isvalid = true;}
	            break;
	        case "oneok":
	            if($.formValidator.isEmpty(id) || $.formValidator.isEmpty(isEmpty.desid) ){
	                setting.isvalid = false;
				}else{
	                setting.isvalid = true;
				}
	    }
	}
};

//每个校验控件必须初始化的
$.fn.formValidator = function( msgOptions) 
{
	var setting = 
	{
		validatorgroup : "1",
		empty :false,
		submitonce : false,
		automodify : false,
		onshow :"请输入内容",
		onfocus: "请输入内容",
		oncorrect: "输入正确",
		onempty: "输入内容为空",
		defaultvalue : null,
		bind : true,
		validatetype : "InitValidator",
		tipcss : 
		{
			"left" : "10px",
			"top" : "1px",
			"height" : "20px",
			"width":"250px"
		},
		triggerevent:"blur"
	};
	
	//先合并整个配置(深度拷贝)
	msgOptions = msgOptions || {};
	$.extend(true,setting, msgOptions);

	//获取该校验组的全局配置信息
	var initConfig = $.formValidator.getInitConfig(setting.validatorgroup);

	return this.each(function()
	{
		var setting_temp = {};
		$.extend(setting_temp, setting);
		//自动形成TIP
		var tip = "";
		if(initConfig.autotip)
		{
			if (!setting_temp.tipid){setting_temp.tipid = this.id+"Tip";};
			tip = setting_temp.tipid;
			if (!setting_temp.relativeid){setting_temp.relativeid = this.id;};
			aftertip = setting_temp.relativeid;
			var y = getAbsoluteTop(aftertip) - 3;
			var x = getElementWidth(aftertip) + getAbsoluteLeft(aftertip);
			if($("#"+tip).length==0)
			{
				$("<div class='formValidateTip'></div>").appendTo($("body")).css({left: x+"px", top: y+"px"}).prepend($('<div id="'+tip+'"></div>').css(setting_temp.tipcss));
			}
			setting_temp.tipid = tip;
		}
		//手动TIP
		else
		{
			if (!setting_temp.tipid){setting_temp.tipid = this.id+"Tip";};
			tip = setting_temp.tipid;
		}

		//每个控件都要保存这个配置信息
		$.formValidator.appendValid(this.id,setting_temp);

		//保存控件ID
		var validobjectids = initConfig.validobjectids;
		if(validobjectids.indexOf("#"+this.id+" ")==-1){
			initConfig.validobjectids = (validobjectids=="" ? "#"+this.id : validobjectids + ",#" + this.id);
		}

		//初始化显示信息
		if(!initConfig.alertmessage){
			$.formValidator.setTipState(tip,"onShow",setting.onshow);
		}

		//注册事件
		var srcTag = this.tagName;
		var stype = this.type;
		var defaultvalue = setting.defaultvalue;
		var jqobj = $(this);

		if (srcTag == "INPUT" || srcTag=="TEXTAREA")
		{
			//处理默认值
			if(defaultvalue){
				if (stype == "checkbox" || stype == "radio") {
					if(stype == "radio"){
						if(this.value==defaultvalue){jqobj.attr("checked",true);}
					}
					else
					{
						jqobj.attr("checked",$.inArray(this.value, defaultvalue)>=0);
					}
				}else{
					jqobj.val(defaultvalue);
				}
			}
			
			//注册获得焦点的事件。改变提示对象的文字和样式，保存原值
			jqobj.focus(function()
			{	
				if(!initConfig.alertmessage){
					$.formValidator.setTipState(tip,"onFocus",setting.onfocus);
				}
				if (stype == "password" || stype == "text" || stype == "textarea" || stype == "file") {
					this.validoldvalue = jqobj.val();
				}
			});
			//注册失去焦点的事件。进行校验，改变提示对象的文字和样式；出错就提示处理
			jqobj.bind(setting.triggerevent, function(){   
				var settings = this.settings;
				var returnObj = $.formValidator.oneIsValid(this.id,1);
				if(returnObj==null){return;}
				if(returnObj.ajax >= 0) 
				{
					if(this.validoldvalue!=$(this).val())
					{
						$.formValidator.setTipState(tip,"onLoad",settings[returnObj.ajax].onwait);
						$.formValidator.ajaxValid(returnObj);
					}
				}
				else
				{
					$.formValidator.showMessage(returnObj);
					if(!returnObj.isvalid)
					{
						//自动修正错误
						var auto = setting.automodify && (this.type=="text" || this.type=="textarea" || this.type=="file");
						if(auto && !initConfig.alertmessage)
						{
							alert(returnObj.setting.onerror);
							$.formValidator.setTipState(tip,"onShow",setting.onshow);
						}
					}
				}
			});
		} 
		else if (srcTag == "SELECT")
		{
			//设置默认值
			if (defaultvalue){
				if(stype=="select-one"){
					jqobj.attr("value",defaultvalue);
				}
			}
			//获得焦点或单击
			//stype=="select-one"?"focus":"click"
			jqobj.bind(stype=="select-one"?"focus":"click", function(){	
				if(!initConfig.alertmessage){
					$.formValidator.setTipState(tip,"onFocus",setting.onfocus);
				}
			});
			//选择项目后触发
			jqobj.bind(stype=="select-one"?"change":"blur" , function()
			{
				var returnObj = $.formValidator.oneIsValid(this.id,1);	
				if(returnObj==null){return;}
				if ( returnObj.ajax >= 0 && this.validoldvalue!=$(this).val()){
					$.formValidator.ajaxValid(this.id, returnObj.setting);
				}else{
					$.formValidator.showMessage(returnObj);    
				}
			});
		}
	});
}; 

$.fn.inputValidator = function(controlOptions)
{
	var settings = 
	{
		isvalid : false,
		min : 0,
		max : 99999999999999,
		type : "size",
		onerror:"输入错误",
		validatetype:"InputValidator",
		empty:{leftempty:true,rightempty:true,leftemptyerror:null,rightemptyerror:null}
	};
	controlOptions = controlOptions || {};
	$.extend(true, settings, controlOptions);
	return this.each(function(){
		$.formValidator.appendValid(this.id,settings);
	});
};

$.fn.compareValidator = function(controlOptions)
{
	var settings = 
	{
		isvalid : false,
		desid : "",
		operateor :"=",
		onerror:"输入错误",
		validatetype:"CompareValidator"
	};
	controlOptions = controlOptions || {};
	$.extend(true, settings, controlOptions);
	return this.each(function(){
		$.formValidator.appendValid(this.id,settings);
	});
};

$.fn.regexValidator = function(controlOptions)
{
	var settings = 
	{
		isvalid : false,
		regexp : "",
		param : "i",
		datatype : "string",
		onerror:"输入的格式不正确",
		validatetype:"RegexValidator"
	};
	controlOptions = controlOptions || {};
	$.extend(true, settings, controlOptions);
	return this.each(function(){
		$.formValidator.appendValid(this.id,settings);
	});
};

$.fn.functionValidator = function(controlOptions)
{
	var settings = 
	{
		isvalid : true,
		fun : function(){this.isvalid = true;},
		validatetype:"FunctionValidator",
		onerror:"输入错误"
	};
	controlOptions = controlOptions || {};
	$.extend(true, settings, controlOptions);
	return this.each(function(){
		$.formValidator.appendValid(this.id,settings);
	});
};

$.fn.ajaxValidator = function(controlOptions)
{
	var settings = 
	{
		isvalid : false,
		lastValid : "",
		type : "GET",
		url : "",
		addidvalue : true,
		datatype : "html",
		data : "",
		async : true,
		cache : false,
		beforesend : function(){return true;},
		success : function(){return true;},
		complete : function(){},
		processdata : false,
		error : function(){},
		buttons : null,
		onerror:"服务器校验没有通过",
		onwait:"正在等待服务器返回数据",
		validatetype:"AjaxValidator"
	};
	controlOptions = controlOptions || {};
	$.extend(true, settings, controlOptions);
	return this.each(function()
	{
		$.formValidator.appendValid(this.id,settings);
	});
};

$.fn.defaultPassed = function(onshow)
{
	return this.each(function()
	{
		var settings = this.settings;
		for ( var i = 1 ; i < settings.length ; i ++ )
		{   
			settings[i].isvalid = true;
			if(!$.formValidator.getInitConfig(settings[0].validatorgroup).alertmessage){
				var ls_style = "onSuccess";
				if(onshow){ls_style="onShow";};
				$.formValidator.setTipState(settings[0].tipid,ls_style,settings[0].oncorrect);
			}
		}
	});
};

$.fn.unFormValidator = function(unbind)
{
	return this.each(function()
	{
		this.settings[0].bind = !unbind;
		if(unbind){
			$("#"+this.settings[0].tipid).hide();
		}else{
			$("#"+this.settings[0].tipid).show();
		}
	});
};


})(jQuery);


function getElementWidth(objectId) {
	x = document.getElementById(objectId);
	return x.offsetWidth;
}

function getAbsoluteLeft(objectId) {
	o = document.getElementById(objectId);
	oLeft = o.offsetLeft;
	while(o.offsetParent!=null) {
		oParent = o.offsetParent;
		oLeft += oParent.offsetLeft;
		o = oParent;
	}
	return oLeft;
}

function getAbsoluteTop(objectId) {
	o = document.getElementById(objectId);
	oTop = o.offsetTop;
	while(o.offsetParent!=null) {
		oParent = o.offsetParent;
		oTop += oParent.offsetTop;
		o = oParent;
	}
	return oTop;
}

var regexEnum = 
{
	intege:"^-?[1-9]\\d*$",					//整数
	intege1:"^[1-9]\\d*$",					//正整数
	intege2:"^-[1-9]\\d*$",					//负整数
	num:"^([+-]?)\\d*\\.?\\d+$",			//数字
	num1:"^[1-9]\\d*|0$",					//正数（正整数 + 0）
	num2:"^-[1-9]\\d*|0$",					//负数（负整数 + 0）
	decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
	decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",	//正浮点数
	decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",	//负浮点数
	decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",	//浮点数
	decmal4:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",	//非负浮点数（正浮点数 + 0）
	decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",	//非正浮点数（负浮点数 + 0）

	email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
	color:"^[a-fA-F0-9]{6}$",				//颜色
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url
	chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//仅中文
	ascii:"^[\\x00-\\xFF]+$",				//仅ACSII字符
	zipcode:"^\\d{6}$",						//邮编
	mobile:"^(13|14|15|18|16|17|19)[0-9]{9}$",				//手机
	ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
	notempty:"^\\S+$",						//非空
	picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	//图片
	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
	tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
	username:"^\\w+$",						//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
	letter:"^[A-Za-z]+$",					//字母
	letter_u:"^[A-Z]+$",					//大写字母
	letter_l:"^[a-z]+$",					//小写字母
	idcard:"^[1-9]([0-9]{14}|[0-9]{17})$"	//身份证
};

var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};

function isCardID(sId){ 
//	var iSum=0 ;
//	var info="" ;
//	if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误"; 
//	sId=sId.replace(/x$/i,"a"); 
//	if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法"; 
//	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2)); 
//	var d=new Date(sBirthday.replace(/-/g,"/")) ;
//	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法"; 
//	for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
//	if(iSum%11!=1) return "你输入的身份证号非法"; 
	
	var userNoPattern1 = /^[0-9]{15}$/;
	var userNoPattern2 = /^[0-9]{17}[0-9]{1}|x{1}|X{1}$/;
	var isOk1 = userNoPattern1.test(sId);
	var isOk2 = userNoPattern2.test(sId);
	if(!isOk1 && !isOk2)
	{
		return "身份证号格式错误!";
	}
	return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女") 
} 


//验证电话号码
function checkPhone(phones)
{
	var phonePattern = /^((\+86)?13\d{9}|(0\d{2}-\d{8}(-\d{2,4})?|0\d{3}-\d{7}(-\d{2,4})?))$/;
	//var phonePattern=(^(\d{2,4}[-_－—]?)?\d{3,8}([-_－—]?\d{3,8})?([-_－—]?\d{1,7})?$)|(^0?1[35]\d{9}$);
	var phonePattern1=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	var telePattern=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	var phones = phones.split("_");	
	if(phones!=null && phones.length>0)
		{
			for(var i=0;i<phones.length;i++)
			{
				if(phones[i]!=null && phones[i]!="" && ! phonePattern.test(phones[i])&&!phonePattern1.test(phones[i])&&!telePattern.test(phones[i]))
				{
				 return	"请正确输入，多个号码请以'_'分隔!";
				}
			}
		
		return true;
	}
	return true;
}



//短时间，形如 (13:04:06)
function isTime(str)
{
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) {return false;}
	if (a[1]>24 || a[3]>60 || a[4]>60)
	{
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str)
{
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
	if(r==null)return false; 
	var d= new Date(r[1], r[3]-1, r[4]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
	var r = str.match(reg); 
	if(r==null) return false; 
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}
