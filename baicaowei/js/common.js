
/*
*给IE和其他浏览器设置兼容，获取外部样式表中的元素
*/
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr]
	} else {
		return window.getComputedStyle(obj, false)[attr];
	}
}
//封装函数实现鼠标移入元素显示，鼠标移开元素隐藏
function over(target,obj){
	target.onmouseover=function(){
		obj.style.display="block";
	};
	obj.onmouseout=function(){
		obj.style.display="none";
	};
	obj.onmouseover=function(){
		obj.style.display="block";
	};
	target.onmouseout=function(){
		obj.style.display="none";
	};
	
};
//鼠标移入 图片和登录窗口出现，点击页面任何地方，图片和登录窗口消失
var enter=document.getElementById("enter");
enter.onmouseover=function(){
	var enter_triangle=document.getElementById("enter_triangle");
	var _login=document.getElementById("_login");
	enter_triangle.style.display="block";
	_login.style.display="block";
};
document.onclick=function(){
	enter_triangle.style.display="none";
	_login.style.display="none";
};
//调用over函数，实现联系客服下拉菜单的显示和隐藏
var word_service1=document.getElementById("word_service1");
var _service1=document.getElementById("_service1");
over(word_service1,_service1);
//调用over函数，实现更多下拉菜单的显示和隐藏
var more_word=document.getElementById("more_word");
var _more=document.getElementById("_more");
over(more_word,_more);

//鼠标移入新品尝鲜添加下边框
var new_taste=document.getElementById("new_taste");
var under=document.getElementsByClassName("under")[0];
new_taste.onmouseover=function(){
	under.style.display="block";
}
new_taste.onmouseout=function(){
	under.style.display="none";
}

//封装函数，实现鼠标移入 背景变成红色 隐藏的块显示；移出 背景变黑 块恢复隐藏
function chengBacground(target,obj){
	target.onmouseover=function(){
		target.style.background="red";
		obj.style.display="block";
	}
	
	target.onmouseout=function(){
		target.style.background="black";
		obj.style.display="none";
	}
	obj.onmouseover=function(){
		target.style.background="red";
		obj.style.display="block";
	}
	obj.onmouseout=function(){
		target.style.background="black";
		obj.style.display="none";
	}
}


//封装运动函数 ,可以实现对象的变加速运动 方向，目标位置可以由用户定义  
function move(obj,json){
	clearInterval(obj.timer);
	//遍历json,取出json属性值即目标位置
	for(var attr in json){
		var target=json[attr];
		var speed=target-obj.style[attr];
		
	}
}

//封装函数 实现鼠标移入 图片加边框 鼠标移出边框消失
function addBorder(obj) {
	obj.hover(function() {
		$(this).addClass("border");
	}, function() {
		$(this).removeClass("border");
	});
}







 
   
 //封装函数 实现透明度的动态变换  鼠标移入变为50  移出变为100
function changeOpacity(obj, target) {
	var speed = 1;
	var timer = null;
	var alpha = 30;
	obj.onmouseover = function() {
		startrun(50);
	}
	obj.onmouseout = function() {
		startrun(100);
	}

	function startrun(target) {
		clearInterval(timer);
		timer = setInterval(function() {
			if (target > alpha) {
				speed = 2;
			} else {
				speed = -2;
			}

			if (alpha == target) {
				clearInterval(timer);
			} else {
				alpha = alpha + speed;
				obj.style.filter = 'alpha(opacity=' + alpha + ')';
				obj.style.opacity = alpha / 100;
				document.title = alpha;
			}
		}, 30)
	}
}
 
//调用函数over 实现右导航栏的动态效果
var people=document.getElementById("people");
var list_one=document.getElementById("list_one");
over(people,list_one);

var dingdan=document.getElementById("dingdan");
var list_two=document.getElementById("list_two");
over(dingdan,list_two);

var cut_paper=document.getElementById("cut_paper");
var list_thr=document.getElementById("list_thr");
over(cut_paper,list_thr);

var ma=document.getElementById("ma");
var list_four=document.getElementById("list_four");
over(ma,list_four);




































