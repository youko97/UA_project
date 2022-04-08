// 下拉选择框
var data = [{
		name: '默认',
		value: '1'
	},
	{
		name: '最新',
		value: '2'
	},
	{
		name: '热卖',
		value: '3'
	},
	{
		name: '价格从高到底',
		value: '4'
	},
	{
		name: '价格从低到高',
		value: '5'
	},
]
var content = document.getElementById('content');
var selectImg = document.getElementById('selectImg');
var selectItem = document.getElementById('selectItem');

var ul = document.createElement('ul');
selectItem.appendChild(ul);
for (var i = 0; i < data.length; i++) {
	var li = document.createElement('li');
	li.setAttribute('data-value', data[i].value);
	li.innerText = data[i].name;
	ul.appendChild(li);
}
/**
 * 点击下拉箭头
 */
selectImg.onclick = function() {
	console.log(selectItem.style.display);
	if (selectItem.style.display == 'none' || selectItem.style.display == '') {
		selectItem.style.display = 'block';
	} else {
		selectItem.style.display = 'none';
	}
}
content.onclick = function() {
	if (selectItem.style.display == 'none' || selectItem.style.display == '') {
		selectItem.style.display = 'block';
	} else {
		selectItem.style.display = 'none';
	}
}
var lis = selectItem.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		console.log(this.innerHTML, this.getAttribute('data-value'));
		content.innerText = this.innerHTML;
		selectItem.style.display = 'none';
	}
}
