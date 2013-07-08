

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// 数字型彩票的通用函数
// 适用于3位数
//
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var d3_Z6 = 1;
var d3_Z3 = 2;
var d3_BZ = 3;

DigitalClass = function() 
{
    this.TotalFlags = new Array();
    this.Initialize();
}

DigitalClass.prototype = 
{
	// 标记初始化
    Initialize : function()
    {
        for(var i=0; i<1000; i++) {
            this.TotalFlags[i] = 0;
        }
    },

    // 判定号码的数字类型（奇=1、偶=2、大=4、小=8、质=16、合=32等）
    Type : function (n)
    {
        var f = 0;
        if( (n%2)==1 ) f = f | 1;								// 奇
        if( (n%2)==0 ) f = f | 2;								// 偶
        if( (n>4)    ) f = f | 4;								// 大
        if( (n<5)    ) f = f | 8;								// 小
        if( (n==1 || n==2 || n==3 || n==5 || n==7) ) f = f | 16;	// 质
        if( (n==0 || n==4 || n==6 || n==8 || n==9) ) f = f | 32;	// 合
        return f;
    },

    // 号码的类型 3豹子 2组三 1组六
    Group : function (a1, a2, a3)
    {
        if( a1==a2 && a2==a3) return d3_BZ;
        if( a1==a2 || a2==a3 || a3==a1) return d3_Z3;
        return d3_Z6;
    },

    FlagSet : function(a1, a2, a3)
    {
        this.TotalFlags[a1*100 + a2*10 + a3] = 1;
        this.TotalFlags[a1*100 + a3*10 + a2] = 1;
        this.TotalFlags[a2*100 + a1*10 + a3] = 1;
        this.TotalFlags[a2*100 + a3*10 + a1] = 1;
        this.TotalFlags[a3*100 + a1*10 + a2] = 1;
        this.TotalFlags[a3*100 + a2*10 + a1] = 1;
    },

    FlagGet : function(a1, a2, a3)
    {
        if(this.TotalFlags[a1*100 + a2*10 + a3] == 1) return 1;
        if(this.TotalFlags[a1*100 + a3*10 + a2] == 1) return 1;
        if(this.TotalFlags[a2*100 + a1*10 + a3] == 1) return 1;
        if(this.TotalFlags[a2*100 + a3*10 + a1] == 1) return 1;
        if(this.TotalFlags[a3*100 + a1*10 + a2] == 1) return 1;
        if(this.TotalFlags[a3*100 + a2*10 + a1] == 1) return 1;
        return 0;
    },

    Sum : function(v1,v2,v3)
    {
		return v1+v2+v3;
    },

    Odd : function(v1,v2,v3)
    {
		return (v1%2)+(v2%2)+(v3%2);
    },

    OddStyle : function(v1,v2,v3)
    {
        var rsl="";
        if( ((v1) % 2)==1)	rsl += "1";
        else				rsl += "2";
        if( ((v2) % 2)==1)	rsl += "1";
        else				rsl += "2";
        if( ((v3) % 2)==1)	rsl += "1";
        else				rsl += "2";
        return rsl;
    },

    Big : function(v1,v2,v3)
    {
        var a = ((v1)>4) ? 1 : 0;
        a += ((v2)>4) ? 1 : 0;
        a += ((v3)>4) ? 1 : 0;
        return a;
    },

    BigStyle : function(v1,v2,v3)
    {
        var rsl="";
        if( (v1) > 4 )	rsl += "1";
        else			rsl += "2";
        if( (v2) > 4 )	rsl += "1";
        else			rsl += "2";
        if( (v3) > 4 )	rsl += "1";
        else			rsl += "2";
        return rsl;
    },

    Prime : function(v1,v2,v3)
    {
        var a = ((v1)==1 || (v1)==2 || (v1)==3 || (v1)==5 || (v1)==7) ? 1 : 0;
        a += ((v2)==1 || (v2)==2 || (v2)==3 || (v2)==5 || (v2)==7) ? 1 : 0;
        a += ((v3)==1 || (v3)==2 || (v3)==3 || (v3)==5 || (v3)==7) ? 1 : 0;
        return a;
    },

    PrimeStyle : function(v1,v2,v3)
    {
        var rsl="";
        if( (v1)==1 || (v1)==2 || (v1)==3 || (v1)==5 || (v1)==7 ) rsl += "1";
        else						  rsl += "2";
        if( (v2)==1 || (v2)==2 || (v2)==3 || (v2)==5 || (v2)==7 ) rsl += "1";
        else						  rsl += "2";
        if( (v3)==1 || (v3)==2 || (v3)==3 || (v3)==5 || (v3)==7 ) rsl += "1";
        else						  rsl += "2";
        return rsl;
    },

    Distance : function(v1,v2,v3)
    {
        var a1 = Math.abs((v1) - (v2));
        var a2 = Math.abs((v2) - (v3));
        var a3 = (a2>a1) ? a2 : a1;
        a2 = Math.abs((v1) - (v3));
        a3 = (a2>a3) ? a2 : a3;
        return a3;
    },

    RoadStyle : function(v1,v2,v3)
    {
        return ((v1)%3) + "" + ((v2)%3) + "" + ((v3)%3);
    }
}

