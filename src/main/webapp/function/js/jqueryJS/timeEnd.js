function initTime() {
    var temper = $("#endTime").text();
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
    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);

}
function takeCount() {
    var temper = $("#endTime").text();
    var tms = [];
    var dt = new Date(temper.replace(/-/g, "/"));
    var td = dt.getTime();
    tms[0] = td - (new Date()).getTime();

    for (var i = 0,j = tms.length; i < j; i++) {
        setTimeout("takeCount()", 1000);
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
        $("#day").html(days);
        $("#hour").html(hours);
        $("#minute").html(minutes);
        $("#second").html(seconds);
    }
}
setTimeout("takeCount()", 1000);