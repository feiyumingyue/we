//表单校验
//手机号码校验
var cellphone = document.getElementById("cellphone")
var phone_check_result = document.getElementById("phone_check_result");
cellphone.onblur = function() {
	if (!/^1(3|5|7|8)\d{9}$/.test(cellphone.value.replace(/\s+/g, ""))) {
		phone_check_result.innerHTML = "手机号码格式不对";
//		flag=false;
	} else {
		phone_check_result.innerHTML = "";
	}
}

//密码校验
var password = document.getElementById("password");
var password_check_result = document.getElementById("password_check_result");
password.onblur = function() {
	if (!/^[a-z0-9A-Z]{8,16}$/.test(password.value)) {
		password_check_result.innerHTML = "密码不合法";
//		flag=false;
	} else {
		password_check_result.innerHTML = "";
	}
}

//再次输入密码校验
var confirm_pwd = document.getElementById("confirm_pwd");
var twoPassword_check_result = document.getElementById("twoPassword_check_result");
confirm_pwd.onblur = function() {
		if (password.value != confirm_pwd.value || password.value == "") {
			twoPassword_check_result.innerHTML = "两次密码必须输入一致 ！！！";
//			flag=false;
		} else {
			twoPassword_check_result.innerHTML = "";
		}
	}

	//提交数据给localStorange,并且对手机号进行校验，未被注册过才可以注册
function submit() {
	var lst = localStorage['users']; //从数据库中取出json对象
	if (!lst) {
		lst = []; //对用户名进行判断，不存在赋值为空数组
	} else {
		lst = JSON.parse(lst); //存在把json对象转成数组
	}
	var a=1;
	for (var i = 0; i < lst.length; i++) { //遍历转换后得数组，如果与现在输入的一致，提示用户
		if (lst[i].name == cellphone.value) {
			a=2;
			phone_check_result.innerHTML = ("用户名已被注册,请直接登录");
			break;
		}	
	};
	if(a==1){
		lst.push({
			name: cellphone.value,
			pass: password.value,
//			state:"false";
		}); //通过上述测试后，将用户名和密码加进lst中	
		localStorage['users'] = JSON.stringify(lst); //将lst转换成json格式存入localStorage
		twoPassword_check_result.innerHTML="注册成功，请登录";
	};
	
};



//当flag为true时  将数据提给localStrange
var subm = document.getElementById("subm");
subm.onclick = function() {
	//判断flag的值
	var flag = true; //表示能提交
//	var lst = localStorage['users'];
//	for (var i = 0; i < lst.length; i++) { //遍历转换后得数组，如果与现在输入的一致，提示用户
//		if (lst[i].name == cellphone.value) {
//			flag = false;	
//		};
//	};
		
	if (!/^1(3|5|7|8)\d{9}$/.test(cellphone.value.replace(/\s+/g, ""))) {
		flag = false;
	};
	if (!/^[a-z0-9A-Z]{8,16}$/.test(password.value)) {
		flag = false;
	};
	if (password.value != confirm_pwd.value || password.value == "") {
		flag = false;
	};
//	console.log(234);
	if (flag==true) {
		submit(); //提交
	}
}