function changestyle() {
    //Farbig und gross
    var text = document.querySelector("#text");
    var random = Math.floor(Math.random()*(16777215)).toString(16);
    var farbe = "#"+random;
    text.style["color"] = farbe;
    text.style["font-size"] = "50px";
    text.style["padding"]="32px 32px";

    //text ausgeben
    var s = document.querySelector("#src").value;
    console.log(s);
    document.getElementById("text").innerHTML = s;
}