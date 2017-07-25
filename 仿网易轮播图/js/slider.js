/**
 * Created by eric on 2017/7/25.
 */

function $(id) {
    return document.getElementById(id);
}

window.onload = function() {

    var slider = $("slider");

    var sliderContainer = $("slider-container");

    var sliderCtrlContainer = $("slider-ctrl-container");

    var spanCtrls = sliderCtrlContainer.children;
    var imgLength = sliderContainer.children.length;

    var imgs = sliderContainer.children;

    var scrollWidth = slider.offsetWidth;

    for(var i=0; i<imgLength; i++) {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.setAttribute("data-index",imgLength - i );
        sliderCtrlContainer.insertBefore(span,sliderCtrlContainer.children[1]);
    }

    sliderCtrlContainer.children[1].className = "slider-ctrl-con current";

    for(var i=1; i<imgLength; i++) {
        sliderContainer.children[i].style.left = scrollWidth + "px";
    }


    var iNow = 0;
    for(var k in spanCtrls) {
        spanCtrls[k].onclick = function() {
            if(this.className == "slider-ctrl-con-prev") {
                console.log("click prev btn");
                animation(imgs[iNow],{left: scrollWidth});
                iNow = iNow - 1;
                --iNow < 0 ?  iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animation(imgs[iNow],{left: 0});
                // if(iNow < 0) {
                //     iNow = imgLength - 1 ;
                // }
                // imgs[iNow].style.left = -scrollWidth + "px";
                // animation(imgs[iNow],{left: -scrollWidth});

            } else if(this.className == "slider-ctrl-con-next"){

                animation(imgs[iNow],{left: -scrollWidth});
                iNow = iNow + 1;
                if(iNow > imgs.length - 1) {
                    iNow = 0;
                }

                imgs[iNow].style.left = scrollWidth + "px";
                animation(imgs[iNow],{left: 0});

                // iNow ++;
                // ++iNow > imgLength ? iNow = 0 : iNow;
                // imgs[iNow].style.left = scrollWidth + "px";


                console.log("click next btn");
            } else {
                console.log("click other");
            }

        }


    }

}

