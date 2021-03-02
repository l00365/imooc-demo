window.onload=function(){
	let box=document.getElementsByClassName("box"); //lyy 获取到的是个多元素的数组，所以下面要加[0]
	box[0].addEventListener('click' ,()=>{
		alert('这是测试代码');
	})
}
