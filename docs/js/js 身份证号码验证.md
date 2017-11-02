##### [js 身份证号码验证](http://m.orsoon.com/article/173668.html)
 demo
```
<html>
<head>
    <script>
        var arr2 = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var arr3 = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        function checkid() {
            var t = document.getElementById("gettext").value;
            if (t.length == 18) {
                console.log('11');
                var arr = t.split('');
                var s;
                var reg = /^\d+$/;
                var pd = 0;
                for (i = 0; i < 17; i++) {
                    if (reg.test(arr[i])) {
                        s = true;
                        pd = arr[i] * arr2[i] + pd;
                    } else {
                        s = false;
                        break;
                    }
                }
                if (s = true) {
                    var r = pd % 11;
                    if (arr[17] == arr3[r]) {
                        document.getElementById("show").innerHTML = "身份证号合法  尾号为：" + arr3[r];
                    } else {
                        document.getElementById("show").innerHTML = "非合法身份证号";
                    }
                }

            } else {
                document.getElementById("show").innerHTML = "非合法身份证号";
            }
        }
    </script>
</head>
<body>
    <input id="gettext" type="text"  size="30" onkeyup="checkid()"/>
        <p id ="show"></p><br>
</body>
</html>
```
