const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");
const dateEl=document.getElementById("date");
const monthEl=document.getElementById("month");
const yearEl=document.getElementById("year");
function clock_callender(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDate();
    let mo = new Date().getMonth();
    let y = new Date().getFullYear();
    let ampm = "AM";
    if(h>12){
        h=h-12
        ampm="PM";
    }
    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;
    dateEl.innerText=d;
    monthEl.innerText=mo;
    yearEl.innerText=y;
    setTimeout(()=>{
        clock_callender();
    },1000)
}
clock_callender();
