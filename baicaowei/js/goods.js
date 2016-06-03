//轮播图

var oUL = document.getElementById("banner_imglist"); //要移动的对象
var navlist = document.getElementById("banner_nav").children; //小按钮

var currentIndex = 1;

//鼠标移入  运动停止
oUL.onmouseover = function() {
		clearInterval(timer);
	}
	//	//鼠标移出  运动开始
oUL.onmouseout = function() {
		timer = setInterval(move, 1000);
	}
	//小图片跟随图片变化
for (var i = 0; i < navlist.length; i++) {
	navlist[i].index = i;
	navlist[i].onclick = function() {
		for (var i = 0; i < navlist.length; i++) {
			navlist[i].className = "";
		}
		this.className = "addOrangeBorder";
		currentIndex = this.index;
		animate(oUL, {
			left: -currentIndex * 400,
		});
	}
}

function startMove(cbk) {
	animate(oUL, {
		left: -currentIndex * 400,
	}, cbk);
}

timer = setInterval(move, 1000);

function move() {
	for (var i = 0; i < navlist.length; i++) {
		navlist[i].firstChild.className = "";
	}
	if (currentIndex == 5) {
		navlist[0].firstChild.className = "addOrangeBorder";
	} else {
		navlist[currentIndex].firstChild.className = "addOrangeBorder";
	}
	startMove(function() {
		currentIndex++;
		if (currentIndex > 5) {
			currentIndex = 1;
			oUL.style.left = 0;
		}
	});
}



//商品详情小导航的动态效果  点击背景变红  文字变白跳转到相应内容
var goods_navs = document.getElementById("goods_navs").children;
var _photodetails = document.getElementById("_photodetails").children;
for (var i = 0; i < goods_navs.length; i++) {
	goods_navs[i].index = i;
	goods_navs[i].onclick = function() {
		for (i = 0; i < goods_navs.length; i++) {
			goods_navs[i].className = '';
			_photodetails[i].style.display = "none";
		}
		this.className = 'backToRed';
		_photodetails[this.index].style.display = "block";
	}
}

//吃货评价部分 鼠标移入背景颜色变#fffae2
var _goods_evaluate = document.getElementById("_goods_evaluate").children;
for (var i = 0; i < goods_navs.length; i++) {
	_goods_evaluate[i].onmouseover = function() {
		for (i = 0; i < goods_navs.length; i++) {
			_goods_evaluate[i].style.background = '#ffffff';
			this.style.background = '#fffae2';
		}
	}
}

//猜你喜欢 鼠标划入添加边框
addBorder($(".likes").find(".main4_C_one"))

//调用函数changeOpacity  实现加入购物车背景色的透明度变化
var _btn1 = document.getElementById("_btn1");
changeOpacity(_btn1, 20)

//点击增加 减少按钮 数量随之改变 最多10件 最少1件
var k = $("#goods_num_value")
$("#goods_add").click(function() {
	if (k.val() < 10) {
		k.val(parseInt(k.val()) + 1);
	}
});
$("#goods_reduce").click(function() {
	if (k.val() > 1) {
		k.val(parseInt(k.val()) - 1);
	}
})



//点击加入购物车 把商品信息存入localStorage 同时跳转到购物车页面
var _btn1 = $("#_btn1");
_btn1.click(function() {
	var lst = localStorage['goods']; //从数据库中取出json对象
	if (!lst) {
		lst = []; //对用户名进行判断，不存在赋值为空数组
	} else {
		lst = JSON.parse(lst); //存在把json对象转成数组
	};
console.log($("#goods_name").html());
	//判断，如果名字重复就把数量增加
	console.log(lst);
	var b=false;
	if(lst.length !=0){
		$.each(lst, function(key,val) {
			console.log(lst);
			if (val.name == $("#goods_name").html()) {
				b=true;
				val.num = parseInt($("#goods_num_value").val()) + val.num;
			}
		});
	}
	if(b==false) { //如果没有名字重复则存入当前商品信息
		console.log(123);
		lst.push({
			name: $("#goods_name").html(),
			price: $("#goods_price").html(),
			num: parseInt($("#goods_num_value").val()),
			src: $("#goods_pic").attr("src"),
		});
	}

	localStorage['goods'] = JSON.stringify(lst); //将lst转换成json格式存入localStorage
	location.href = "shop_car.html";

});