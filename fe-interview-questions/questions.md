#web前端面试题#


##Html相关##

1.请指出以下结构中a标签内字体的颜色

```html
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/style">
		a { color:#ff0000; }
		#contact a{ color:#00ff00; }
		.safelink a { color:#0000ff; }
		h1 a { color: #cccccc; }
	</style>
</head>

<body>
	<div id="contact">
		<h1 class="safelink">
			<a href="http://www.example.com">example</a>
		</h1>
	</div>
</body>

</html>
```

2.请写出如下代码片段在不同浏览器中字体的颜色(ie、firefox、chrome、opera)，并给出理由

```html
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		#tip {
			background: blue;
			background: red\9;
			*background: black;
			_background: orange;
		}
	</style>
</head>

<body>
	<div id="tip">
		Let me see！
	</div>
</body>

</html>
```

3.在空白处加css,让这个div在页面居中

```html
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<body>
	<div style="border:1px solid black;width:200px;height:200px;_____">
		Let me in the center of the page！
	</div>
</body>

</html>
```

4.在空白处填写代码，当点击div的时候让字体颜色变灰，背景变蓝

```html
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<body>
	<div onclick="_____">
		Change my color and background color when I am clicked.
	</div>
</body>

</html>
```

5.写一段代码，让leftSecond里的内容每秒少一，一直变到0。

```html
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>

<body>
	<div id="leftSecond">60</div>
	<input type="button" value="倒计时" onclick="test();" />
	<script>
		//JavaScript code
	</script>
</body>

</html>
```

6.请简述IE里mouseover与mouseenter的区别。

## css相关 ##

> 盒模型
>

##JavaScript##

> 原型(链)、作用域（链）、事件绑定/事件委托

1.以下代码alert值是多少

```javascript
alert((false || true && false) + ',' +(0 || 1 && 2));
```

2.写正则，验证电话号码：格式为“区号—号码”，其中区号是010或02N或0NNN，电话号码是7-8位。

另外一个类似的题，如 “写正则，获取div中的文本”，其答案如下 。

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>

<body>
  <div id="leftSecond">
    <span>text1
            <a href="">text2</a>
        </span>
  </div>
  <script type="text/javascript">
    var text = document.getElementById('leftSecond').innerHTML;
    text = text.replace(/<.+?>|\W/gim, '');
    alert(text);
  </script>
</body>

</html>
```

3.以下代码alert的值是多少

```javascript
window.val = 1;
var json = {
	val: 10,
	dbl: function() {
		return this.val *= 2;
	}
};

var dbl = json.dbl;
alert(json.dbl());
alert(dbl());
alert(json.dbl.call(window));
```

4.以下代码alert值是多少

```javascript
(function() {
	var val = 1;
	var json = {
		val: 10,
		dbl: function() {
			this.val *= 2;
		}
	};

	function dbl(val) {
		val = val * 2;
	}

	alert(json.dbl());
	alert(dbl());
	alert(json.val + val);
})();
```

5.以下代码alert值是多少

```javascript
function C1(name) {
	if (name) {
		this.name = name;
	}
}

function C2(name) {
	this.name = name;
}

function C3(name) {
	this.name = name || 'John';
}

C1.prototype.name = 'Tom';
C2.prototype.name = 'Tom';
C3.prototype.name = 'Tom';

alert(new C1().name + ',' + new C2().name + ',' + new C3().name);
```

6.以下代码alert值是多少

```javascript
var test = (function(i) {
	return function() {
		alert(i * 2);
	};
	i++
}(2));
test(5);
```

## 浏览器原理

渲染

## 网络方面 ##

> http原理

1. 何为三次握手
2. http状态码
3. ajax状态码
4. 跨域问题
5. get与post的区别
6. tcp/ip体系结构

## 数据结构算法 ##

## 常用库 ##

## 其他 ##
[用户体验、设计模式]
