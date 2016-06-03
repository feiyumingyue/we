var lst = localStorage['goods']; //从数据库中取出json对象
if (!lst) {
	lst = []; //对用户名进行判断，不存在赋值为空数组
} else {
	lst = JSON.parse(lst); //存在把json对象转成数组
};

//计算总价并且赋值
var funAllPrice = function() {
	var allPrice = 0;
	for (var i = 0; i < lst.length; i++) {
		//alert(lst.length);
		var item = lst[i];
		allPrice += item.price * item.num;
	}
	$('#spanAll').html(allPrice.toFixed(2)+"元");
};
//动态创建表格
var tb = $('#tb');
for (var i = 0; i < lst.length; i++) {
	var tr = $('<tr></tr>');
	tb.append(tr);
	var item = lst[i];

	//	商品名
	td = $('<td></td>');
	tr.append(td);
	img=$("<img/>");
	img.attr("src",item.src);
	td.append(img);
	p=$("<span></span>");
	p.addClass("span");
	p.html(item.name);
	td.append(p);

	//商品价格
	td = $('<td></td>');
	tr.append(td);
	td.html(item.price);

	//数量
	td = $('<td></td>');
	tr.append(td);
	var sel = $('<select></select>');
	for (var n = 1; n < 10; n++) {
		var option = $('<option></option>');
		option.html(n).attr('value', n);
		sel.append(option);
	}
	td.append(sel);
	sel.val(item.num);
	
	//小计
		td = $('<td></td>');
		tr.append(td);
		td.html((item.price * item.num).toFixed(2));
		
		funAllPrice();
	
	//小计改变时总价随之改变
	sel.change(function() {
		var tr = $(this).parents('tr'),
			tds = tr.find('td'),
			td3 = tds.eq(3),
			obj = lst[tr.index()];
			price = obj.price;
//			console.log(price);
		obj.num = $(this).val();
		td3.html((price * obj.num).toFixed(2));
		funAllPrice();
	});
	
		//删除
		td = $('<td></td>');
		tr.append(td);
		var btn = $('<button>移除</button>');
		td.append(btn);
		btn.click(function() {
			var tr = $(this).parents('tr');
			var name = tr.find('td').eq(0).find("span").html();
			console.log(name);
			lst = lst.filter(function(T) {
				return T.name != name;
			});
			funAllPrice();
			tr.remove();
		});
	

}