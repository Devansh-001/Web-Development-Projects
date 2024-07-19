var d=new Date();
var second = d.getSeconds() * 6;
var minute = d.getMinutes() * 6;
var hour = d.getHours() * 30 + minute / 12;

setInterval(() => {
    d=new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = d.getHours() * 30 +minute / 12;
    document.getElementById('second').style.transform="rotate("+second+"deg)";
    document.getElementById('minute').style.transform="rotate("+minute+"deg)";
    document.getElementById('hour').style.transform="rotate("+hour+"deg)";
}, 1000);