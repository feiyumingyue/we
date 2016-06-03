


var cellphone = document.getElementById("cellphone")
var phone_check_result = document.getElementById("phone_check_result");
var password = document.getElementById("password");
var subm = document.getElementById("subm");
subm.onclick = function() {
	var lst = localStorage['users']; //从数据库中取出json对象
//	console.log(lst)
	if (!lst) {
		lst =[];
		phone_check_result.innerHTML="您还未注册"; 
		
	} else {
		lst = JSON.parse(lst); //存在把json对象转成数组
	}
	
	for (var i = 0; i < lst.length; i++) { //遍历转换后得数组，如果与现在输入的一致，提示用户
		
		if ( (lst[i].name == cellphone.value) && (lst[i].pass == password.value)) {
			location.href = "index.html";
			break;
		}else{
			phone_check_result.innerHTML="用户名或密码错误"
		};
	};
};	

	
	
	


