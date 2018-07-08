window.onload = function(){
	// 获取div容器对象
	var box = document.getElementById("div1");
	// 获取图片集合对象
	var imgs = box.getElementsByTagName("img");

	// 分析得知我偶们需要单张图片宽度以及堆叠宽度

	// 获取单张图片宽度
	var imgWidth=imgs[0].offsetWidth;
	// 设置露出宽度
	var leftWidth = 100;
	// 设置容器总宽度；
	var boxWidth = imgWidth + (imgs.length-1)*leftWidth;
	// 赋值
	box.style.width = boxWidth+'px';

	// 设置每道门的初始位置

	function starMove(){
		for(var i=1;i<imgs.length;i++){
			imgs[i].style.left = imgWidth+(i-1)*leftWidth+"px";
		}
	}
	starMove();

	// 滑动的距离
	var moveWidth = imgWidth-leftWidth;

	// 为每一道门绑定事件；

	for(var i=0;i<imgs.length;i++){
		(function(i){
			console.log(i);
			imgs[i].onmousemove = function(){
				// 先将每一道门复位
				starMove();
				// 实现滑动效果，即是实现第二张图片到当前图片一起滑动
				for(var j=1;j<=i;j++){
					console.log(j+'***')
					imgs[j].style.left=parseInt(imgs[j].style.left,10)-moveWidth+"px";
				}
			}
		})(i)
	}


}
