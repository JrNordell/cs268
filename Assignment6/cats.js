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
    }else{
        document.getElementById("container").style.opacity = 1;
    }
    document.getElementById("empty").src = pathname;
    document.getElementById("popupContainer").style.visibility = 'visible';
    document.getElementById("popupContainer").clientTop = window.screenTop;
}

function popupImage(){

}