Digital = new DigitalClass();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// 数字型彩票的通用函数
// 适用于1-14位数
//
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

DigitalExtendClass = function() 
{
    this.value = new Array();
	for(var i=0; i<14; i++) this.value[i] = 0;
}

DigitalExtendClass.prototype = 
{
	// 标记初始化
	Initialize : function(str)
	{
		str = str.replace(/[^\d]/gi, "");
		for(var i=0; i<str.length; i++) {
			this.value[i] = parseInt(str.substr(i,1));
		}
	},

    // 号码的类型 3豹子 2组三 1组六
    Group : function (str)
    {
        if(str.length!=3) return 0;
		this.Initialize(str);
        if( this.value[0]==this.value[1] && this.value[1]==this.value[2]) return d3_BZ;
        if( this.value[0]==this.value[1]) return d3_Z3;
        if( this.value[1]==this.value[2]) return d3_Z3;
        if( this.value[2]==this.value[0]) return d3_Z3;
        return d3_Z6;
    },
	
	// 和值
    Sum : function(str)
    {
		this.Initialize(str);
		var rsl = 0;
		for(var i=0; i<str.length; i++) {
			rsl += this.value[i];
		}
		return rsl;
    },

	// 奇数
    Odd : function(str)
    {
		this.Initialize(str);
		var rsl = 0;
		for(var i=0; i<str.length; i++) {
			rsl += (this.value[i] % 2);
		}
		return rsl;
    },
	
	// 偶数
	Even : function(str)
	{
		return str.length - this.Odd(str);
	},

	// 奇偶形态
    OddStyle : function(str)
    {
		this.Initialize(str);
        var rsl="";
		for(var i=0; i<str.length; i++) {
			rsl += ((this.value[i] % 2)==1) ? "1" : "2";
		}
        return rsl;
    },
	
	// 大数
    Big : function(str)
    {
		this.Initialize(str);
		var rsl = 0;
		for(var i=0; i<str.length; i++) {
			rsl += (this.value[i]>4) ? 1 : 0;
		}
		return rsl;
    },
	
	// 小数
	Small : function(str)
	{
		return str.length - this.Big(str);
	},

	// 大小形态
    BigStyle : function(str)
    {
		this.Initialize(str);
        var rsl="";
		for(var i=0; i<str.length; i++) {
			rsl += (this.value[i]>4) ? "1" : "2";
		}
        return rsl;
    },
	
	IsPrime : function(v)
	{
		return (v==1 || v==2 || v==3 || v==5 || v==7) ? true : false;
	},

	// 质数
    Prime : function(str)
    {
		this.Initialize(str);
		var rsl = 0;
		for(var i=0; i<str.length; i++) {
			rsl += (this.IsPrime(this.value[i])) ? 1 : 0;
		}
		return rsl;
    },
	
	// 合数
	Combine : function(str)
	{
		return str.length - this.Prime(str);
	},

	// 质合形态
    PrimeStyle : function(str)
    {
		this.Initialize(str);
        var rsl="";
		for(var i=0; i<str.length; i++) {
			rsl += (this.IsPrime(this.value[i])) ? "1" : "2";
		}
        return rsl;
    },

	// 跨度
    Distance : function(str)
    {
		var vmin = 9;
		var vmax = 0;
		for(var i=0; i<str.length; i++) {
			if(this.value[i] < vmin) vmin = this.value[i];
			if(this.value[i] > vmax) vmax = this.value[i];
		}
        return vmax-vmin;
    },

	// 012形态
    RoadStyle : function(str)
    {
		this.Initialize(str);
        var rsl="";
		for(var i=0; i<str.length; i++) {
			rsl += this.value[i] % 3;
		}
        return rsl;
    },

	// 覆盖0-9的数字
	Fill : function(str)
	{
		var fAry = new Array();
		for(var i=0; i<10; i++) fAry[i]=0;
		this.Initialize(str);
		for(var i=0; i<str.length; i++) {
			fAry[this.value[i]] += 1;
		}
        var rsl="";
		for(var i=0; i<10; i++) {
			rsl += fAry[i];
		}
        return rsl;
	}
}

