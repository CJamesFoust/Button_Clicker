function hideMe() {
    var x = document.getElementById("hide");
    var y = document.getElementById("hideSecond");

    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
        y.style.display = "inline";
    }


}

function hideMe2() {
    var x = document.getElementById("hideSecond");
    var y = document.getElementById("hideThird");

    x.style.display = "none";
    y.style.display = "inline";
    
}

function hideMe3() {
    var x = document.getElementById("hideThird");
    var y = document.getElementById("sck");
    var z = document.getElementById("bdy");
    var audio = new Audio("assets/NGGYU.mp3");

    x.style.display = "none";
    y.style.display = "block";
    z.style.backgroundImage = "url('https://github.com/CJamesFoust/Button_Clicker/blob/master/assets/image0.png?raw=true')";
    z.style.backgroundSize = "1280px";
    z.style.backgroundRepeat = "no-repeat";
    y.style.color = "white";
    audio.play();
    
}

