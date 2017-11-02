
```
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));

```
##### 2.视觉稿为 720 demo

```
!function(n){var e=n.document,t=e.documentElement,i=720,d=i/100,o="orientationchange"in n?"orientationchange":"resize",a=function(){var n=t.clientWidth||320;n>720&&(n=720),t.style.fontSize=n/d+"px"};e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(window);
```
