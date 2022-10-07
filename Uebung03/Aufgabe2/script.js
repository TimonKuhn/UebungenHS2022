
function start() {
setInterval(show, 2000)
}

function show() {
    d = new Date();
    ds = d.toDateString();
    ts = d.toTimeString();
document.querySelector("#zeit").innerHTML = ts;
document.querySelector("#datum").innerHTML = ds;
}
