var hour=document.querySelector(".hourd");
var minute=document.querySelector(".minute");
var second=document.querySelector(".second");
function showTime(){
    var d=new Date();
    var t_hour=d.getHours();
    var t_minute=d.getMinutes();
    var t_second=d.getSeconds();
    if(t_hour>12) {
        t_hour-=12;
    }
    var r_hour=90+360/12*t_hour+t_minute/60*30+t_second*(1/120);
    hour.style.transform="rotateZ("+r_hour+"deg)";
    var r_minute=90+t_minute*6+t_second/10;
    minute.style.transform="rotateZ("+r_minute+"deg)";
    var r_second=-270;
    if(t_second==0){r_second=90}
    r_second+=t_second*6;
    // if(t_second==0){r_second=90+360*t_minute;console.log(r_second)}
    second.style.transform="rotateZ("+r_second+"deg)";
}
showTime();
var repeat=setInterval(showTime, 1000);