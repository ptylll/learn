### js 扫码下载app 

``` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!--
width=device-width：让文档的宽度与设备的宽度保持一致，且文档最大的宽度比例是1.0
initial-scale=1：初始的缩放比例
maximum-scale=1：允许用户缩放到的最大比例（对应还有个minimum-scale）
user-scalable=no：不允许用户手动缩放
-->
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"  />
    <!--
        telephone=no：禁止自动将页面中的数字识别为电话号码
        address=no：禁止自动地址转为链接
        email=no：禁止自动将email转为链接
    -->
    <meta name="format-detection" content="telephone=no,address=no,email=no" />
    <!-- 强制将页面布局为一列 -->
    <meta name="mobileOptimized" content="width" />
    <!-- 申明页面是移动友好的 -->
    <meta name="handheldFriendly" content="true" />
    <!-- 允许用户使用全屏模式浏览 -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- 当用户使用全屏浏览时，将状态条设置为黑色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
</head>
<script>
    window.onload=function() {
        var Terminal = {
            // 辨别移动终端类型
            platform: function () {
                var u = navigator.userAgent, app = navigator.appVersion;
                console.log(u);
                return {
                    // android终端或者uc浏览器
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                    // 是否为iPhone或者QQHD浏览器
                    iPhone: u.indexOf('iPhone') > -1,
                    // 是否iPad
                    iPad: u.indexOf('iPad') > -1
                };
            }(),
            // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };
        // 根据不同的终端，跳转到不同的地址
        var theUrl = '';//默认地址
        if (Terminal.platform.android) {
            theUrl = '';//安卓下载地址
        } else if (Terminal.platform.iPhone) {
            theUrl = '';//ios地址
            document.getElementById("image").style.display = "block";
        } else if (Terminal.platform.iPhone) {
            alert('暂不支持该设备!');
            theUrl = "";
        }
        location.href = theUrl;
    }
</script>
<body style="width:100%;height:100%;">
<img src="../images/ios-prompt.jpg" style="width:100%;display:none;height:auto;" id="image">
</body>
</html>

```
