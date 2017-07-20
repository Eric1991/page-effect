/**
 * Created by eric on 2017/7/20.
 */

function animation(obj,target,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var attr in target) {
            var current = 0;
            if(attr == "opacity") {
                current = parseInt(getStyle(obj,attr) * 100);
                console.log("current..." + current);
            } else {
                current = parseInt(getStyle(obj,attr));
            }


            var step = (target[attr] - current) / 10;
            step = step > 0 ?  Math.ceil(step) : Math.floor(step);

            if(attr == "opacity") {
                console.log("result.." + (current + step) / 100);
                obj.style.opacity = (current + step) / 100;
            } else if(attr == "zIndex") {
                obj.style.zIndex = target[attr];
            } else {
                obj.style[attr] = current + step + "px";
            }

            if(target[attr] !=  current ) {

                flag = false;
            }
        }

        if(flag) {
            console.log("stop");
            clearInterval(obj.timer);
            fn && fn();
        }

    },10);
}


function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj,null)[attr];
    }
}
