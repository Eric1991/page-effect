
function animation(obj,target,speed) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){

        var speedDirection = target > parseInt(obj.style.left)  ?  speed : speed * -1;

        obj.style.left = obj.offsetLeft +  speedDirection + "px";

        var result = Math.abs(target - parseInt(obj.style.left));

        if( result <= speed) {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }



    },30);
}