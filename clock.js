let hourId = document.getElementById("hours")
let minuteId =document.getElementById("minutes")
let secondsId =document.getElementById("seconds")
let ampmId = document.getElementById("ampm")

function updateClock(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = "AM"
    if(h>12){
        h = h-12
        ampm = "PM"
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourId.innerText = h
    minuteId.innerText = m
    secondsId.innerText = s
    ampmId.innerText = ampm

    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock()