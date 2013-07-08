function ssq_initTime() {
	var temper = $("#ssq_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#ssq_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#ssq_hour").html(hoursStr);
	$("#ssq_minute").html(minutesStr);
	$("#ssq_second").html(secondsStr);

}
//function ssq_takeCount() {
//	var temper = $("#ssq_time").text();
//	var tms = [];
//	var dt = new Date(temper.replace(/-/g, "/"));
//	var td = dt.getTime();
//	tms[0] = td - (new Date()).getTime();
//
//	for (var i = 0,
//	j = tms.length; i < j; i++) {
//		setTimeout("ssq_takeCount()", 1000);
//		tms[i] -= 1000;
//		//计算天、时、分、秒、
//		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
//		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
//		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
//		var seconds = Math.floor(tms[i] / 1000) % 60;
//		if (days < 0) days = 0;
//		if (hours < 0) hours = 0;
//		if (minutes < 0) minutes = 0;
//		if (seconds < 0) seconds = 0;
//		//将天、时、分、秒插入到html中
//		$("#ssq_day").html(days);
//		var hoursStr = hours + "";
//		if (hours < 10) {
//			hoursStr = "0" + hoursStr;
//		}
//		var minutesStr = minutes + "";
//		if (minutesStr < 10) {
//			minutesStr = "0" + minutesStr;
//		}
//		var secondsStr = seconds + "";
//		if (seconds < 10) {
//			secondsStr = "0" + secondsStr;
//		}
//		$("#ssq_hour").html(hoursStr);
//		$("#ssq_minute").html(minutesStr);
//		$("#ssq_second").html(secondsStr);
//	}
//}
//setTimeout("ssq_takeCount()", 1000);
////////////////////////////////////////////////////////////////////////////////////////////	  
function pls_initTime() {
	var temper = $("#pls_time").text();
	alert(temper);
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#pls_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#pls_hour").html(hoursStr);
	$("#pls_minute").html(minutesStr);
	$("#pls_second").html(secondsStr);

}
function pls_takeCount() {
	var temper = $("#pls_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("pls_takeCount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		$("#pls_day").html(days);
		var hoursStr = hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#pls_hour").html(hoursStr);
		$("#pls_minute").html(minutesStr);
		$("#pls_second").html(secondsStr);
	}
}
setTimeout("pls_takeCount()", 1000);

////////////////////////////////////////////////////////////////////////////////////////////		  
function qlc_initTime() {
	var temper = $("#qlc_time").text();
	alert(temper);
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#qlc_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#qlc_hour").html(hoursStr);
	$("#qlc_minute").html(minutesStr);
	$("#qlc_second").html(secondsStr);

}
function qlc_takeCount() {
	var temper = $("#qlc_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("qlc_takeCount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		$("#qlc_day").html(days);
		var hoursStr = hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#qlc_hour").html(hoursStr);
		$("#qlc_minute").html(minutesStr);
		$("#qlc_second").html(secondsStr);
	}
}
setTimeout("qlc_takeCount()", 1000);
////////////////////////////////////////////////////////////////////////////////////////////
function qxc_initTime() {
	var temper = $("#qlc_time").text();
	alert(temper);
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#qxc_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#qxc_hour").html(hoursStr);
	$("#qxc_minute").html(minutesStr);
	$("#qxc_second").html(secondsStr);

}
function qxc_takeCount() {
	var temper = $("#qxc_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("qxc_takeCount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		$("#qxc_day").html(days);
		var hoursStr = hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#qxc_hour").html(hoursStr);
		$("#qxc_minute").html(minutesStr);
		$("#qxc_second").html(secondsStr);
	}
}
setTimeout("qxc_takeCount()", 1000);

////////////////////////////////////////////////////////////////////////////////////////////		  
function plw_initTime() {
	var temper = $("#plw_time").text();
	alert(temper);
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#plw_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#plw_hour").html(hoursStr);
	$("#plw_minute").html(minutesStr);
	$("#plw_second").html(secondsStr);

}
function plw_takeCount() {
	var temper = $("#plw_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("plw_takeCount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		$("#plw_day").html(days);
		var hoursStr = hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#plw_hour").html(hoursStr);
		$("#plw_minute").html(minutesStr);
		$("#plw_second").html(secondsStr);
	}
}
setTimeout("plw_takeCount()", 1000);
////////////////////////////////////////////////////////////////////////////////////////////		  
function dlt_initTime() {
	var temper = $("#dlt_time").text();
	alert(temper);
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#dlt_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#dlt_hour").html(hoursStr);
	$("#dlt_minute").html(minutesStr);
	$("#dlt_second").html(secondsStr);

}
function dlt_takeCount() {
	var temper = $("#dlt_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("dlt_takeCount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		$("#dlt_day").html(days);
		var hoursStr = hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#dlt_hour").html(hoursStr);
		$("#dlt_minute").html(minutesStr);
		$("#dlt_second").html(secondsStr);
	}
}
setTimeout("dlt_takeCount()", 1000);
////////////////////////////////////////////////////////////////////////////////////////////		  
function sd_initTime() {
	var temper = $("#sd_time").text();
	alert(temper);
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	//计算天、时、分、秒、
	var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
	var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
	var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
	var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
	if (days < 0) days = 0;
	if (hours < 0) hours = 0;
	if (minutes < 0) minutes = 0;
	if (seconds < 0) seconds = 0;
	//将天、时、分、秒插入到html中
	$("#sd_day").html(days);
	var hoursStr = hours + "";
	if (hours < 10) {
		hoursStr = "0" + hoursStr;
	}
	var minutesStr = minutes + "";
	if (minutesStr < 10) {
		minutesStr = "0" + minutesStr;
	}
	var secondsStr = seconds + "";
	if (seconds < 10) {
		secondsStr = "0" + secondsStr;
	}
	$("#sd_hour").html(hoursStr);
	$("#sd_minute").html(minutesStr);
	$("#sd_second").html(secondsStr);

}
function sd_takeCount() {
	var temper = $("#sd_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("sd_takeCount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		$("#sd_day").html(days);
		var hoursStr = hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#sd_hour").html(hoursStr);
		$("#sd_minute").html(minutesStr);
		$("#sd_second").html(secondsStr);
	}
}
setTimeout("sd_takeCount()", 1000);
//////////////////////////////////////////////////////////////////////////////////////////////////
function ssq_takeCountAccount() {
	var temper = $("#ssq_time").text();
	var tms = [];
	var dt = new Date(temper.replace(/-/g, "/"));
	var td = dt.getTime();
	tms[0] = td - (new Date()).getTime();

	for (var i = 0,
	j = tms.length; i < j; i++) {
		setTimeout("ssq_takeCountAccount()", 1000);
		tms[i] -= 1000;
		//计算天、时、分、秒、
		var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
		var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
		var seconds = Math.floor(tms[i] / 1000) % 60;
		if (days < 0) days = 0;
		if (hours < 0) hours = 0;
		if (minutes < 0) minutes = 0;
		if (seconds < 0) seconds = 0;
		//将天、时、分、秒插入到html中
		var hoursStr = days*24+hours + "";
		if (hours < 10) {
			hoursStr = "0" + hoursStr;
		}
		var minutesStr = minutes + "";
		if (minutesStr < 10) {
			minutesStr = "0" + minutesStr;
		}
		var secondsStr = seconds + "";
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		$("#ssq_hour").html(hoursStr);
		$("#ssq_minute").html(minutesStr);
		$("#ssq_second").html(secondsStr);
	}
}
setTimeout("ssq_takeCountAccount()", 1000);
////////////////////////////////////////////////////////////////////////////////////////////