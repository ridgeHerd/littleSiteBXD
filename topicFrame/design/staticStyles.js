/* 统计页js代码 2017Mar31分出 */

'use strict';

var iStyle = 1;//当前使用的风格
var totStyle = 4;//风格总数

var arrStyCssFile = [ //风格css文件
	"design/static1.css", //标准
	"design/static2.css", //怀旧
	"design/static3.css", //简洁
	"design/static4.css", //纯文本
];
var arrStyBtn = [ //风格button的ID
	"sty1",
	"sty2",
	"sty3",
	"sty4",
];
var arrStyBtnSb = [ //sideBar中风格button的ID
	"sty1sb",
	"sty2sb",
	"sty3sb",
	"sty4sb",
];

/*iStyle容错*/
function checkStyleValid(){
	if( 1 > iStyle || totStyle < iStyle ){
		iStyle = 1;
	}
}/*2017mar31论证审核通过*/

/*选择风格*/
function chooseStyle(choice){
	//alert("choose!");
	//data prepare
	var sty;
	iStyle = choice;
	checkStyleValid();
	//set style css
	sty = document.getElementById("perCss");
	sty.href = arrStyCssFile[iStyle-1];
	//update button display status
	updateStyleBtn();
}/*2017mar31论证审核通过*/

/*轮换风格*/
function switchStyle(){
	//alert("switch!");
	checkStyleValid();
	iStyle = (iStyle) % totStyle + 1;//range:1,2,3,4
	chooseStyle(iStyle);//sty.href = arrStyCssFile[iStyle-1];
}/*2017mar31论证审核通过*/
/* //2017mar31
input	1 2 3 4	//输入
should	2 3 4 1	//应该变成
%4		1 2 3 0	//输入值%4之后
add 1	2 3 4 1	//输入值%4之后加1
*/

/*更新显示状态*/
function updateStyleBtn(){
	//alert("update!");
	var btn,btnsb;
	resetStyleBtn();
	btn   = document.getElementById(arrStyBtn[iStyle-1]);
	btnsb = document.getElementById(arrStyBtnSb[iStyle-1]);
	btn.style.backgroundColor = "orange";
	btn.style.color = "white";
	btnsb.style.backgroundColor = "orange";
	btnsb.style.color = "white";
}/*2017mar31论证审核通过*/

/*显示状态全部归零*/
function resetStyleBtn(){
	//alert("reset!");
	var btn,btnsb;
	for (var i = 1; i <= totStyle; i++){
		btn = document.getElementById(arrStyBtn[i-1]);
		btn.style.backgroundColor = "";
		btn.style.color = "black";
		btnsb = document.getElementById(arrStyBtnSb[i-1]);
		btnsb.style.backgroundColor = "";
		btnsb.style.color = "black";
	}
}/*2017mar31论证审核通过*/

/*
2017.3.31为v1.1.3而分出，大改进

修改记录
----------

*/
