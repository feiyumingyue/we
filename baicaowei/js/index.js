//banner图下的二级菜单
var $Li = $(".targ").find("li");
var $sec = $(".banner").find(".one");
$Li.hover(function() {
	$(this).css("background", "#d4362a");
	$(this).find("img").attr("src", "img/sec_list/sec_list_03.jpg");
	$sec.eq($(this).index()).show();

}, function() {
	$Li.css("background", "");
	$(this).find("img").attr("src", "img/sec_list/images/sec_list_06.jpg")
	$sec.eq($(this).index()).hide();
});
$sec.hover(function() {
	$Li.eq($(this).index() - 1).css("background", "#d4362a");
	$Li.eq($(this).index() - 1).find("img").attr("src", "img/sec_list/sec_list_03.jpg");
	$(this).show();
}, function() {
	$Li.css("background", "");
	$Li.find("img").attr("src", "img/sec_list/images/sec_list_06.jpg");
	$(this).hide();
});

//调用addBorder函数 实现main1图片动态效果
addBorder($(".picture").find("img"));
//调用addBorder函数 实现main2图片动态效果
addBorder($(".main2_2_B1"));
//调用addBorder函数 实现main4图片动态效果
addBorder($(".main4_C_one").find("img"));


//用jq方法封装函数实现自动更换图片效果 文字跟随变化
function changeCont(obj, Color, num, con) {
	var currentIndex = 0;
	setInterval(function() {
		obj.css("top", -currentIndex * num);
		currentIndex = ++currentIndex > (con - 1) ? 0 : currentIndex;
		Color.css("color", "#000");
		Color.eq((currentIndex - 1)).css("color", "#cf3324");

	}, 3000);
}
//jq封装函数 实现鼠标移入 前面内容做相应切换 文字变红
function followCont(obj, target) {
	obj.hover(function() {
		obj.css("color", "#000");
		$(this).css("color", "#cf3324");
		//		console.log(-($(this).index()) * 420)
		target.css("top", -($(this).index()) * 420);
	});
}







//main3自动更换图片效果 文字跟随变化
var _li = $(".word1").eq(0).find("li");
var _moveObj = $(".photo_frame").find(".pic");
changeCont(_moveObj, _li, 420, 4);
//main3鼠标移入  图片跟随切换 文字变红
_li.hover(function() {
	_li.css("color", "#000");
	$(this).css("color", "#cf3324");
	//	console.log(-($(this).index()) * 420)
	_moveObj.css("top", -($(this).index()) * 420);
});

//调用函数changeCont 实现main4的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main4_C").find(".long_box");
var wenzi = $("#_main4").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main4的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//调用函数changeCont 实现main5的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main5_C").find(".long_box");
var wenzi = $("#_main5").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main5的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//调用函数changeCont 实现main6的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main6_C").find(".long_box");
var wenzi = $("#_main6").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main6的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//调用函数changeCont 实现main7的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main7_C").find(".long_box");
var wenzi = $("#_main7").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main7的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//调用函数changeCont 实现main8的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main8_C").find(".long_box");
var wenzi = $("#_main8").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main8的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//调用函数changeCont 实现main9的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main9_C").find(".long_box");
var wenzi = $("#_main9").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main9的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//调用函数changeCont 实现main10的自动换内容并且相应文字跟随变化效果
var cont_frame = $("#_main10_C").find(".long_box");
var wenzi = $("#_main10").find(".main4_R").find("li");
changeCont(cont_frame, wenzi, 529, 3);
//调用函数 实现main10的实现鼠标移入 前面内容做相应切换 文字变红
followCont(wenzi, cont_frame);

//左导航条的动态效果
//左侧导航条点击事件
var _item_leftLi = $("#_item_left").find("li");
var mark = 1;
_item_leftLi.not(".backTop").click(function() {

	//	console.log(_item_leftLi.find("p"));
	_item_leftLi.find("p").css("display", "none");
	_item_leftLi.find("p").removeClass("active");
	$(this).find("p").addClass("active");
	$(this).find('p').css("display", 'block');
	//点击左边导航 然后跳到指定的楼层
	var $index = $(this).index(); //找到了对应的序列号
	var $top = $(".main4").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
	$("body,html").animate({
		scrollTop: $top
	}, 500, function() {
		mark = 1;
	}); //浏览器滚动的高度
	mark = 2; //改变标记
});

//左侧导航条划入划出事件
_item_leftLi.not(".backTop").hover(function() {
	_item_leftLi.find("p").css("display", "none");
	$(this).find("p").css("display", "block");
}, function() {
	if (mark == 1) {
		console.log(13);
		_item_leftLi.find("p").css("display", "none");
	}

});
//浏览器串口滚动事件
$(window).scroll(function() {
	var $t = $(this).scrollTop(); //滚动条滚动高度
	//	var $index = $(this).index()
	//	console.log($index);
	if (mark == 1) {
		//滚动条高度为1700px时，显示导航条；
		if ($t > 2000) {
			$("#_item_left").fadeIn();
		} else {
			$("#_item_left").fadeOut();
		}
		if ($t > 500) {
			$(".header").find(".pop_up").fadeIn();
		} else {
			$(".header").find(".pop_up").fadeOut();
		}
		var $obj = $(".main4");
		//循环每一个Louti 然后找到最先满足条件的那个 Louti
		$obj.each(function() {
			var $index = $(this).index();
			//			console.log($(this));
			//楼层与浏览器上面的高度
			//			var $height = $obj.eq($index).offset().top ;
			//document.title = $t + "--" + $height;

			//			if ($t < $height) {
			//				_item_leftLi.find("p").removeClass("active")
			//				_item_leftLi.eq($index).find("p").addClass("active");
			//				return false;
			//			}
		});
	}

});
//点击回到顶部
$(".backTop").click(function() {
	$("body,html").animate({
		scrollTop: 0,
	});
});




//判断是否登录  登录改变用户名
var head_name=document.getElementById("head_name");
var states = localStorage["state"];
if (!states) {
	states = []; //对用户名进行判断，不存在赋值为空数组
} else {
	states = JSON.parse(states); //存在把json对象转成数组
};
if(state.now="true"){
	head_name.innerHTML="您好，"
}

