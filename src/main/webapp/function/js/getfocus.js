$(function(){
	 /*
    进入页面第一个输入文本框处于获得焦点
    */
    function InputFocus()
        {
             var inputlist = $("input");
             for(var i=0;i<inputlist.length;i++)
             {
                if(inputlist[i].type == "text" && inputlist[i].style.display.toLowerCase() != "none")
                {                
                    inputlist[i].focus();
                    break;
                }
             }
        }
	if(!window.attachEvent && window.addEventListener)
	{
	  window.attachEvent = HTMLElement.prototype.attachEvent=
	  document.attachEvent = function(en, func, cancelBubble)
	  {
		var cb = cancelBubble ? true : false;
		this.addEventListener(en.toLowerCase().substr(2), func, cb);
	  };
	}

	window.attachEvent("onload",InputFocus);

});

