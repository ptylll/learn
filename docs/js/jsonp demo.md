###### jsonp demo
   ```
	function addScriptTag(src){
		var script = document.createElement("script");
		script.setAttribute("type","text/javascript");
		script.src = src;
		document.body.appendChild(script);
	}
	function myFn(data){
		alert(data);
	}

	document.getElementById('jsonP').addEventListener("click",function(){
		addScriptTag("http://bcp.baidu.com/news/access?callback = myFn");
	});	
```	
