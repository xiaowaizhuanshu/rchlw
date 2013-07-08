var lastScrollY=0;
function heartBeat(divDis,divClose){ 
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body)
		diffY = document.body.scrollTop
	else
	    {/*Netscape stuff*/}
	
	percent=.1*(diffY-lastScrollY); 
	if(percent>0)percent=Math.ceil(percent); 
	else percent=Math.floor(percent); 
	document.getElementById(divDis).style.top=parseInt(document.getElementById(divDis).style.top)+percent+"px";
	document.getElementById(divClose).style.top=parseInt(document.getElementById(divClose).style.top)+percent+"px";
	lastScrollY=lastScrollY+percent; 
}
function close(divDis,divClose)
{
	document.getElementById(divDis).style.display='none';
	document.getElementById(divClose).style.display='none';
}
window.setInterval("heartBeat()",1);


//大通栏js
var time = 500;
var h = 0;
function addCount()
{
    if(time>0)
    {
        time--;
        h = h+5;
    }
    else
    {
        return;
    }
    if(h>400)  //高度
    {
        return;
    }
    document.getElementById("ads").style.display = "";
    document.getElementById("ads").style.height = h+"px";
    setTimeout("addCount()",30); 
}
window.onload = function showAds()
{
    addCount();
    setTimeout("noneAds()",4000); //停留时间自己适当调整
}

var T = 120;
var N = 400; //高度
function noneAds()
{
    if(T>0)
    {
        T--;
        N = N-5;
    }
    else
    {
        return;
    }
    if(N<0)
    {
        document.getElementById("ads").style.display = "none";
        return;
    }
    
    document.getElementById("ads").style.height = N+"px";
    setTimeout("noneAds()",30); 
}
