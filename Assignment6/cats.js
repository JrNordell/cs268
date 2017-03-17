

function swapImage(id, pathname){
    document.getElementById(id).src = pathname;
}

function playAudio(id){
   var aud = document.getElementById(id);
   aud.play();
}

function makeClear(bool, pathname){
    if(bool == 1) {
        document.getElementById("container").style.opacity = .2;
        document.getElementById("popupContainer").style.visibility = 'visible';
        // // var a = (window.innerHeight - document.getElementById("popupContainer").offsetHeight)/2;
        // // var b = (window.innerWidth - document.getElementById("popupContainer").offsetWidth)/2;
        // var a = ($(window).height()) - ($("popupContainer").offsetHeight);
        // var b = ($(window).width()) - ($("popupContainer").offsetWidth);
        // document.getElementById("popupContainer").style.top = a;
        // document.getElementById("popupContainer").style.left = b;
        // console.log(a, document.getElementById("popupContainer").style.top, b);

        //Javascript was not changing style attributes for some unknown reason.
        //switched to Jquery because I couldn't figure anything else out



        $('#popupContainer').css("top", (($(window).height() - 333)/2) + $(window).scrollTop() + "px");
        $('#popupContainer').css("left", (($(window).width() - 500)/2) + $(window).scrollLeft() + "px");
    }else{
        document.getElementById("container").style.opacity = 1;
        document.getElementById("popupContainer").style.visibility = 'hidden';
    }
    document.getElementById("empty").src = pathname;
    document.getElementById("vidempty").src = "";
}

//if you double click the video it will go to the center, unknown why this is the case
function popupVideo(bool, pathname){
    if(bool == 1){
        document.getElementById("container").style.opacity = .2;
        document.getElementById("popupContainer").style.visibility = 'visible';

        //same reason as above for JQuery use here

        $('#popupContainer').css("top", (($(window).height() - $('#popupContainer').outerHeight())/2) + $(window).scrollTop() + "px");
        $('#popupContainer').css("left", (($(window).width() - $('#popupContainer').outerWidth())/2) + $(window).scrollLeft() + "px");
    }else{
        document.getElementById("container").style.opacity = 1;
        document.getElementById("popupContainer").style.visibility = 'hidden';
    }
    document.getElementById("vidempty").src = pathname;
    document.getElementById("empty").src = "";
}

