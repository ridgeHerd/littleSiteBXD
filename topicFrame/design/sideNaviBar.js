/* 侧边导航栏 sideNavi 2017Mar26增加 */

'use strict';

var sideNaviFlag = true;
var strSideNaviCmd;
var strSideNaviTip;

function controlSideNavi(){
	if (sideNaviFlag){
		strSideNaviCmd = "none";
		strSideNaviTip = "展开";
		sideNaviFlag = false;
	}
	else{
		strSideNaviCmd = "block";
		strSideNaviTip = "收起";
		sideNaviFlag = true;
	}
	document.getElementById("sideNaviFold").style.display = strSideNaviCmd;
	document.getElementById("sideNaviTip").innerHTML = strSideNaviTip;
}

/*
2017.3.26，为v1.1.2增加

修改记录
----------
v1.1.3修订(函数名，strict模式)

*/