//DigitalExtend = new DigitalExtendClass();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// 数字型彩票的缩水选项管理
// 适用于3位数
//
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

DigitalOptionClass = function()
{
}

DigitalOptionClass.prototype = 
{
	OnTabChange : function (v)
	{
		for(var i=0; i<document.all.tCmd.length; i++) {
			document.all.tCmd[i].className = "tab4";
			document.all.cont1[i].style.display = "none";
		}
		document.all.tCmd[parseInt(v)].className = "tab3";
		document.all.cont1[parseInt(v)].style.display = "inline";
	},

	// 清除所有可以被选的和值
	OnSumClear : function()
	{
		for(var i=0; i<=27; i++) {
			document.all.iSum[i].checked = (document.all.CmdClear[0].checked) ? false : true;
		}
	},

	// 设置和值 10－20 为默认值（优选值）
	OnSumBest : function()
	{
		if(document.all.CmdClear[1].checked) {
			for(var i=0; i<=27; i++) {
				document.all.iSum[i].checked = false;
			}
			for(var i=10; i<=20; i++) {
				document.all.iSum[i].checked = true;
			}
		}
		else {
			for(var i=0; i<=27; i++) {
				document.all.iSum[i].checked = true;
			}
		}
	},

	OnOddClear : function()
	{
		for(var i=0; i<8; i++) {
			document.all.nOdd[i].checked = (document.all.StyleClear[0].checked) ? false : true;
		}
	},

	OnLargeClear : function()
	{
		for(var i=0; i<8; i++) {
			document.all.nLarge[i].checked = (document.all.StyleClear[1].checked) ? false : true;
		}
	},

	OnPrimeClear : function()
	{
		for(var i=0; i<8; i++) {
			document.all.nPrime[i].checked = (document.all.StyleClear[2].checked) ? false : true;
		}
	},

	OnRoadClear : function()
	{
		for(var i=0; i<27; i++) {
			document.all.k012[i].checked = (document.all.StyleClear[3].checked) ? false : true;
		}
	},

	OnRoadBreak : function(v1)
	{
		var vn, vk;
		for(var i=0; i<27; i++) {
			vk=0;
			for(var j=0; j<3; j++) {
				vn = document.all.k012[i].value;
				if(vn.substring(j,j+1)==v1) { vk=1; break; }
			}
			document.all.k012[i].checked = (vk==1) ? false : true;
		}
	},

	// 清除所有可以被选的和值
	OnDistanceClear : function()
	{
		for(var i=0; i<10; i++) {
			document.all.iDistance[i].checked = (document.all.CmdClear[2].checked) ? false : true;
		}
	},

	// 设置和值 10－20 为默认值（优选值）
	OnDistanceBest : function()
	{
		if(document.all.CmdClear[3].checked) {
			for(var i=0; i<10; i++) {
				document.all.iDistance[i].checked = false;
			}
			for(var i=3; i<7; i++) {
				document.all.iDistance[i].checked = true;
			}
		}
		else {
			for(var i=0; i<10; i++) {
				document.all.iDistance[i].checked = true;
			}
		}
	},

	// 变化胆号码的类型
	OnKeyChange : function()
	{
		if(document.all.cKeyType[1].checked) {
			for(var i=0; i<10; i++) {
				document.all.iKeyCode[i].checked = true;
			}
		}
		else {
			for(var i=0; i<10; i++) {
				document.all.iKeyCode[i].checked = false;
			}
		}
	},

	// 计算与上期号码重复的个数
	DuplicateLast : function(i1,i2,i3)
	{
		var s = document.all.LastCode.innerHTML.split("/");
		var cl = s[0];
		var vd=0;
		for(var i=0; i<3; i++) {
			if(parseInteger(cl.substring(i,i+1))==i1) { vd++; continue; }
			if(i1==i2 || i1==i3) continue;
			if(parseInteger(cl.substring(i,i+1))==i2) { vd++; continue; }
			if(i2==i3) continue;
			if(parseInteger(cl.substring(i,i+1))==i3) { vd++; continue; }
		}
		return (vd>3) ? 3 : vd;
	}

}

DigitalOption = new DigitalOptionClass();
