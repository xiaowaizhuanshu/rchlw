$(function(){
	$("#brand").change(function(){
		var Page=1;
		$("#type option").remove();
		$("#type").append("<option value='' >-"+decodeURI(EncodeUtf8("请选择"))+"-</option>");

		switch ($("#brand").val()) {
		case "nokia":
			$("#selectedBrand").html(decodeURI(EncodeUtf8("诺基亚")));
			Page=1;
			getXml($("#brand").val());
			$("#wrap").show();
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#imgBrand").attr({"src":"../img/nokia/nokia.gif","alt":decodeURI(EncodeUtf8("诺基亚")),"title":decodeURI(EncodeUtf8("诺基亚"))});
			
			$("#type").append("<option value='2700c' >2700c</option>");
			$("#type").append("<option value='2730c' >2730c</option>");
			$("#type").append("<option value='3600s' >3600s</option>");
			$("#type").append("<option value='3602s' >3602s</option>");
			$("#type").append("<option value='3610a' >3610a</option>");
			$("#type").append("<option value='5000' >5000</option>");
			$("#type").append("<option value='5130' >5130</option>");
			$("#type").append("<option value='5220' >5220</option>");
			$("#type").append("<option value='5230' >5230</option>");
			$("#type").append("<option value='5233' >5233</option>");
			$("#type").append("<option value='5235' >5235</option>");
			$("#type").append("<option value='5300' >5300</option>");
			$("#type").append("<option value='5310' >5310</option>");
			$("#type").append("<option value='5320' >5320</option>");
			$("#type").append("<option value='5530' >5530</option>");
			$("#type").append("<option value='5530xm' >5530xm</option>");
			$("#type").append("<option value='5610' >5610</option>");
			$("#type").append("<option value='5630' >5630</option>");
			$("#type").append("<option value='5700' >5700</option>");
			$("#type").append("<option value='5800d' >5800d</option>");
			$("#type").append("<option value='5800i' >5800i</option>");
			$("#type").append("<option value='5800xm' >5800xm</option>");
			$("#type").append("<option value='6110Navigator' >6110Navigator</option>");
			$("#type").append("<option value='6120c' >6120c</option>");
			$("#type").append("<option value='6120ci' >6120ci</option>");
			$("#type").append("<option value='6122c' >6122c</option>");
			$("#type").append("<option value='6131' >6131</option>");
			$("#type").append("<option value='6202c' >6202c</option>");
			$("#type").append("<option value='6208c' >6208c</option>");
			$("#type").append("<option value='6210s' >6210s</option>");
			$("#type").append("<option value='6220c' >6220c</option>");
			$("#type").append("<option value='6233' >6233</option>");
			$("#type").append("<option value='6270' >6270</option>");
			$("#type").append("<option value='6280' >6280</option>");
			$("#type").append("<option value='6288' >6288</option>");
			$("#type").append("<option value='6300' >6300</option>");
			$("#type").append("<option value='6303c' >6303c</option>");
			$("#type").append("<option value='6500c' >6500c</option>");
			$("#type").append("<option value='6500s' >6500s</option>");
			$("#type").append("<option value='6600s' >6600s</option>");
			$("#type").append("<option value='6700c' >6700c</option>");
			$("#type").append("<option value='6730' >6730</option>");
			$("#type").append("<option value='7100s' >7100s</option>");
			$("#type").append("<option value='7210c' >7210c</option>");
			$("#type").append("<option value='7212c' >7212c</option>");
			$("#type").append("<option value='7310' >7310</option>");
			$("#type").append("<option value='7310c' >7310c</option>");
			$("#type").append("<option value='7370' >7370</option>");
			$("#type").append("<option value='7373' >7373</option>");
			$("#type").append("<option value='7500' >7500</option>");
			$("#type").append("<option value='7510a' >7510a</option>");
			$("#type").append("<option value='7610s' >7610s</option>");
			$("#type").append("<option value='7612s' >7612s</option>");
			$("#type").append("<option value='8600' >8600</option>");
			$("#type").append("<option value='E50' >E50</option>");
			$("#type").append("<option value='E62' >E62</option>");
			$("#type").append("<option value='E63' >E63</option>");
			$("#type").append("<option value='E65' >E65</option>");
			$("#type").append("<option value='E66' >E66</option>");
			$("#type").append("<option value='E71' >E71</option>");
			$("#type").append("<option value='E72' >E72</option>");
			$("#type").append("<option value='N5611' >N5611</option>");
			$("#type").append("<option value='N71' >N71</option>");
			$("#type").append("<option value='N73' >N73</option>");
			$("#type").append("<option value='N7300' >N7300</option>");
			$("#type").append("<option value='N76' >N76</option>");
			$("#type").append("<option value='N78' >N78</option>");
			$("#type").append("<option value='N79' >N79</option>");
			$("#type").append("<option value='N80' >N80</option>");
			$("#type").append("<option value='N81' >N81</option>");
			$("#type").append("<option value='N82' >N82</option>");
			$("#type").append("<option value='N85' >N85</option>");
			$("#type").append("<option value='N90' >N90</option>");
			$("#type").append("<option value='N93' >N93</option>");
			$("#type").append("<option value='N93i' >N93i</option>");
			$("#type").append("<option value='N95' >N95</option>");
			$("#type").append("<option value='N958G' >N958G</option>");
			$("#type").append("<option value='N96' >N96</option>");
			$("#type").append("<option value='N97' >N97</option>");
			$("#type").append("<option value='N97i' >N97i</option>");
			$("#type").append("<option value='N97mini' >N97mini</option>");
			$("#type").append("<option value='X6' >X6</option>");
			$("#type").append("<option value='w240h320' >"+decodeURI(EncodeUtf8("屏幕"))+"240*320</option>");
			
			break;
		case "moto":
			$("#selectedBrand").html(decodeURI(EncodeUtf8("摩托罗拉")));
			Page=1;
			getXml($("#brand").val());
			$("#wrap").show();
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#imgBrand").attr({"src":"../img/moto/moto.gif","alt":decodeURI(EncodeUtf8("摩托罗拉")),"title":decodeURI(EncodeUtf8("摩托罗拉"))});
			
			$("#type").append("<option value='A1200' >A1200</option>");
			$("#type").append("<option value='A1200e' >A1200e</option>");
			$("#type").append("<option value='A1210' >A1210</option>");
			$("#type").append("<option value='A1600' >A1600</option>");
			$("#type").append("<option value='A728' >A728</option>");
			$("#type").append("<option value='A760' >A760</option>");
			$("#type").append("<option value='A760i' >A760i</option>");
			$("#type").append("<option value='A768' >A768</option>");
			$("#type").append("<option value='A768i' >A768i</option>");
			$("#type").append("<option value='A780' >A780</option>");
			$("#type").append("<option value='A810' >A810</option>");
			$("#type").append("<option value='E680' >E680</option>");
			$("#type").append("<option value='E680g' >E680g</option>");
			$("#type").append("<option value='E680i' >E680i</option>");
			$("#type").append("<option value='E6e' >E6e</option>");
			$("#type").append("<option value='V8' >V8</option>");
			$("#type").append("<option value='V82GB' >V82GB</option>");
			$("#type").append("<option value='Z6' >Z6</option>");
			$("#type").append("<option value='w240h320' >"+decodeURI(EncodeUtf8("屏幕"))+"240*320</option>");
				break;
		case "sony":
			$("#selectedBrand").html(decodeURI(EncodeUtf8("索爱")));
			Page=1;
			getXml($("#brand").val());
			$("#wrap").show();
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#imgBrand").attr({"src":"../img/sony/sony.gif","alt":decodeURI(EncodeUtf8("索爱")),"title":decodeURI(EncodeUtf8("索爱"))});
			
			$("#type").append("<option value='C702' >C702</option>");
			$("#type").append("<option value='C702c' >C702c</option>");
			$("#type").append("<option value='C902' >C902</option>");
			$("#type").append("<option value='C902c' >C902c</option>");
			$("#type").append("<option value='C905' >C905</option>");
			$("#type").append("<option value='C905c' >C905c</option>");
			$("#type").append("<option value='G502c' >G502c</option>");
			$("#type").append("<option value='G700c' >G700c</option>");
			$("#type").append("<option value='G900c' >G900c</option>");
			$("#type").append("<option value='J105i' >J105i</option>");
			$("#type").append("<option value='K790' >K790</option>");
			$("#type").append("<option value='K790c' >K790c</option>");
			$("#type").append("<option value='K818c' >K818c</option>");
			$("#type").append("<option value='K850i' >K850i</option>");
			$("#type").append("<option value='K858c' >K858c</option>");
			$("#type").append("<option value='M600i' >M600i</option>");
			$("#type").append("<option value='M608c' >M608c</option>");
			$("#type").append("<option value='S500c' >S500c</option>");
			$("#type").append("<option value='S700c' >S700c</option>");
			$("#type").append("<option value='S700i' >S700i</option>");
			$("#type").append("<option value='SES700' >SES700</option>");
			$("#type").append("<option value='T658' >T658</option>");
			$("#type").append("<option value='T707' >T707</option>");
			$("#type").append("<option value='T715' >T715</option>");
			$("#type").append("<option value='U100' >U100</option>");
			$("#type").append("<option value='W508' >W508</option>");
			$("#type").append("<option value='W580c' >W580c</option>");
			$("#type").append("<option value='W595' >W595</option>");
			$("#type").append("<option value='W595c' >W595c</option>");
			$("#type").append("<option value='W715' >W715</option>");
			$("#type").append("<option value='W760' >W760</option>");
			$("#type").append("<option value='W760c' >W760c</option>");
			$("#type").append("<option value='W830c' >W830c</option>");
			$("#type").append("<option value='W880i' >W880i</option>");
			$("#type").append("<option value='W888c' >W888c</option>");
			$("#type").append("<option value='W900i' >W900i</option>");
			$("#type").append("<option value='W908c' >W908c</option>");
			$("#type").append("<option value='W910i' >W910i</option>");
			$("#type").append("<option value='W950' >W950</option>");
			$("#type").append("<option value='W958c' >W958c</option>");
			$("#type").append("<option value='W958cP1c' >W958cP1c</option>");
			$("#type").append("<option value='W980' >W980</option>");
			$("#type").append("<option value='W995' >W995</option>");
			$("#type").append("<option value='w240h320' >"+decodeURI(EncodeUtf8("屏幕"))+"240*320</option>");
			break;
		case "samsung":
			$("#selectedBrand").html(decodeURI(EncodeUtf8("三星")));
			Page=1;
			getXml($("#brand").val());
			$("#wrap").show();
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#imgBrand").attr({"src":"../img/samsung/samsung.gif","alt":decodeURI(EncodeUtf8("三星")),"title":decodeURI(EncodeUtf8("三星"))});
			
			$("#type").append("<option value='B5702C' >B5702C</option>");
			$("#type").append("<option value='B5712C' >B5712C</option>");
			$("#type").append("<option value='C3050c' >C3050c</option>");
			$("#type").append("<option value='C3610c' >C3610c</option>");
			$("#type").append("<option value='D608' >D608</option>");
			$("#type").append("<option value='D788' >D788</option>");
			$("#type").append("<option value='D808' >D808</option>");
			$("#type").append("<option value='D820' >D820</option>");
			$("#type").append("<option value='D828' >D828</option>");
			$("#type").append("<option value='D838' >D838</option>");
			$("#type").append("<option value='D848' >D848</option>");
			$("#type").append("<option value='D880' >D880</option>");
			$("#type").append("<option value='D888' >D888</option>");
			$("#type").append("<option value='D900' >D900</option>");
			$("#type").append("<option value='D908' >D908</option>");
			$("#type").append("<option value='D908i' >D908i</option>");
			$("#type").append("<option value='D988' >D988</option>");
			$("#type").append("<option value='E2210C' >E2210C</option>");
			$("#type").append("<option value='E838' >E838</option>");
			$("#type").append("<option value='E840' >E840</option>");
			$("#type").append("<option value='E848' >E848</option>");
			$("#type").append("<option value='E848i' >E848i</option>");
			$("#type").append("<option value='E898' >E898</option>");
			$("#type").append("<option value='E900' >E900</option>");
			$("#type").append("<option value='E908' >E908</option>");
			$("#type").append("<option value='E958' >E958</option>");
			$("#type").append("<option value='F488' >F488</option>");
			$("#type").append("<option value='F488E' >F488E</option>");
			$("#type").append("<option value='G508E' >G508E</option>");
			$("#type").append("<option value='G608' >G608</option>");
			$("#type").append("<option value='G618' >G618</option>");
			$("#type").append("<option value='G808' >G808</option>");
			$("#type").append("<option value='G808E' >G808E</option>");
			$("#type").append("<option value='G818E' >G818E</option>");
			$("#type").append("<option value='GT-S3930' >GT-S3930</option>");
			$("#type").append("<option value='GT-S3930C-CMCC' >GT-S3930C-CMCC</option>");
			$("#type").append("<option value='I450' >I450</option>");
			$("#type").append("<option value='I458' >I458</option>");
			$("#type").append("<option value='I688' >I688</option>");
			$("#type").append("<option value='I7110C' >I7110C</option>");
			$("#type").append("<option value='I728' >I728</option>");
			$("#type").append("<option value='I8510C' >I8510C</option>");
			$("#type").append("<option value='I900' >I900</option>");
			$("#type").append("<option value='J218' >J218</option>");
			$("#type").append("<option value='L258' >L258</option>");
			$("#type").append("<option value='L288' >L288</option>");
			$("#type").append("<option value='L878E' >L878E</option>");
			$("#type").append("<option value='M3318' >M3318</option>");
			$("#type").append("<option value='M3318C' >M3318C</option>");
			$("#type").append("<option value='M3510C' >M3510C</option>");
			$("#type").append("<option value='P858' >P858</option>");
			$("#type").append("<option value='S3500C' >S3500C</option>");
			$("#type").append("<option value='S3930C' >S3930C</option>");
			$("#type").append("<option value='S5050C' >S5050C</option>");
			$("#type").append("<option value='S5200C' >S5200C</option>");
			$("#type").append("<option value='S6700' >S6700</option>");
			$("#type").append("<option value='U308' >U308</option>");
			$("#type").append("<option value='U600' >U600</option>");
			$("#type").append("<option value='U608' >U608</option>");
			$("#type").append("<option value='U700' >U700</option>");
			$("#type").append("<option value='U708' >U708</option>");
			$("#type").append("<option value='U708E' >BU708E</option>");
			$("#type").append("<option value='U808E' >U808E</option>");
			$("#type").append("<option value='U908' >U908</option>");
			$("#type").append("<option value='U908E' >U908E</option>");
			$("#type").append("<option value='w240h320' >"+decodeURI(EncodeUtf8("屏幕"))+"240*320</option>");
		break;
		case "android":
			$("#selectedBrand").html(decodeURI(EncodeUtf8("(android)安卓")));
			Page=1;
			getXml($("#brand").val());
			$("#wrap").show();
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#imgBrand").attr({"src":"../img/android/android.png","alt":decodeURI(EncodeUtf8("(android)安卓")),"title":decodeURI(EncodeUtf8("(android)安卓"))});
			
			$("#type").append("<option value='HTC MagicG2' >HTC MagicG2</option>");
			$("#type").append("<option value='HTC Hero(G3)' >HTC Hero(G3)</option>");
			$("#type").append("<option value='HTC Espresso' >HTC Espresso</option>");
			$("#type").append("<option value='HTC Droid Eris' >HTC Droid Eris</option>");
			$("#type").append("<option value='HTC Legend(G6)' >HTC Legend(G6)</option>");
			$("#type").append("<option value='DOPOD A6288' >"+decodeURI(EncodeUtf8("多普达"))+"  A6288</option>");
			$("#type").append("<option value='SamSung i899' >SamSung i899</option>");
			$("#type").append("<option value='SamSung i7500U' >SamSung i7500U</option>");
			$("#type").append("<option value='SamSung I6500U' >SamSung I6500U</option>");
			$("#type").append("<option value='SamSung i5700(Spica)' >SamSung i5700(Spica)</option>");
			$("#type").append("<option value='SamSung M910' >SamSung M910</option>");
			$("#type").append("<option value='LG GW620' >LG GW620</option>");
			$("#type").append("<option value='MOTO ME501' >MOTO ME501</option>");
			$("#type").append("<option value='MOTO ME600' >MOTO ME600</option>");
			$("#type").append("<option value='HUAWEI U8220' >"+decodeURI(EncodeUtf8("华为"))+" U8220</option>");
			$("#type").append("<option value='SHOUPAI A60' >"+decodeURI(EncodeUtf8("首派"))+" A60</option>");
			$("#type").append("<option value='Google Nexus One' >"+decodeURI(EncodeUtf8("谷歌"))+" Nexus One</option>");
			$("#type").append("<option value='SamSung GT-i9000' >SamSung GT-i9000</option>");
			$("#type").append("<option value='AIGO E700' >"+decodeURI(EncodeUtf8("爱国者"))+"E700</option>");
			$("#type").append("<option value='HUAWEI C8600' >"+decodeURI(EncodeUtf8("华为"))+"C8600</option>");
			$("#type").append("<option value='MOTO XT800' >MOTO XT800</option>");
		break;
		default:
			$("#wrap").hide();
			$("#selectedBrand").html("");
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#imgBrand").attr("src","../img/mobilephonebrand.gif");
			$("#aDownload").html("");
			$("#Content").html("");
			//$("#type").append("<option value='' >暂不支持</option>");
			break;
		}
	});
});
$(function(){
	$("#type").change(function(){
		
		var urlPrefix = "<a href='web/getclienttemp.jsp?path=";//客户端下载计数
		var urlSuffix = " ><img src='../img/an-ljxz.jpg' title='"+decodeURI(EncodeUtf8("立即下载"))+"' /></a>";
		var androidContent="";
		var urlNotFound = "<span onclik='alert('"+decodeURI(EncodeUtf8("没有找到！"))+"')'>" +
		                  "<img src='../img/an-ljxz.jpg' title='"+decodeURI(EncodeUtf8("立即下载"))+"' /></span>";	
		
		$("selectedType").empty();
		switch($("#type").find("option:selected").text()){
		case $("#type").find("option:selected").text():
			$("#selectedType").html($("#type").find("option:selected").text());
		switch($("#brand").val()){
		case "nokia":
			$("#imgType").attr({"src": "../img/nokia/nokia"+ $("#type").find("option:selected").val() + ".gif","alt":$("#type").find("option:selected").val(),"title":$("#type").find("option:selected").val()});
			
			switch ($("#type").val()) {
			case '5230':
			case '5233':
			case '5235':
			case '5530':
			case '5530xm':
			case '5800d':
			case '5800xm':
			case '5800i':
			case 'N97':
			case 'N97i':
			case 'N97mini':
			case 'X6':			
				$("#aDownload").html( urlPrefix + "5800&name=ruyicai_5800.jar'" + urlSuffix);
				break;
			case '2700c':
			case '2730c':
			case '3600s':
			case '3602s':
			case '3610a':
			case '5000':
			case '5130':
			case '5220':
			case '5300':
			case '5310':
			case '5610':
			case '6131':
			case '6202c':
			case '6208c':
			case '6233':
			case '6270':
			case '6280':
			case '6288':
			case '6300':
			case '6303c':
			case '6500c':
			case '6500s':
			case '6600s':
			case '6700c':
			case '7210c':
			case '7212c':
			case '7310':
			case '7310c':
			case '7370':
			case '7373':
			case '7500':
			case '7510a':
			case '7610s':
			case '7612s':
			case '8600':
			case 'N5611':			
				$("#aDownload").html( urlPrefix + "N7370&name=ruyicai_N7370.jar'" + urlSuffix);
				break;			
			case '5320':
			case '5630':
			case '5700':
			case '6110Navigator':
			case '6120c':
			case '6120ci':
			case '6122c':
			case '6210s':
			case '6220c':
			case '6730':
			case 'E50':
			case 'E65':
			case 'E66':
			case 'N71':
			case 'N73':
			case 'N7300':
			case 'N76':
			case 'N78':
			case 'N79':	
			case 'N80':
			case 'N81':
			case 'N82':
			case 'N85':
			case 'N90':
			case 'N93':
			case 'N93i':
			case 'N95':
			case 'N958G':
			case 'N96':
				$("#aDownload").html(urlPrefix + "N73&name=ruyicai_N73.jar'" + urlSuffix);
				break;
			case 'w240h320':			
				$("#aDownload").html( urlPrefix + "generic&name=ruyicai_TY.jar'" + urlSuffix);
				break;
			case '7100s':
			case 'E62':
			case 'E63':
			case 'E71':
			case 'E72':	
				$("#aDownload").html( urlPrefix + "E71&name=ruyicai_E71.jar'" + urlSuffix);						
				break;
			default:			
				$("#aDownload").html(urlNotFound);
			break;
			}
			
			break;
		case "moto":
			$("#imgType").attr({"src": "../img/moto/moto"+ $("#type").find("option:selected").val() + ".gif","alt":$("#type").find("option:selected").val(),"title":$("#type").find("option:selected").val()});
			
			switch ($("#type").val()) {		
			case 'V8':
			case 'V82GB':
			case 'Z6':
				$("#aDownload").html(urlPrefix + "V8&name=ruyicai_V8.jar'" + urlSuffix);					
				break;
			case 'A1210':
				$("#aDownload").html(urlPrefix + "A1210&name=ruyicai_A1210.jar'" + urlSuffix);
				break;
			case 'A1200':
			case 'A1200e':
			case 'A1600':
			case 'A728':
			case 'A760':
			case 'A760i':
			case 'A768':
			case 'A768i':
			case 'A780':		
			case 'E680':
			case 'E680g':
			case 'E680i':
			case 'E6e':
			case 'ROKRE6':
				$("#aDownload").html(urlPrefix + "A1200&name=ruyicai_A1200.jar'" + urlSuffix);					
				break;
			case 'w240h320':
				$("#aDownload").html(urlPrefix + "generic&name=ruyicai_TY.jar'" + urlSuffix);				
				break;
			default:
				$("#aDownload").html(urlNotFound);	
				break;
			}

			break;
		case "sony":
			$("#imgType").attr({"src": "../img/sony/sony"+ $("#type").find("option:selected").val() + ".gif","alt":$("#type").find("option:selected").val(),"title":$("#type").find("option:selected").val()});
			
			switch ($("#type").val()) {
			case 'Elm':
			case 'C510c':
			case 'C702':
			case 'C702c':
			case 'C901':
			case 'C902':
			case 'C902c':
			case 'C903':
			case 'C905':
			case 'C905c':		
			case 'G502c':
			case 'G700c':
			case 'G702':
			case 'G705':
			case 'G900c':
			case 'G902':
			case 'J105i':
			case 'JalouC510':
			case 'K660':
			case 'K660i':
			case 'K770':
			case 'K770i':
			case 'K790':
			case 'K790c':
			case 'K790i':		
			case 'K800':
			case 'K800i':
			case 'K810':
			case 'K818c':
			case 'K850i':
			case 'K858':
			case 'K858c':
			case 'K880i':
			case 'K900i':
			case 'M600i':
			case 'Naite':
			case 'P700':
			case 'S500':
			case 'S500c':
			case 'S500i':
			case 'S700':			
			case 'S700c':
			case 'S700i':
			case 'S710':
			case 'SES700':
			case 'T650':
			case 'T658':
			case 'T658c':
			case 'T700':
			case 'T707':
			case 'T715':
			case 'U100':
			case 'W508':
			case 'W518':
			case 'W580':
			case 'W580c':
			case 'W595':
			case 'W595c':
			case 'W705':
			case 'W715':
			case 'W760':
			case 'W760c':
			case 'W830':
			case 'W830c':
			case 'W850':
			case 'W858':
			case 'W880':
			case 'W880i':
			case 'W888':
			case 'W888c':
			case 'W898':
			case 'W890':
			case 'W900i':
			case 'W902':
			case 'W908c':
			case 'W910i':
			case 'W980':
			case 'W995':
			case 'Xmini':
			case 'Z1020':
			case 'Z750':
			case 'Z750i':
			case 'Z770':
			case 'Z770i':
			case 'Z780':
				$("#aDownload").html(urlPrefix + "K790&name=ruyicai_K790.jar'" + urlSuffix);					
				break;
			case 'M608c':	
			case 'W950':
			case 'W958c':
			case 'W958cP1c':
				$("#aDownload").html(urlPrefix + "M600&name=ruyicai_M600.jar'" + urlSuffix);				
				break;
			case 'w240h320':
				$("#aDownload").html(urlPrefix + "generic&name=ruyicai_TY.jar'" + urlSuffix);				
				break;
			default:
				$("#aDownload").html(urlNotFound);	
				break;
			}
			
			break;
		case "samsung":
			$("#imgType").attr({"src": "../img/samsung/samsung"+ $("#type").find("option:selected").val() + ".gif","alt":$("#type").find("option:selected").val(),"title":$("#type").find("option:selected").val()});
			
			switch ($("#type").val()) {
			case 'I900':
				$("#aDownload").html(urlPrefix + "SGH-I900&name=ruyicai_SGH-I900.jar'" + urlSuffix);				
				break;
			case 'B5702C':
			case 'B5712C':
			case 'C3050c':
			case 'C3610c':
			case 'D608':
			case 'D788':
			case 'D808':
			case 'D820':
			case 'D828':
			case 'D838':
			case 'D848':
			case 'D880':
			case 'D888':
			case 'D900':
			case 'D908':
			case 'D908i':
			case 'D988':
			case 'E2210C':
			case 'E838':
			case 'E840':
			case 'E848':
			case 'E848i':
			case 'E898':
			case 'E900':
			case 'E908':
			case 'E958':
			case 'F488':
			case 'F488E':				
			case 'G508E':
			case 'G608':
			case 'G618':
			case 'G808':
			case 'G808E':
			case 'G818E':
			case 'GT-S3930':
			case 'GT-S3930C-CMCC':
			case 'I450':
			case 'I458':
			case 'I688':	
			case 'I7110C':
			case 'I728':
			case 'I8510C':
			case 'L258':
			case 'L288':
			case 'L878E':
			case 'J218':
			case 'M3318':
			case 'M3318C':
			case 'M3510C':
			case 'M7500C':
			case 'P858':
			case 'S3930C':
			case 'S3500C':
			case 'S5050C':
			case 'S5200C':
			case 'S6700':			
			case 'U308':
			case 'U600':
			case 'U608':
			case 'U700':
			case 'U708':
			case 'U708E':
			case 'U808E':
			case 'U908E':
				$("#aDownload").html(urlPrefix + "D608&name=ruyicai_D608.jar'" + urlSuffix);					
				break;
			case 'w240h320':
				$("#aDownload").html(urlPrefix + "generic&name=ruyicai_TY.jar'" + urlSuffix);				
				break;
			default:
				$("#aDownload").html(urlNotFound);				
				break;
			}
			
			break;
		case "android":
			$("#imgType").attr({"src": "../img/android/android"+ $("#type").find("option:selected").val() + ".png","alt":$("#type").find("option:selected").val(),"title":$("#type").find("option:selected").val()});
			
			switch ($("#type").val()) {
			case 'HTC MagicG2':
			case 'HTC Hero(G3)':
			case 'HTC Espresso':
			case 'HTC Droid Eris':
			case 'HTC Legend(G6)':
			case 'DOPOD A6288':
			case 'SamSung i899':
			case 'SamSung i7500U':
			case 'SamSung I6500U':
			case 'SamSung i5700(Spica)':
			case 'SamSung M910':
			case 'LG GW620':
			case 'MOTO ME501':
			case 'MOTO ME600':
			case 'HUAWEI U8220':
			case 'SHOUPAI A60':
			case 'HUAWEI C8600':
				$("#aDownload").html("<a href='jar/android/RuyicaiAndroid_320480.apk'" + urlSuffix);
			  break;
			case 'Google Nexus One':
			case 'SamSung GT-i9000':
			case 'MOTO XT800':
				$("#aDownload").html("<a href='jar/android/RuyicaiAndroid_480800.apk'" + urlSuffix);
				break;
			case 'AIGO E700':
				$("#aDownload").html("<a href='jar/android/RuyicaiAndroid_800480.apk'" + urlSuffix);
				break;
			default:			
				$("#aDownload").html(urlNotFound);
			} 
			break;
		default:
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
			$("#aDownload").html(urlNotFound);
		break;
		
		}
		break;
		default:
			$("#selectedType").html("");
			$("#imgType").attr("src", "../img/mobilephonetype.gif");
		break;
		
		};
		
	});
});

