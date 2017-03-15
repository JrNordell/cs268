function swapImage(id, pathname){
    document.getElementById(id).src = pathname;
}

function playAudio(pathName){
    var audioBit = new Audio('audio/cat_meow.mp3');
    audioBit.play();
}