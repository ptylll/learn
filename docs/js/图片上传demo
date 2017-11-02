```
function perveImg(file){
				
var div = document.getElementById('imgPerve');//预览图片div
var imgUp = document.getElementById('imgUp');//上传图片控件

	if(imgVerify(file)){
		if(file.files && file.files[0]){
			div.innerHTML = "<img id='imgHead'>";
			var img = document.getElementById('imgHead');
		    img.onload = function(){
				img.style.width="100%";
				img.style.height="100%";
			}
			var reader = new FileReader();//本地文件读入内存
			reader.onload = function(evt){
				img.src = evt.target.result;
			}
			reader.readAsDataURL(file.files[0]);
		}else{
		    imgUp.select();//IE指针
		    var imgSrc = document.selection.createRange().text;  
		div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
	div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;  
		}
	}else{
		return false;
	}
}
function imgVerify(file){//图片基本验证
	var fileSrc = file.value;//获取文件路径

	if(!fileSrc.match(/.jpg|.gif|.png|.bmp/i)){

		alert("请上传正确图片");

		file.value ="";

		return false;

	}else{
		if(!(file.files[0].size /1024/1024) > 1){

			alert("上传图片不能超过1M");

			file.value ="";

			return false;
		}else{
			return true;
		}
	}
}
```
