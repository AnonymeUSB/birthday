var msg = document.getElementById("birthday");
var msgTop = msg.offsetTop;
var count1 = 0;
var count2 = 5;

const music = new Audio('Volume Alpha 20. Dog.mp3');
music.play();
music.loop =true;


function anim() {

    var X = 0;
    var Y = 350;

    document.getElementById("birthday").style.transform = 'rotate(' + X + Y + 'deg)';

}


    setInterval(anim, 100);