/**
 * 说明   从xml文件中获取数据
 * @param xml_name xml文件名
 */
var arr=new Array();//保存从xml文件中得到的数据
var PageSize=10;//每页显示数据条数
var Page = 1;//当前页


function getXml(xml_name){ 
	$.ajax({
		url:"../downloadxml/"+xml_name+"Pic.xml", 
		dataType: 'xml',   
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
        error:function(xml){
			$("#TopInfo").html(decodeURI(EncodeUtf8("读取失败")));
		    $("#Content").html("<div style='padding:100px 0;text-align:center;'>"+decodeURI(EncodeUtf8("读取失败"))+"</div>");},  
        async: false , 
		success:function(xml){ 
		    
        	var Pages = Math.floor(($(xml).find("data").length - 1) / PageSize) + 1;
        	if(Page < 1)Page = 1;
        	if(Page > Pages)Page = Pages;
        	var Temp = "";
        	var BeginNO = (Page - 1) * PageSize + 1; //开始编号
        	var EndNO = Page * PageSize; //结束编号
        	if(EndNO > $(xml).find("data").length) EndNO = $(xml).find("data").length;
  		    if(EndNO == 0) BeginNO = 0;

    		//图片数据
    		var line = 1;
    		var sum = 0;
    		

        	$(xml).find("data").each(function(){ 

    		var datas=$(xml).find("data");
    		arr=new Array();
    		
    		for(var iData = 0; iData < datas.length; iData++) {
    	        arr.push(new Array(datas[iData].getAttribute("img"),datas[iData].getAttribute("title"),datas[iData].getAttribute("url")));
    	       }

    		  

    		  if(!(Page <= Pages)) Page = Pages;
    		  $("#TopInfo").html(decodeURI(EncodeUtf8("共有<strong>")) + $(xml).find("data").length +decodeURI(EncodeUtf8( "</strong>张图片&nbsp;&nbsp;当前显示 第")) + BeginNO + "-" + EndNO + decodeURI(EncodeUtf8("篇")));

    		  //分页
    		  if(Page != 1){
    			  Temp ='<a href="javascript:void(0)" onclick="GotoPage(1)">&lt;&lt;'+decodeURI(EncodeUtf8('首页'))+'</a> <a href="javascript:void(0)" onclick="GotoPage(' + (Page - 1) + ')">'+decodeURI(EncodeUtf8('上页'))+'</a>&nbsp;';
    			  }else{
    			  Temp = '&lt;&lt;'+decodeURI(EncodeUtf8('首页上页'))+'&nbsp;';}

    		  //完美的翻页列表 ：）
    		  var PageFrontSum = 5; //当页前显示个数
    		  var PageBackSum = 5; //当页后显示个数

    		  var PageFront = PageFrontSum - (Page - 1);
    		  var PageBack = PageBackSum - (Pages - Page);
    		  if(PageFront > 0 && PageBack < 0)PageBackSum += PageFront; //前少后多，前剩余空位给后
    		  if(PageBack > 0 && PageFront < 0)PageFrontSum += PageBack; //后少前多，后剩余空位给前

    		  var PageFrontBegin = Page - PageFrontSum;
    		  if(PageFrontBegin < 1)PageFrontBegin = 1;
    		  var PageFrontEnd = Page + PageBackSum;
    		  if(PageFrontEnd > Pages)PageFrontEnd = Pages;

    		  if(PageFrontBegin != 1) Temp += '<a href="javascript:void(0)" onclick="GotoPage(' + (Page - 10) + ')" title="'+decodeURI(EncodeUtf8('前  10页'))+'">..</a>';
    		  for(var i = PageFrontBegin;i < Page;i ++){
    		      Temp += ' <a href="javascript:void(0)" onclick="GotoPage(' + i + ')">' + i + '</a>';
    		  }
    		  Temp += ' <strong>' + Page + '</strong>';
    		  for(var i = Page + 1;i <= PageFrontEnd;i ++){
    		      Temp += ' <a href="javascript:void(0)" onclick="GotoPage(' + i + ')">' + i + '</a>';
    		  }
    		  if(PageFrontEnd != Pages) Temp += '<a href="javascript:void(0)" onclick="GotoPage(' + (Page + 10) + ')" title="'+decodeURI(EncodeUtf8('后 10页'))+'>..</a>';

    		  if(Page != Pages){Temp += '&nbsp;&nbsp;<a href="javascript:void(0)" onclick="GotoPage(' + (Page + 1) + ')">'+decodeURI(EncodeUtf8('下页'))+'</a> <a href="javascript:void(0)" onclick="GotoPage(' + Pages + ')">'+decodeURI(EncodeUtf8('末页'))+'&gt;&gt;</a>';}else{Temp += '&nbsp;&nbsp;'+decodeURI(EncodeUtf8('下页 末页'))+'&gt;&gt;';}

    		  $("#TopPageList").html(Temp);

    		  if(EndNO == 0){
    		      $("#Content").html('<div style="padding:100px 0;text-align:center;">'+decodeURI(EncodeUtf8('暂无图片'))+'</div>');
    		      return;
    		  }
    		  Temp = '<div class="Line_' + line + '">\n';
    		  for(var i = BeginNO - 1;i < EndNO;i ++){
    		      if(sum % 5 == 0 && sum != 0){
    		       line++;
    		       line = line == 3?1:line;
    		       Temp += '<div class="clearit"></div>\n</div>\n<div class="Line_' + line + '">\n';
    		      }
    		      Temp += '<div class="box">\n';
    		      Temp += '<table cellspacing="0"><tr><td><a href="' + arr[i][2] + '" target="_blank"><img border="0" src="' + arr[i][0] + '" alt="' + arr[i][1] + '" /></a></td></tr></table>\n';
    		      Temp += ' <p><a href="' + arr[i][2] + '" target="_blank" style="text-decoration: none;" border="0">' + arr[i][1] + '</a></p>\n';
    		      Temp += '</div>\n';
    		      sum ++;

    		  }
    		  Temp += '<div class="clearit"></div>\n</div>\n';

    		  $("#Content").html(Temp);
    		  if(navigator.appName == 'Microsoft Internet Explorer')setTimeout('ChrImg()',500);
		    
		    });
		    }
});

}



function GotoPage(num){ //跳转页
	  Page = num;
	  getXml($("#brand").val());
	  }

function ChrImg(){ //解决IE下图片渲染问题
	  var ImageArray = GetObj("Content").getElementsByTagName("img");
	  for(var i = 0;i < ImageArray.length;i++){
	      if(!ImageArray[i].complete) ImageArray[i].src = ImageArray[i].src;
	  }
	  }
